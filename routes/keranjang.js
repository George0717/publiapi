const express = require('express')
const router = express.Router() 
const response = require('../config/response')
const Keranjang = require('../models/Keranjang')


// Create 
router.put('/', async(req, res) => {
    // tampung input mahasiswa 
    const keranjangPost = new Keranjang({
        nama: req.body.nama,
    })

    try {
        // simpan data 
        const keranjang = await  keranjangPost.save()
        // response
        res.json(keranjang)
    } catch (error) {
        res.json({message: error})
    }
})

router.deete('/',  async(req, res) => {
    // tampung input mahasiswa 
    try {
        // simpan data 
        const keranjang = await Keranjang.find()
        // response
        res.json(keranjang)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router