import mongoose from "mongoose";

const Grid = new mongoose.Schema({
  dateScheduled: {
    type: Date,
    require: true
  },
  info: {
    type: String,
    require: true
  },
  classHeld: {
    type: Boolean
  }
});

const Classe = new mongoose.Schema({
  classeName: {
    type: String,
    require: true,
    unique: true
  },
  description: {
    type: String,
    require: true
  },
  curso: {
    type: Array,
    require: true,
  },
  price: Number,
  grid: [{
    type: Grid,
  }],
  students: Array
}, { timestamps: true });


export default mongoose.model("Classe", Classe);