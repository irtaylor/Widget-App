'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// DEFINE THE WIDGET SCHEMA
var widgetSchema = new Schema({
    model:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    receipt_date:{
        type: Date,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
});

var Widgets = mongoose.model('Widget', widgetSchema);
module.exports = Widgets;
