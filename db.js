import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/velaio')
        console.log('DB ok');
    } catch (error) {
        console.error(error)
    }

}