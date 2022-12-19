const express = require("express")
const user = require("./Routes/User.routs")
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors =require('cors')
const app = express()
const hostname ="127.0.0.1"
const port = process.env.PORT || 3000
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/user',user)

mongoose.connect("mongodb://127.0.0.1:27017/revision")
.then(()=>{
    console.log("ok")
})
.catch((err)=>{
    console.log(err)
})
app.listen(port ,hostname ,()=>{
    console.log("welcome to the backend ")
})
