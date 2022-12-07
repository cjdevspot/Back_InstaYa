let mongoose = require('mongoose'),
    express = require('express');

// IMPORT MODEL
let registerUserSchema = require('../models/registerModel');
let loginSchema = require('../models/loginModel');

const loginController = {};

// Auth user
loginController.authUser = function(req, res) {
    // Declara variable data
    let data = req.body;
    // Imprime en consola
    console.log(data);

    // Service Auth
    registerUserSchema.find(data, error => {
        if (error) {
            return next(error);            
        } else {
            /* let session = {
                code: 200,
                data: data,
                response: ""
            }
            // Register session
            loginSchema.insertMany() */
            let result = {
                code: 200,
                status: "OK",
                response: data
            }
            console.log(data);
            return res.json(result);
        }
    })

}


module.exports = loginController;