import { Response, Request } from "express";
import Student from "../database/schemas/Student";

import { Student as StudentModel } from "../models"

class StudentController {
  async create(request: Request, response: Response) {
    const body = request.body;
    const student: StudentModel = {
      name: body.name,
      surName: body.surName,
      lastName: body.lastName,
      classes: body.classes,
      cpf: body.cpf,
    }
    try {
      const res = await Student.create(student)
      return response.status(201).send(res)
    } catch (error) {
      return response.status(500).send({
        error: "Registrer error",
        message: error
      })
    }
  }

  async findAll(request: Request, response: Response) {
    let result = await Student.find();
    return response.status(200).send(result)
  }

  async findStudent(request: Request, response: Response) {
    const _id = request.query.id;
    try {
      if (!_id) {
        throw new Error("id is required");
      }
      let student = await Student.findOne({ _id });

      return response.status(200).send(student)

    } catch (e) {
      return response.status(401).send({ error: e })
    }
  }
  async editStudent(request: Request, response: Response) {
    const { name, surName, lastName, cpf, classes, _id } = request.body;
    const student: StudentModel = {
      name: name,
      surName: surName,
      lastName: lastName,
      classes: classes,
      cpf: cpf,
    }
    try {
      let result = await Student.updateOne(
        { _id: _id },
        student
      )
      return response.status(203).send(result)
    } catch (e) {
      return response.status(401).send(e)
    }
  }

  async deleteStudent(request: Request, response: Response) {
    const id = request.query.id;
    try {
      let res = await Student.deleteOne({ _id: id })
      return response.status(202).send(res);
    } catch (e) {
      return response.status(501).send(e)
    }
  }
}

export default new StudentController()
