import mongoose from "mongoose";

const User = mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    harga: {
        type : Number,
        required: true
    },
    gambar: {
        type : String,
        required: true
    },
})

export default mongoose.model('Food', Food)