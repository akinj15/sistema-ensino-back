import { Router } from "express";
import UserControler from "../controllers/UserControler";

const userController = UserControler
const router = Router();

router.post("", userController.create)
router.post("/login", userController.login)
router.get("", userController.findUser)
router.get("/getall", userController.findAll)
router.put("", userController.editUser)
router.delete("", userController.deleteUser)

export default router;
