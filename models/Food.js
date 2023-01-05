const mongoose = require('mongoose')

const FoodSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    gambar: {
        type: URL,
        required: true
    }
})

module.exports = mongoose.model('Food', FoodSchema)