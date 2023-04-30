import * as express from "express"
import router from "./src/routes"
const cors = require('cors')
let app = express();

// app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ 
  credentials : true, 
  origin : "*"
}));
app.use(router);

export default app;
