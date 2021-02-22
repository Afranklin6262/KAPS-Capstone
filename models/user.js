const mongoose = require('mongoose');

/*
 User
    - first name
    - last name
    - role
    - assigned Bug
    - submitted Bug


 */

let User = new mongoose.Schema ({
   firstName: {
       type: String,
       required: true
   },
   lastName: {
       type: String,
       required: true
   },
   role: {
       type: String,
       required: true
   },
   assigedBug: {
      type: String,
      required: true
   },
   submittedBug: {
      type: String,
      required: true
   },
});
 
// allows to require this file
module.exports = mongoose.model('User' /* Mongoose identifier */, User /* Object Schema*/);