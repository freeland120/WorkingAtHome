import express from "express";
import routes from "../routes";
/* import {
  upload,
  videoDetail,
  editVideo,
  deletVideo
} from "../controllers/videoController"; */

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => {
  res.send("Videos", { pageTitle: "비디오" });
});
videoRouter.get(routes.upload, (req, res) => {
  res.send("Upload", { pageTitle: "업로드" });
});
videoRouter.get(routes.videoDetail, (req, res) => {
  res.send("Video Detail", { pageTitle: "비디오 정보" });
});
videoRouter.get(routes.editVideo, (req, res) => {
  res.send("Edit Video", { pageTitle: "비디오 수정" });
});
videoRouter.get(routes.deleteVideo, (req, res) => {
  res.send("Delete Video", { pageTitle: "비디오 삭제" });
});

export default videoRouter;
