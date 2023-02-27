const express = require('express')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const dbConnect = require('./config/dbConnect')
const initRoutes = require('./routes')
const app = express()
app.use(cookieParser())
const port  = process.env.PORT || 8888
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
dbConnect()

initRoutes(app)

app.listen(port, () => {
    console.log('Server running on the port :' + port);
})