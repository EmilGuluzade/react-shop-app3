const mongoose = require("mongoose")


const Blogs = mongoose.model("Blogs", new mongoose.Schema({
    image: {
        type: String,
        required: false,
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type:Number
    }
}))

module.exports = { Blogs }