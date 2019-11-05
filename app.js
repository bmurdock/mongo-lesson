// Everything we require from an external file should go here
const express = require('express');
const mongoose = require('mongoose');
const products = require('./routes/product.routes');
const providers = require('./routes/productProvider.routes');

// Set our global constant stuff here
const apiPort = 3444;
const dbName = 'db1';
const dbPort = 27017;
const dbUrl = `mongodb://localhost:${dbPort}/${dbName}`;


// Create our apps and umm..clients and whatnot
const api = express();

// Tell our apps and clients and whatnot to use...stuff...(middleware)
api.use(express.json());
api.use('/products', products);
api.use('/product-providers', providers);

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Mongo Connection Error: "));

// My routes go here
api.get('/secret', function (req, res, next) {
    res.set({
        "Content-Type": "text/html"
    });
    res.send("<h1>SHHHHHHH</h1>");
});

// Tell my server to listen for requests

api.listen(apiPort, function (err) {
    if (err) {
        console.error('Error starting api server: ', err);
        return;
    }
    console.log(`API Server is listening at ${apiPort}....`);
});