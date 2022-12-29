// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')
const Categories = require('./Categories')

const ProductsSchema = mongoose.Schema({
    // Buat Schema data
    id: {
        type: Number,
        required: true
    },
    kode: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    is_ready: {
        type: Boolean,
        required: true
    },
    gambar: {
        type: Image,
        required: true
    },
    category: {
        id: Categories.id,
        nama: Categories.nama
    },
})



module.exports = mongoose.model('Products', ProductsSchema )