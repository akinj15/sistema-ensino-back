import mongoose from "mongoose";

const CheckPoint = new mongoose.Schema({
  user: {
    type: String,
    require: true
  },
  userName: {
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
    type: String,
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

export default mongoose.model("CheckPoint", CheckPoint);
