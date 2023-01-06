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
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Food', FoodSchema)

// 5 Item = Burger, Pizza, Ayam, Steak, Nasi Goreng