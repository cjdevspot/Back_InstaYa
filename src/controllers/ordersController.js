let mongoose = require('mongoose'),
    express = require('express');

const orderController = {};

// Model
let orderSchema = require('../models/orderModel');

// READ Students
orderController.allOrders = function(req, res) {

    // res.send("HOLA MUNDO")
    orderSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log("ORDERS ===> " + data);
            res.json(data)
        }
    })
}

module.exports = orderController;