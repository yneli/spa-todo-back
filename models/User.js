import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true,    
    },
    passwordHash: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "USER",
        required: true,

    },
    avatarUrl: String,
},
{
    timestamps:true,
},
);
export default mongoose.model('user', UserSchema);