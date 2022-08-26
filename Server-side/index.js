const express= require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const URI = process.env.URI
const PORT = process.env.PORT || 3701
const userRoute = require("./routes/userRoute")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    console.log("HI")
})
app.use("/users", userRoute)
app.use(cors({origin:"*"}))
mongoose.connect(URI, (err)=>{
    if (err) {
        console.log("Connection error");
    }
    else{
        console.log("Connection successful");
    }
})
app.listen(PORT, ()=>{
    console.log(`App is listening to ${PORT}`);
})