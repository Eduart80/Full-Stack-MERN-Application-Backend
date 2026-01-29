require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

//middleware
app.use(express.json())

//api call
app.get('/', (req,res)=>{
    res.send('API running...')
})
//listening
app.listen(PORT, ()=>{console.log(`Server started at http://localhost:${PORT}`);
})