import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const DB = mongoose.connection;

const openDB = () => {
  console.log("Connected MongoDB✅");
};

const errorDB = error => {
  console.log("Disconnected MongoDB❌");
};

DB.once("open", openDB);

DB.on("error", errorDB);
