import mongoose from "mongoose";

const Title = new mongoose.Schema({
	price: {
		type: Number,
		require: true
	},
	info: {
		type: String,
		require: true
	},
	owned: {
		type: Boolean,
		require: true
	},
	discount: {
		type: Boolean,
		require: true
	},

});

const Order = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	owner: {
		type: String,
		require: true
	},
	product: {
		type: String,
		require: true
	},
	totalPrice: {
		type: Number,
		require: true
	},
	title: [{
		type: Title,
		require: true,
	}],
	status: {
		type: String,
		require: true,
	}
}, { timestamps: true });


export default mongoose.model("Order", Order);