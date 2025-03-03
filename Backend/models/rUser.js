
import mongoose from 'mongoose';

const rUsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3, // Minimum length of 3 characters
        maxlength: 20 // Maximum length of 20 characters
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5, // Minimum length of 5 characters
        maxlength: 50 // Maximum length of 50 characters
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
