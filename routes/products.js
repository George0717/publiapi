const express = require('express')
const router = express.Router() 
const Products = require('../models/Products')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const productsPost = new Products({
        id: req.body.id,
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        is_ready: req.body.is_ready,
        gambar: req.body.gambar,
        category: req.body.category,
    })

    try {
        // simpan data 
        const products = await  productsPost.save()
        // response
        res.json(products)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',  async(req, res) => {
    // tampung input mahasiswa 
    try {
        // simpan data 
        const products = await Products.find()
        // response
        res.json(products)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router