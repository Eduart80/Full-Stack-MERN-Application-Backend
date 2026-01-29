require('dotenv').config()
require('./config/db')
const express = require('express')
const PORT = process.env.PORT
const passport = require('passport')
const userRouter = require('./routes/userRoutes')

const app = express()

// Middleware
app.use(express.json())
app.use(passport.initialize())

//Routers
app.use(userRouter)

//api call
app.get('/', (req,res)=>{
    res.send('API running...')
})
//listening
app.listen(PORT, ()=>{console.log(`Server started at http://localhost:${PORT}`);
})