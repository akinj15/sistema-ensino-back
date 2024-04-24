import mongoose from "mongoose";

const Student = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  surName: {
    type: String,
  },
  lastName: {
    type: String,
    require: true,
  },
  cpf: {
    type: String,
    unique: true,
  },
  classes: {
    type: Array,
  }
}, { timestamps: true })

export default mongoose.model("Student", Student);
