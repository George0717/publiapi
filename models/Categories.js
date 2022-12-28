// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const CategoriesSchema = mongoose.Schema({
    // Buat Schema data
    id: {
        type: Number,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
})



module.exports = mongoose.model('Categories', CategoriesSchema )