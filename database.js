const mongoose = require('mongoose'); // get mongoose from modules

const DB_CONNECTION = "mongodb+srv://likeTheCity:forkNapkin@cluster0.cz1xm.mongodb.net/Kaps?retryWrites=true&w=majority";

// connect to the database
mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log(`MongoDB database connection established - ${DB_CONNECTION}.`)) // if connected // attempt to connect to the database

const connection = mongoose.connection; // we get the connection object from mongoose

// everytime there is an error on mongoose it will log on the console
connection.on('error', error => console.log(`Mongo connection error: ${error}`));
// log on the console once the connection is open
connection.once('open', () => console.log('MongoDB database connection established succesfully.'));