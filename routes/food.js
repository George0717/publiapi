const express = require('express')
const router = express.Router() 
const Food = require('../models/Food')
const response = require('../config/response')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const foodPost = new Food({
        name: req.body.name,
        harga: req.body.harga,
        gambar: req.body.gambar,
    })

    try {
        // simpan data 
        const food = await foodPost.save()
        // response
        res.json(food)
        response(201, food, "berhasil", res)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',  async(req, res) => {
    // tampung input mahasiswa 
    try {
        // simpan data 
        const food = await Food.find()
        // response
        res.json(food)
    } catch (error) {
        res.json({message: error})
    }
})
// Update
router.patch('/:foodID', async (req,res) => {
    const data = {
        name: req.body.name,
        harga: req.body.harga,
        gambar: req.body.gambar,
       
    }
    try{
        const food = await Food.updateOne({
            _id: req.params.foodID
        },data)
        res.json(food)
    }catch(error){
        req.json({message: error})
    }
})

// Delete
router.delete('/:foodID', async(req,res) => {
    try{
        const food = await Food.deleteOne({_id: req.params.foodID})
        res.json(food)
    }catch(error) {
        res.json({message: error})
    }
})


module.exports = router