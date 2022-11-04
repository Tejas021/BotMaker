const { json } = require("express")
const express  = require("express")
const botRoutes = require("./routes/botRoutes")
const app = express()

app.use(json())

app.use("/bot",botRoutes)
app.listen(3000,()=>{
    console.log("called")
})