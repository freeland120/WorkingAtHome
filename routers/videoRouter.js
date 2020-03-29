import express from "express";
import routes from "../routes";

import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from "../controllers/videoController";

import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//업로드
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//비디오 세부정보
videoRouter.get(routes.videoDetail(), videoDetail);

//비디오 수정
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//비디오 삭제
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
