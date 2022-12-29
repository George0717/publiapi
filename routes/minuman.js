const express = require('express')
const router = express.Router() 
const response = require('../config/response')
const Minuman = require('../models/Minuman')


// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const minumanPost = new Minuman({
        nama: req.body.nama,
    })

    try {
        // simpan data 
        const minuman = await  minumanPost.save()
        // response
        res.json(minuman)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',  async(req, res) => {
    // tampung input mahasiswa 
    try {
        // simpan data 
        const minuman = await Minuman.find()
        // response
        res.json(minuman)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router