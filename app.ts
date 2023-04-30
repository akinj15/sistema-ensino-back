import * as express from "express"
import router from "./src/routes"
const cors = require('cors')
let app = express();
let corsOptions = {
    origin: "*"
};


// app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials : true, origin : ["https://grand-travesseiro-2c3fa7.netlify.app/"]}));
app.use(router);

export default app;
