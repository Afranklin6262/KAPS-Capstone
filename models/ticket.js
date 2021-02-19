const mongoose = require('mongoose');
let Ticket = new mongoose.Schema ({
    date: {
        type: Number,
        required: true
    },
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
    complete: {
       type: Boolean,
       required: true
    },
    complete: {
        type: Boolean,
        required: true
     },
 });
//What are the properties of a ticket?
/*- priority
- dates / timeline
- type
- who assigned it 
- who is working on it
- complete/not complete
- id number */
 // allows to require this file
 module.exports = mongoose.model('Ticket' /* Mongoose identifier */, Ticket /* Object Schema*/);