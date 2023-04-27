import mongoose from "mongoose";

const CheckPoints = new mongoose.Schema({
  user: {
    type: String,
    require: true
  },
  classe: {
    type: String,
    require: true
  },
  service: {
    type: String,
    require: true,
  },
  moment: {
    type: Date,
    require: true,
  },
  scheduled: {
    type: Date,
    require: true,
  },
  present: {
    type: Boolean,
    require: true,
  },
  info: {
    type: String,
    require: true,
  }
}, { timestamps: true })

export default mongoose.model("CheckPoints", CheckPoints);
