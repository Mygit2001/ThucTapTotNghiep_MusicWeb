import cors from 'cors'
import express from 'express'
require('dotenv').config()

const app = express()
app.use(cors( { 
    origin : process.env.CLIENT_URL ,
    methods : ["POST", "GET", "P"]
}))
