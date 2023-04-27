import { Response, Request } from "express";
import CheckPoint from "../database/schemas/CheckPoint";
import CheckPointModel from "../models/CheckPoint"

class CheckPointController {
  async create(request: Request, response: Response) {
    const body = request.body;
    const checkPoint: CheckPointModel = {
      user: body.user,
      service: body.service,
      moment: body.moment,
      scheduled: body.scheduled,
      present: body.present,
      info: body.info,
      classe: body.classe,
    }
    try {
      const res = await CheckPoint.create(checkPoint)
      return response.status(201).send(res)
    } catch (error) {
      return response.status(500).send({
        error: "Registrer error",
        message: error
      })
    }
  }

  async findAll(request: Request, response: Response) {
    let result = await CheckPoint.find();
    return response.status(200).send(result)
  }

  async findCheckPoint(request: Request, response: Response) {
    const user = request.query.user;
    const classe = request.query.classe;
    try {
      let curso = await CheckPoint.find({ user, classe});
      return response.status(200).send(curso)
    } catch (e) {
      return response.status(401).send({ error: e })
    }
  }

  async editCheckPoint(request: Request, response: Response) {
    const { user, service, _id , moment, scheduled, info, present, classe} = request.body;
    const checkPoint: CheckPointModel = { user, service, moment, scheduled, info, present, classe }
    try {
      let result = await CheckPoint.updateOne(
        { _id: _id },
        checkPoint
      )
      return response.status(203).send(result)
    } catch (e) {
      return response.status(401).send(e)
    }
  }

  async delete(request: Request, response: Response) {
    const id = request.query.id;
    try {
      let res = await CheckPoint.deleteOne({ _id: id })
      return response.status(202).send(res);
    } catch (e) {
      return response.status(501).send(e)
    }
  }
}

export default new CheckPointController()
