const mongoose = require('mongoose')
const Schema = mongoose.Schema

let registerUserSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    documentType: {
        type: String,
        required: true,
    },
    document: {
        type: Number,
        required: true,
    },
    birthDate: {
        type: Date
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'registerUser'
    }
}, {
    collection: 'register_user'
})


module.exports = mongoose.model('registerUsers', registerUserSchema)