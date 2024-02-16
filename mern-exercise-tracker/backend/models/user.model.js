const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, //spaces are trimmed
        minLength: 3
    },
},
    {
        timestamps: true, //automatically create timestamps of when it was created and modified
    });

const User = mongoose.model('User', userSchema);

module.exports = User;