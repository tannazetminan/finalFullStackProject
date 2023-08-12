// import mongoose
const mongoose = require("mongoose");

// create Schema Class
const Schema = mongoose.Schema;

// create Schema Object (bookSchema)
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true }
});

// create a model based on bookSchema Object
const bookList = mongoose.model("300357694-tannaz", bookSchema);

// export the model
module.exports = bookList;