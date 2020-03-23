import express from "express";
import routes from "../routes";

/* import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";
 */
const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => {
  res.render("Home", { pageTitle: "Home" });
});
globalRouter.get(routes.join, (req, res) => {
  res.render("Join", { pageTitle: "Join" });
});
globalRouter.get(routes.login, (req, res) => {
  res.render("Login", { pageTitle: "Login" });
});
globalRouter.get(routes.logout, (req, res) => {
  res.render("Logout", { pageTitle: "Logout" });
});
globalRouter.get(routes.search, (req, res) => {
  res.render("Search", { pageTitle: "Search" });
});

export default globalRouter;
