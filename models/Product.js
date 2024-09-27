import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
})

const Product = mongoose.model('Product', productSchema);
export default Product