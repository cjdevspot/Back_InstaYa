const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
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
        type: Schema.Types.ObjectId, ref: 'User'
    }
}, {
    collection: 'users'
})


module.exports = mongoose.model('Users', userSchema)