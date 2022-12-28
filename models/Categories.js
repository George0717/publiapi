// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const CategoriesSchema = mongoose.Schema({
    // Buat Schema data
    nama: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})



module.exports = mongoose.model('Categories', CategoriesSchema )