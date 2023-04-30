import mongoose from "mongoose";

const Title = new mongoose.Schema({
	price: {
		type: Number,
	},
	info: {
		type: String,
	},
	owned: {
		type: Boolean,
	},
	discount: {
		type: Boolean,
	},

});

const Order = new mongoose.Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	owner: {
		type: String,
	},
	product: {
		type: String,
	},
	totalPrice: {
		type: Number,
	},
	title: [{
		type: Title,
	}],
	status: {
		type: String,
	},
	detail: {
		type: Object
	}
}, { timestamps: true });


export default mongoose.model("Order", Order);