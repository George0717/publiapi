const mongoose = require('mongoose')

const DessertSchema = mongoose.Schema({
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

module.exports = mongoose.model('Dessert', DessertSchema)

// 3 Dessert = Pancake, Ice Cream, Choco Cake