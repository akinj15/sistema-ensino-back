import mongoose from "mongoose";

const User = new mongoose.Schema({
  userName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  profile: {
    type: Object,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Array,
  }
}, { timestamps: true })

export default mongoose.model("User", User);
