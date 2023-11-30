const express = require('express')
const route = require("./router/routecomponent")
const cors = require('cors')
const connectToDb = require('./connection')
require("dotenv").config()


const app = express()

app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.use('/api',route)
const startconnection=async ()=>{
    try{
        await connectToDb(process.env.MONGO_URL)
        app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
    }
    catch(err){
        console.log(err);
    }
}

startconnection()

