import express from "express";
import routes from "../routes";
const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => {
  res.send("Here is Home");
});

globalRouter.get(routes.join, (req, res) => {
  res.send("Here is join page");
});

globalRouter.get(routes.login, (req, res) => {
  res.send("Here is login page");
});

globalRouter.get(routes.logout, (req, res) => {
  res.send("Here is logout page");
});

globalRouter.get(routes.search, (req, res) => {
  res.send("Here is search page");
});

globalRouter.get(routes.about, (req, res) => {
  res.send("Here is about page!");
});

export default globalRouter;
