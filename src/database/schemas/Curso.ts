import mongoose from "mongoose";

const Grid = new mongoose.Schema({
	dateScheduled: {
		type: Date,
		require: true
	},
	info: {
		type: String,
		require: true
	}
});

const Curso = new mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	bio: {
		type: String,
	},
	price: {
		type: Number
	},
	grid: [{
		type: Grid,
		require: true,
	}]
}, { timestamps: true });


export default mongoose.model("Curso", Curso);