import express from "express"
import router from "./src/routes"

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router)

export default app;
