const express = require('express');
const userRoute = express.Router();

// User model
let UserModel = require('../models/User');

// Get all data
userRoute.route('/').get((req, res, next) => {
    UserModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create user data
userRoute.route('/create-user').post((req, res, next) => {
    UserModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit user data
userRoute.route('/edit-user/:id').get((req, res, next) => {
    UserModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update user data
userRoute.route('/update-user/:id').put((req, res, next) => {
    UserModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('User successfully updated');
        }
    })
})

// Delete user data
userRoute.route('/delete-user/:id').delete((req, res, next) => {
    UserModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = userRoute;