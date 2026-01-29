const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI

mongoose
  .connect(uri)
  .then(() => console.log(`Connected to MongoDB database: ${mongoose.connection.name}`))
  .catch((err) => console.error("Connection error", err))

mongoose.connection.once('error', (error) => {
  console.log('There has been an error with MongoDB: ', error);
})
