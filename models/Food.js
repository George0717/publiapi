const mongoose = require('mongoose')

const FoodSchema = mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    harga: {
        type : Number,
        required: true
    },
    gambar: {
        type : String,
        required: true
    },
})

module.exports = mongoose.model('Food', FoodSchema)