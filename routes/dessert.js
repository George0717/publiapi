const express = require('express')
const router = express.Router() 
const response = require('../config/response')
const Dessert = require('../models/Dessert')


// Create 
router.post('/', async(req, res) => {
    const deseertPost = new Dessert({
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    })
    try {
        // simpan data 
        const dessert = await  dessertPost.save()
        // response
        res.json(dessert)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',  async(req, res) => {
    try {
        const dessert = await Dessert.find()
        res.json(dessert)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router