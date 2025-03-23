
import mongoose from 'mongoose';

const rUsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 16
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },

});

const todoUsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    taskName: {
        type: String,
        required: true
    },isComplete: {
        type: Boolean,
        require: true
    },
    taskDate:  {
        type: Number,
        require: true
    }
});

export const users = mongoose.model('users', rUsersSchema);
export const todoUsersData = mongoose.model('todoUsersData', todoUsersSchema)
