import express from 'express'
require('dotenv').config()
const  cors =  require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors( {
    origin : process.env.CLIENT_URL ,
    methods : ["POST", 'GET', 'PUT', "DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/', (req, res) => {res.send('server on')})
const port = process.env.PORT || 8888
const listener = app.listen(port, () => {
    console.log(`server running on the port ${listener.address().port}`)
})

// const dbConnect = require('./config/dbConnect')
// const initRoutes = require('./routes')
// const app = express()
// app.use(cookieParser())

// app.use(express.json())
// app.use(express.urlencoded({ extended : true}))

// initRoutes(app)

// app.listen(port, () => {
//     console.log('Server running on the port :' + port);
// })
