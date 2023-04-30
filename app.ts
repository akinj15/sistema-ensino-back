import * as express from "express"
import router from "./src/routes"
import * as cors from "cors"
let app = express();


const allowedOrigins = [
    '*', 
];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(cors(options));

export default app;
