import app from "./app";
import { videos } from "./mongoDB";
import dotenv from "dotenv";

dotenv.config();

import Video_Model from "./models/Video";
import Comment_Model from "./models/Comment";
import User_Model from "./models/User";

const PORT = process.env.PORT;

const serverListening = () => {
  console.log(`${PORT} Server ready...✅`);
};

app.listen(PORT, serverListening);
