//User 영역에서의 컨트롤러 함수

import User_Model from "../models/User";

export const showMe = (req, res) => {
  res.render("UserDetail", { pageTitle: "User Detail", user: req.user });
};

export const editProfile = (req, res) => {
  res.render("EditProfile", { pageTitle: "EDIT_PROFILE" });
};

export const changePassword = (req, res) => {
  res.render("ChangePassword", { pageTitle: "CHANGE_PASSWORD" });
};

export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const user = await User_Model.findById(id);
    res.render("UserDetail", { pageTitle: "USER_DETAIL", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};
