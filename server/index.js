const { json } = require("express")
const express  = require("express")
const cors =require('cors')
const botRoutes = require("./routes/botRoutes")
const app = express()

app.use(cors())
app.use(json())

app.use(botRoutes)
app.listen(3000,()=>{
    console.log("called")
})