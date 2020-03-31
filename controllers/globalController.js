import routes from "../routes";
import Video from "../models/Video";
import User_Model from "../models/User";
import passport from "passport";

//Global영역에서의 컨트롤러 함수
export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);

    res.render("Home", { pageTitle: "HOME", videos: videos });
  } catch (error) {
    res.render("Home", { pageTitle: "HOME", videos: [] });
  }
};

export const getJoin = (req, res) => {
  res.render("Join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("Join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User_Model({
        name,
        email
      });
      await User_Model.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("Login", { pageTitle: "LOGIN" });
};

export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login
});

export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const search = async (req, res) => {
  const {
    query: { term: search_target }
  } = req; // const search_target=req.query.term
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: search_target, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }

  res.render("Search", {
    pageTitle: "SEARCH",
    searchingBy: search_target,
    videos
  });
};
