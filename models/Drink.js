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
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Drink', DrinkSchema)

// 5 Drink = Coca - cola, Jus Alpokad, Es Teh, Kopi, Coklat