import { Response, Request } from "express";
import Classe from "../database/schemas/Classes";
import GridModel from "../models/Grid"
import ClasseModel from "../models/Classe"

class ClasseController {
  async create(request: Request, response: Response) {
    const body = request.body;
    const grid:  Array<GridModel> = body.grid
    const classe: ClasseModel = {
      classeName: body.classeName,
      description: body.description,
      curso: body.curso,
      price: body.price,
      students: body.students,
      grid
    }
    try {
      const res = await Classe.create(classe)
      return response.status(201).send(res)
    } catch (error) {
      return response.status(500).send({
        error: "Registrer error",
        message: error
      })
    }
  }

  async findAll(request: Request, response: Response) {
    let result = await Classe.find();
    return response.status(200).send(result)
  }

  async findClasse(request: Request, response: Response) {
    const id = request.query.id;
    try {
      if (!id) {
        throw new Error("id is required");
      }
      let curso = await Classe.findOne({ _id: id });
      return response.status(200).send(curso)
    } catch (e) {
      return response.status(401).send({ error: e })
    }
  }

  async editClasse(request: Request, response: Response) {
    const { description, classeName, _id , curso, price, students } = request.body;
    const grid = request.body.grid;
    const classe: ClasseModel = {
      classeName,
      description,
      grid,
      students,
      price,
      curso
    }
    try {
      let result = await Classe.updateOne(
        { _id: _id },
        classe
      )
      return response.status(203).send(result)
    } catch (e) {
      return response.status(401).send(e)
    }
  }

  async delete(request: Request, response: Response) {
    const id = request.query.id;
    try {
      let res = await Classe.deleteOne({ _id: id })
      return response.status(202).send(res);
    } catch (e) {
      return response.status(501).send(e)
    }
  }
}

export default new ClasseController()
