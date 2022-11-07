const { json } = require("express")
const express  = require("express")
const cors =require('cors')
const botRoutes = require("./routes/botRoutes")
const app = express()
const mongoose = require('mongoose');


mongoose.connect("mongodb://Akshay:akshay@cluster0-shard-00-00.xtrsg.mongodb.net:27017,cluster0-shard-00-01.xtrsg.mongodb.net:27017,cluster0-shard-00-02.xtrsg.mongodb.net:27017/botmaker?authSource=admin&replicaSet=atlas-r52gk2-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",{useNewUrlParser: true,  useUnifiedTopology: true  }).
then(()=>{console.log("connected to DB")}).
catch(err=>console.log(err))

app.use(cors())
app.use(json())

app.use(botRoutes)
app.listen(3000,()=>{
    console.log("called")
})