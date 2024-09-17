import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  role:{
    type: String,
    required: true,
  }
},
  {
    timestamps: true
})

export const User = mongoose.model("User",userSchema);
