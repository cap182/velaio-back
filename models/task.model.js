import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    userAge: {
        type: Number,
        required: true
    },
    skills: {
        type: [String],
    }
})

const taskSchema = new mongoose.Schema({
    taskId: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    limitDate: {
        //unix timestamp
        type: Number,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    users: {
        type: [userSchema],
        validate: [arrayLimit]
    }

})

function arrayLimit(val) {
    return val.length > 0;
}

const task = mongoose.model('Task', taskSchema)

export default task