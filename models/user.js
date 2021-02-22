const mongoose = require('mongoose');

/*
 User
    - first name
    - last name
    - role
    - assigned Bug
    - submitted Bug


 */

 // allows to require this file
module.exports = mongoose.model('User' /* Mongoose identifier */, User /* Object Schema*/);