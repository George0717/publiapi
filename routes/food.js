const express = require('express')
const router = express.Router() 
const response = require('../config/response')
const Food = require('../models/Food')



// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const foodPost = new Food({
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    })

    try {
        // simpan data 
        const food = await  foodPost.save()
        // response
        res.json(food)
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