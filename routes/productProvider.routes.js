const express = require('express');
const router = express.Router();
const productProviderController = require('../controllers/productProvider.controller');

router.get('/', productProviderController.getProviders);

router.post('/', productProviderController.createProvider);

module.exports = router;