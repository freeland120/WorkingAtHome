import express from "express";
import routes from "../routes";

import {
  home,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  search
} from "../controllers/globalController";

import { OnlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, OnlyPublic, getJoin);
globalRouter.post(routes.join, OnlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, OnlyPublic, getLogin);
globalRouter.post(routes.login, OnlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
