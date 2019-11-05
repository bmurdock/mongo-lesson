const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductProviderSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    description: { type: String, required: false },
    address: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    phone: { type: String, required: true }
});

module.exports = mongoose.model('ProductProvider', ProductProviderSchema);