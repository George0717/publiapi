// (4) Buat Schema Mahasiswa
const number = require('@hapi/joi/lib/types/number')
const mongoose = require('mongoose')
const Products = require('./Products')

const KeranjangSchema = mongoose.Schema({
    // Buat Schema data
    jumlah: {
        type: Number,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
   
})



module.exports = mongoose.model('Keranjang', KeranjangSchema )