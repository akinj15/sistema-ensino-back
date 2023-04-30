import Title from "./Title";
type Order =  {
  name: String,
  description: String,
  owner: String,
  product: String,
  totalPrice: Number,
  title: Array<Title>
  status: String,
  detail: Object,
}

export default Order;