const ProductProvider = require('../models/productProvider.model');

exports.getProviders = function (req, res, next) {
    const query = {};
    ProductProvider.find(query, function (err, results) {
        if (err) {
            return next(err);
        }
        console.log('get product provider results: ', results);
        res.send(results);
    });
}

exports.createProvider = function (req, res, next) {
    const provider = new ProductProvider({
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        state: req.body.state,
        zip: req.body.zip,
        phone: req.body.phone
    });
    provider.save(function (err, result) {
        if (err) {
            return next(err);
        }
        console.log('provider create result: ', result);
        res.send('Provider created succcessfully.');
    });
}