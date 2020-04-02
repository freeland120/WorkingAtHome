import routes from "../routes";
import Video from "../models/Video";
import User_Model from "../models/User";
import passport from "passport";

//Global영역에서의 컨트롤러 함수

export const firstHome = (req, res) => {
  res.render("Init_Home", { pageTitle: "Init Home" });
};

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    //console.log(videos);

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

//##1.Github 영역
//나를 깃허브 페이지로 보내준다
export const githubLogin = passport.authenticate("github");
//Github 콜백 영역
//사용자가 github에서 돌아왔을 때 사용자 정보를 들고 온다.
export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { id, avatar_url: avatarUrl, name, email }
  } = profile;

  //console.log(accessToken, refreshToken, profile, cb);
  try {
    const user = await User_Model.findOne({ email });

    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User_Model.create({
      email,
      name,
      githubId: id,
      avatarUrl
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

//깃허브 인증 성공했을 때 redirect
export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

//#2.Google 영역
export const googleLogin = passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/userinfo.profile"],
  accessType: "offline",
  prompt: "select_account"
});

//Google 콜백 영역
export const googleLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  //console.log(accessToken, refreshToken, profile, cb);

  const {
    _json: { id, name, email, avatar_url }
  } = profile;

  try {
    const user = await User_Model.findOne({ email });

    if (user) {
      user.googleId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User_Model.create({
      email,
      name,
      googleId: id,
      avatarUrl: avatar_url
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

//구글 인증 성공했을 때 redirect
export const postGoogleLogin = (req, res) => {
  res.redirect(routes.home);
};

//#3.Facebook 영역
export const facebookLogin = passport.authenticate("facebook");
export const facebookLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  console.log(accessToken, refreshToken, profile, cb);

  const {
    _json: { id, name, email, avatar_url }
  } = profile;

  try {
    const user = await User_Model.findOne({ email });

    if (user) {
      user.facebookId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User_Model.create({
      email,
      name,
      facebookId: id,
      avatarUrl: avatar_url
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

//페이스북 인증 성공했을 때 redirect
export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.first_home);
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

export const showMe = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail", user: req.user });
};
