let mongoose = require('mongoose'),
    express = require('express');

const registerController = {};
// Model
let registerUserSchema = require('../models/registerModel');

// READ Users
registerController.getUsers = function(req, res) {
    
    // Service GET users
    registerUserSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log("USERS ===> " + data);
            res.json(data)
        }
    })
}

// CREATE User
registerController.createUser = function(req, res) {
    const data = req.body;
    console.log(data);

    // Service POST User
    registerUserSchema.insertMany(data, error => {
        if (error) {
            return next(error)
        } else {
            console.log(data);
            res.json(data);
        }
    })
}

// UPDATE User
registerController.updateUser = function(req, res) {
    const data = req.body;
    console.log(data);

    // Service UPDATE User
    
}

module.exports = registerController;