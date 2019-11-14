const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ProductSchema = new Schema({
    name: { type: String, required: true, max: 100, unique: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    productProvider: { type: ObjectId, required: true, ref: 'ProductProvider' },
    productImage: { type: String, required: false }
});

module.exports = mongoose.model('Product', ProductSchema);