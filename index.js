const express= require("express")
const app=express()
const cors = require('cors')
require('dotenv').config()

const animalRouter=require("./routes/animalRoutes")
const userRouter=require("./routes/userRoutes")
app.use(cors())
app.use(express.json())
app.use(animalRouter)
app.use(userRouter)
const PORT=process.env.PORT||5001


app.listen(PORT,()=>console.log("Server working on port "+PORT))
