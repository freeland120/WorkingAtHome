import express from "express";
import routes from "../routes";

/* import {
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController"; */

const userRouter = express.Router();

userRouter.get(routes.userDetail, (req, res) => {
  res.render("UserDetail", { pageTitle: "마이페이지" });
});
userRouter.get(routes.editProfile, (req, res) => {
  res.render("EditProfile", { pageTitle: "프로필 수정" });
});
userRouter.get(routes.changePassword, (req, res) => {
  res.render("ChangePassword", { pageTitle: "패스워드 수정" });
});

export default userRouter;
