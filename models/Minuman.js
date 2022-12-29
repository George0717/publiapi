// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const MinumanSchema = mongoose.Schema({
    // Buat Schema data
    nama: {
        type: String,
        required: true
    },
   
})



module.exports = mongoose.model('Minuman', MinumanSchema )