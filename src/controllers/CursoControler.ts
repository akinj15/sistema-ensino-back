import { Response, Request } from "express";
import Curso from "../database/schemas/Curso";
import CursoModel from "../models/Curso"
import GridModel from "../models/Grid"

class CursoController {
  async create(request: Request, response: Response) {
    const body = request.body;
    const grid:  Array<GridModel> = body.grid
    const curso: CursoModel = {
      title: body.title,
      description: body.description,
      bio: body.bio,
      price: body.price,
      grid
    }
    try {
      const res = await Curso.create(curso)
      return response.status(201).send(res)
    } catch (error) {
      return response.status(500).send({
        error: "Registrer error",
        message: error
      })
    }
  }

  async findAll(request: Request, response: Response) {
    let result = await Curso.find();
    return response.status(200).send(result)
  }

  async findCurso(request: Request, response: Response) {
    const id = request.query.id;
    try {
      if (!id) {
        throw new Error("id is required");
      }
      let curso = await Curso.findOne({ _id: id });
      return response.status(200).send(curso)
    } catch (e) {
      return response.status(401).send({ error: e })
    }
  }

  async editCurso(request: Request, response: Response) {
    const { description, bio, _id , title, price } = request.body;
    const grid = request.body.grid;
    const curso: CursoModel = {
      title,
      description,
      grid,
      bio,
      price,
    }
    try {
      let result = await Curso.updateOne(
        { _id: _id },
        curso
      )
      return response.status(203).send(result)
    } catch (e) {
      return response.status(401).send(e)
    }
  }

  async delete(request: Request, response: Response) {
    const id = request.query.id;
    try {
      let res = await Curso.deleteOne({ _id: id })
      return response.status(202).send(res);
    } catch (e) {
      return response.status(501).send(e)
    }
  }
}

export default new CursoController()
