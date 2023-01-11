const mongoose = require('mongoose')

const DessertSchema = mongoose.Schema({
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

module.exports = mongoose.model('Dessert', DessertSchema)