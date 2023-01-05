const express = require('express')
const router = express.Router() 
const response = require('../config/response')
const Drink = require('../models/Drink')


// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const drinkPost = new Drink({
        nama: req.body.nama,
    })

    try {
        // simpan data 
        const drink = await  drinkPost.save()
        // response
        res.json(drink)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',  async(req, res) => {
    // tampung input mahasiswa 
    try {
        // simpan data 
        const drink = await Drink.find()
        // response
        res.json(drink)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router