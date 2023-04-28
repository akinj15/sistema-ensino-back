import express from "express"
import router from "./src/routes"
import cors from "cors"
let app = express();


const allowedOrigins = [
    '*', 
    'http://localhost:9001', 
    'http://localhost:8080', 
    'http://127.0.0.1:9001', 
    'http://127.0.0.1:8080', 
];
let corsOptions = {
    origin: "*"
};
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(cors());

export default app;
