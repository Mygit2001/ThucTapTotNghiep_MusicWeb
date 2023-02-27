import cors from 'cors'
import express from 'express'
require('dotenv').config()

const app = express()
app.use(cors( { 
    origin : process.env.CLIENT_URL ,
    methods : ["POST", "GET", "PUT", "DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/', (req, res) => {res.send('server on')})
const port = process.env.PORT || 8888
app.listen(port, () => {
    
})

