import Food from "../models/FoodModels"

export const getFood = async (req, res) => {
    try{
        const food = await Food.find()
        res.json(food)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
export const getFoodById = async (req, res) => {
    try{
        const user = await Food.findById(req.params.id)
        res.json(user)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}
export const saveFood = async (req, res) => {
    const food = new Food(req.body)
    try{
        const insertFood = await food.save()
        res.status(201).json(insertFood)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
export const UpdateFood = async (req, res) => {
    try{
        const updateFood = await Food.updateOne({_id:req.params.id}, {$set: req.body})
        res.status(200).json( updateFood)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
export const DeleteFood = async (req, res) => {
    try{
        const deleteFood = await Food.deleteOne({_id:req.params.id})
        res.status(200).json( deleteFood)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

