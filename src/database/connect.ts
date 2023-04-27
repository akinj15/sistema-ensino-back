import mongoose from "mongoose";
import config from "../../config"

const url: string = config.db.dbUrl || ""
export default async () => {
  try {
    await mongoose.connect(url);
    console.log("connection sucsessed")
  }catch (e) {
    console.log(e)
  }
}