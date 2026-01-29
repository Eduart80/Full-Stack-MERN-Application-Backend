require('dotenv').config()
require('./config/db')
const express = require('express')
const PORT = process.env.PORT

const app = express()

//middleware
app.use(express.json())

//api call
app.get('/', (req,res)=>{
    res.send('API running...')
})
//listening
app.listen(PORT, ()=>{console.log(`Server started at http://localhost:${PORT}`);
})