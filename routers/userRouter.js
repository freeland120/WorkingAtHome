import express from "express";
import routes from "../routes";

import {
  showMe,
  editProfile,
  changePassword,
  userDetail
} from "../controllers/userController";

import { OnlyPublic, OnlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.me, showMe);
userRouter.get(routes.editProfile, OnlyPrivate, editProfile);
userRouter.get(routes.changePassword, OnlyPrivate, changePassword);
userRouter.get(routes.userDetail(), OnlyPrivate, userDetail);

export default userRouter;
