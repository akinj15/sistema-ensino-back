import App from "./app"
import connect from "./src/database/connect";

const port = 3001;
const app = App
connect()
app.listen(port, () => console.log("running at port: ", port));
