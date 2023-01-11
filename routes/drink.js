const express = require('express')
const router = express.Router() 
const response = require('../config/response')
const Drink = require('../models/Drink')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const drinkPost = new Drink({
        name: req.body.name,
        harga: req.body.harga,
        gambar: req.body.gambar,
    })

    try {
        // simpan data 
        const drink = await drinkPost.save()
        // response
        // res.json(food)
        response(201, drink, "berhasil", res)
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
        response(201, drink, "berhasil", res)
    } catch (error) {
        res.json({message: error})
    }
})
// Update
router.put('/:drinkID', async (req,res) => {
    const data = {
        name: req.body.name,
        harga: req.body.harga,
        gambar: req.body.gambar,
       
    }
    try{
        const drink = await Drink.updateOne({
            _id: req.params.drinkID
        },data)
        response(201, drink, "berhasil", res)
    }catch(error){
        req.json({message: error})
    }
})

// Delete
router.delete('/:drinkID', async(req,res) => {
    try{
        const drink = await Drink.deleteOne({_id: req.params.drinkID})
        response(201, drink, "berhasil", res)
    }catch(error) {
        res.json({message: error})
    }
})


module.exports = router