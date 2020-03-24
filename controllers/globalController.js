import { videos } from "../mongoDB";
import routes from "../routes";

//Global영역에서의 컨트롤러 함수
export const home = (req, res) => {
  res.render("Home", { pageTitle: "HOME", videos: videos });
};

export const getJoin = (req, res) => {
  res.render("Join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("Join", { pageTitle: "Join" });
  } else {
    //console.log(req.body);
    // To Do: 유저 등록
    // To Do: 유저 로그인
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("Login", { pageTitle: "LOGIN" });
};

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const search = (req, res) => {
  const {
    query: { term: search_target }
  } = req;

  res.render("Search", {
    pageTitle: "SEARCH",
    searchingBy: search_target,
    videos: videos
  });
};
