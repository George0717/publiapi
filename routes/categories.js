const express = require('express')
const router = express.Router() 
const Categories = require('../models/Categories')

// Create 
router.get('/', async(req, res) => {
    // tampung input mahasiswa 
    const categoriesPost = new Categories({
        id: req.body.id,
        nama: req.body.nama,
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