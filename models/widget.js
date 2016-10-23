'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// DEFINE THE WIDGET SCHEMA
// ... this will be used in the widgetRouter to reference properties of a widget object
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
    },
    order_id:{
        type: String,
        required: true
    }
});

// MAKE THE WIDGET SCHEMA AVAILABLE FOR THE ROUTER TO USE
var Widgets = mongoose.model('Widget', widgetSchema); // mongoose pluralizes the first name parameter. I.e. 'Widget' --> 'Widgets'
module.exports = Widgets;
