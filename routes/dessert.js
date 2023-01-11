const express = require('express')
const router = express.Router() 
const response = require('../config/response')
const Dessert = require('../models/Dessert')


// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const dessertPost = new Dessert({
        name: req.body.name,
        harga: req.body.harga,
        gambar: req.body.gambar,
    })

    try {
        // simpan data 
        const dessert = await dessertPost.save()
        // response
        // res.json(food)
        response(201, dessert, "berhasil", res)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',  async(req, res) => {
    // tampung input mahasiswa 
    try {
        // simpan data 
        const dessert = await Dessert.find()
        // response
        response(201, dessert, "berhasil", res)
    } catch (error) {
        res.json({message: error})
    }
})
// Update
router.put('/:dessertID', async (req,res) => {
    const data = {
        name: req.body.name,
        harga: req.body.harga,
        gambar: req.body.gambar,
       
    }
    try{
        const dessert = await Dessert.updateOne({
            _id: req.params.dessertID
        },data)
        response(201, dessert, "berhasil", res)
    }catch(error){
        req.json({message: error})
    }
})

// Delete
router.delete('/:dessertID', async(req,res) => {
    try{
        const dessert = await Dessert.deleteOne({_id: req.params.dessertID})
        response(201, dessert, "berhasil", res)
    }catch(error) {
        res.json({message: error})
    }
})


module.exports = router