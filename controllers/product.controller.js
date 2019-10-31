const Product = require('../models/product.model');

exports.test = function (req, res, next) {
    res.send('You hit the test route.');
}

exports.create = function (req, res, next) {
    console.log('starting create process');
    const product = new Product(
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        }
    );
    console.log('starting save process');
    product.save(function (err, result) {
        if (err) {
            return next(err);
        }
        console.log('create result: ', result);
        res.send('Product created succcessfully.');
    });
}

exports.getProducts = function (req, res, next) {
    const query = {};
    Product.find(query, function (err, results) {
        if (err) {
            return next(err);
        }
        console.log('get products results: ', results);
        res.send(results);
    });
}

exports.updateProduct = function (req, res, next) {
    const query = {
        _id: req.params.id
    };
    const update = {
        $set: req.body
    };
    Product.findByIdAndUpdate(query, update, function (err, result) {
        if (err) {
            return next(err);
        }
        res.send(result);
    });
}

exports.deleteProduct = function (req, res, next) {
    const query = {
        _id: req.params.id
    };
    Product.findByIdAndDelete(query, function (err, result) {
        if (err) {
            return next(err);
        }
        res.send("Product deleted successfully.");
    });
}