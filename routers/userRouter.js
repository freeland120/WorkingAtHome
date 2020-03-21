import express from "express";
import routes from "../routes";
const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => {
  res.send("Here is 사용자 페이지~");
});

userRouter.get(routes.userDetail, (req, res) => {
  res.send("Here is 사용자 세부정보 페이지");
});

userRouter.get(routes.editProfile, (req, res) => {
  res.send("user edit-profile 페이지~");
});

userRouter.get(routes.changePassword, (req, res) => {
  res.send("user password 바꾸는 페이지");
});

export default userRouter;
