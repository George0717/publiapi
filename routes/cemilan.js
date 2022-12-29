const express = require('express')
const router = express.Router() 
const response = require('../config/response')
const Cemilan = require('../models/Cemilan')



// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const cemilanPost = new Cemilan({
        nama: req.body.nama,
    })

    try {
        // simpan data 
        const cemilan = await  cemilanPost.save()
        // response
        res.json(cemilan)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',  async(req, res) => {
    // tampung input mahasiswa 
    try {
        // simpan data 
        const cemilan = await Cemilan.find()
        // response
        res.json(minuman)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router