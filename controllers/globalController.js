//Global영역에서의 컨트롤러 함수
export const home = (req, res) => {
  res.render("Home", { pageTitle: "HOME" });
};

export const join = (req, res) => {
  res.render("Join", { pageTitle: "JOIN" });
};

export const login = (req, res) => {
  res.render("Login", { pageTitle: "LOGIN" });
};

export const logout = (req, res) => {
  res.render("Logout", { pagetTitle: "LOGOUT" });
};

export const search = (req, res) => {
  res.render("Search", { pageTitle: "SEARCH" });
};
