import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model('User', userSchema);

export default User
