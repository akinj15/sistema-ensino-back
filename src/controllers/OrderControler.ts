import { Response, Request } from "express";
import Order from "../database/schemas/Order";
import OrderModel from "../models/Order"
import TitleModel from "../models/Title"

class OrderController {
  async create(request: Request, response: Response) {
    const body = request.body;
    const title: Array<TitleModel> = body.title
    const order: OrderModel = {
      name: body.name,
      description: body.description,
      owner: body.owner,
      product: body.product,
      totalPrice: body.totalPrice,
      status: body.status,
      title: title
    }
    try {
      const res = await Order.create(order)
      return response.status(201).send(res)
    } catch (error) {
      return response.status(500).send({
        error: "Registrer error",
        message: error
      })
    }
  }

  async findAll(request: Request, response: Response) {
    let result = await Order.find();
    return response.status(200).send(result)
  }

  async findOrder(request: Request, response: Response) {
    const owner = request.query.owner;
    const product = request.query.product;
    try {
      let order = await Order.find({ owner, product});
      return response.status(200).send(order)
    } catch (e) {
      return response.status(401).send({ error: e })
    }
  }

  async editOrder(request: Request, response: Response) {
    const { name, description, _id , owner, product, totalPrice, title, status} = request.body;
    const order: OrderModel = { name, description, owner, product, totalPrice, title, status}
    try {
      let result = await Order.updateOne(
        { _id: _id },
        order
      )
      return response.status(203).send(result)
    } catch (e) {
      return response.status(401).send(e)
    }
  }

  async delete(request: Request, response: Response) {
    const id = request.query.id;
    try {
      let res = await Order.deleteOne({ _id: id })
      return response.status(202).send(res);
    } catch (e) {
      return response.status(501).send(e)
    }
  }
}

export default new OrderController()
