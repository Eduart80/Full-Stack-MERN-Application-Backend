const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.MONGO_URL

mongoose
  .connect(uri)
  .then(() => console.log(console.log(`Connected to MongoDB database: ${mongoose.connection.name}`)))
  .catch((err) => console.error("Connection error", err))

mongoose.connection.once('error', (error) => {
  console.log('There has been an error with MongoDB: ', error);
});