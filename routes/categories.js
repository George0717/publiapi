const express = require('express')
const router = express.Router() 
const Categories = require('../models/Categories')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const categoriesPost = new Categories({
        nama: req.body.nama,
        alamat: req.body.alamat,
        npm: req.body.npm,
    })

    try {
        // simpan data 
        const categories = await categoriesPost.save()
        // response
        res.json(categories)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router