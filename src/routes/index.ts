import { Router } from "express";
import userRouter from "./userRoutes"
import cursoRouter from "./cursoRoutes"
import classeRouter from "./classeRoutes"
import checkPointRouter from "./checkPointRoutes"
import orderRouter from "./orderRoutes"

const router = Router();

router.use("/user", userRouter);
router.use("/curso", cursoRouter);
router.use("/classe", classeRouter);
router.use("/checkpoint", checkPointRouter);
router.use("/order", orderRouter);

export default router;