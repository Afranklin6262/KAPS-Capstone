const mongoose = require('mongoose');

let Ticket = new mongoose.Schema ({
    type: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    solver: {
       type: String,
       required: true
    },
 });
//What are the properties of a ticket?
/*
- type
- who assigned it 
- who is working on it
- id number */
 // allows to require this file
 module.exports = mongoose.model('Ticket' /* Mongoose identifier */, Ticket /* Object Schema*/);
