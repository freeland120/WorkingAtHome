import express from "express";
import routes from "../routes";
const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => {
  res.send("Here is video 페이지");
});

videoRouter.get(routes.videoDetail, (req, res) => {
  res.send("Here is video Detail 페이지");
});

videoRouter.get(routes.editVideo, (req, res) => {
  res.send("Here is edit Video Page");
});

videoRouter.get(routes.deleteVideo, (req, res) => {
  res.send("Here is delete video page");
});

export default videoRouter;
