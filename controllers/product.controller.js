const Product = require('../models/product.model');

exports.test = function (req, res, next) {
    res.send('You hit the test route.');
}

exports.create = function (req, res, next) {
    if (typeof req.body.name !== 'string' || req.body.name === '' || req.body.name.length < 3) {
        res.send("You must have a valid product name.")
        return;
    }

    const product = new Product(req.body);

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

exports.getProductById = function (req, res, next) {

    const query = {
        _id: req.params.id
    };
    Product.find(query, function (err, results) {
        if (err) {
            return next(err);
        }
        console.log('getProductsById results: ', results);
        res.send(results);
    });
};

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