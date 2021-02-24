const express = require('express'); // get express from modules
const app = express(); // create application from express
const mongoose = require('mongoose'); // get mongoose from modules
const cors = require('cors');
const PORT = process.env.PORT || 8080; // port for express to listen on
// || makes so that in case that the file .env is not created it defaults to 8080
// connect to the database
require('./database');
const dotenv = require('dotenv'); //require .env file for sensitve info
//let User = require('./models/user'); <-- this line makes the app crash, not sure why yet
let Ticket = require('./models/ticket');




// boilerplate express server
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // specify that we are using json objects to request and response

// define public folder  
app.use('/' /* route */,
    express.static('public') /* folder to expose */);

app.get('/ticket', (request, response) => {
    Ticket.find((error /* error message if there was an error*/
        , result /* result from search */) => {
        if (error) { // if error is not empty send error message
            response.status(400).json({
                message: 'Data was not found',
                error: error.message
            });
        } else { // if there was no error return result
            response.json(result);
        }
    });
});

app.post('/ticket', (request, response) => {
    // new instance of model ticket
    let ticket = new Ticket(request.body);
    // insert document into the collection
    ticket.save()// attempts to save into the database
        .then(() => { // successful saving
            response.json({ // respond to the client with a success message
                success: true // this can be anything
            });
        })
        .catch(error => { // couldn't be save
            console.log(error); // log in the console
            response.status(400).json({ // respond to the client with a failure message
                success: false, // this can be anything
                error: error.message
            });
        });
});


app.get('/ticket/:id', (request, response) => {
    const id = request.params.id; // get parameter id from request
    Ticket.findById( // search by id in model ticket
        id, // id to search for
        (error, result) => { // callback with error or result
            if (error) { // there is an error
                response.status(400); // status = 400
                response.json({ // Display error message
                    message: 'Data was not found.',
                    error: error.message
                })
            } else {
                response.json(result); // Display document found
            }
        }
    )
});


app.delete('/ticket/:id', (request, response) => {
    const id = request.params.id; // get parameter id from request
    Ticket.findById( // search by id in model ticket
        id, // id to search for
        (error, result) => { // callback with error or result
            if (error) { // there is an error
                response.status(400); // status = 400
                response.json({ // Display error message
                    message: 'Data was not found.',
                    error: error.message
                })
            } else {
                response.json(result); // Display document found
            }
        }
    )
});

app.get('/ticket', (request, response) => {
    Ticket.find((error /* error message if there was an error*/
        , result /* result from search */) => {
        if (error) { // if error is not empty send error message
            response.status(400).json({
                message: 'Data was not found',
                error: error.message
            });
        } else { // if there was no error return result
            response.json(result);
        }
    });
});

app.post('/ticket', (request, response) => {
    // new instance of model ticket
    let ticket = new Ticket(request.body);
    // insert document into the collection
    ticket.save()// attempts to save into the database
        .then(() => { // successful saving
            response.json({ // respond to the client with a success message
                success: true // this can be anything
            });
        })
        .catch(error => { // couldn't be save
            console.log(error); // log in the console
            response.status(400).json({ // respond to the client with a failure message
                success: false, // this can be anything
                error: error.message
            });
        });
});

// /user/:id
app.get('/ticket/:id', (request, response) => {
    const id = request.params.id; // get parameter id from request
    Ticket.findById( // search by id in model Ticket
        id, // id to search for
        (error, result) => { // callback with error or result
            if (error) { // there is an error
                response.status(400); // status = 400
                response.json({ // Display error message
                    message: 'Data was not found.',
                    error: error.message
                })
            } else {
                response.json(result); // Display document found
            }
        }
    )
});

// /user/:id
app.delete('/ticket/:id', (request, response) => {
    const id = request.params.id; // get parameter id from request
    Ticket.findById( // search by id in model Ticket
        id, // id to search for
        (error, result) => { // callback with error or result
            if (error) { // there is an error
                response.status(400); // status = 400
                response.json({ // Display error message
                    message: 'Data was not found.',
                    error: error.message
                })
            } else {
                response.json(result); // Display document found
            }
        }
    )
});


// start server
// last method to execute
app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));