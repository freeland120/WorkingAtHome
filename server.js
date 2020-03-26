import app from "./app";
import { videos } from "./mongoDB";
import dotenv from "dotenv";
import Video_Model from "./models/Video";
import Comment_Model from "./models/Comment";

dotenv.config();

const PORT = process.env.PORT;

const serverListening = () => {
  console.log(`${PORT} Server ready...✅`);
};

app.listen(PORT, serverListening);
