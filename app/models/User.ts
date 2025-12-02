import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
name: { type: String },
email: { type: String, unique: true, index: true },
password: { type: String },
role: { type: String, enum: ['user','admin'], default: 'user' },
otp: { type: String, default: null },
otpExpiry: { type: Number, default: null },
createdAt: { type: Date, default: Date.now }
});


export default mongoose.models.User || mongoose.model('User', UserSchema);