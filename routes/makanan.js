const express = require('express')
const router = express.Router() 
const response = require('../config/response')
const Makanan = require('../models/Makanan')


// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const makananPost = new Makanan({
        nama: req.body.nama,
    })

    try {
        // simpan data 
        const makanan = await  makananPost.save()
        // response
        res.json(makanan)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',  async(req, res) => {
    // tampung input mahasiswa 
    try {
        // simpan data 
        const makanan = await Makanan.find()
        // response
        res.json(makanan)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router