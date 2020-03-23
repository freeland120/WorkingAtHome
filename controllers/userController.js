//User 영역에서의 컨트롤러 함수
export const userDetail = (req, res) => {
  res.render("UserDetail", { pageTitle: "USER_DETAIL" });
};

export const editProfile = (req, res) => {
  res.render("EditProfile", { pageTitle: "EDIT_PROFILE" });
};

export const changePassword = (req, res) => {
  res.render("ChangePassword", { pageTitle: "CHANGE_PASSWORD" });
};
