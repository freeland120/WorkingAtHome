import routes from "../routes";
//Video 영역에서의 컨트롤 함수

export const getUpload = (req, res) => {
  res.render("Upload", { pageTitle: "UPLOAD" });
};

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  res.redircet(routes.videoDetail(324393));
};

export const editVideo = (req, res) => {
  res.render("EditVideo", { pageTitle: "EDIT_VIDEO" });
};

export const deleteVideo = (req, res) => {
  res.render("DeleteVideo", { pageTitle: "DELETE_VIDEO" });
};
