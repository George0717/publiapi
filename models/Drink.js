const mongoose = require('mongoose')

const DrinkSchema = mongoose.Schema({
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

module.exports = mongoose.model('Drink', DrinkSchema)