const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    bookName:String,
    price:Number,
    authore:String,
    rating:Number,
    published_year:Number
});

let bookschema = mongoose.model("BookSchema",Schema)
module.exports = bookschema