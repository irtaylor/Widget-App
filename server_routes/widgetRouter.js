'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var shortid = require('shortid');


// USE THE WIDGET SCHEMA DEFINED IN widget.js
var Widget = require('../models/widget');

var widgetRouter = express.Router();
widgetRouter.use(bodyParser.json());

// DEFINE THE RESTFUL API
widgetRouter.route('/')

// GET: GET ALL THE WIDGET ORDERS
.get(function(req, res, next) {
    Widget.find({}, function(err, widget) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err){ res.send(err); }
        res.json(widget); // return all widgets in JSON format
    });
})

// POST: CREATE A NEW WIDGET USING AJAX REQUEST INFO FROM CLIENT
.post(function(req, res, next){
    Widget.create({
        model : req.body.model,
        color : req.body.color,
        receipt_date: req.body.receipt_date,
        quantity: req.body.quantity,

        // 
        order_id: shortid.generate()
    },
    function(err, widget) {
        if (err){ res.send(err); }


        Widget.findOne(function(err, widget){
            if (err){res.send(err);}
            res.json(widget);
        })
        .sort({$natural:-1});
    });
});

module.exports = widgetRouter;
