//Video 영역에서의 컨트롤 함수

export const upload = (req, res) => {
  res.render("Upload", { pageTitle: "UPLOAD" });
};

export const editVideo = (req, res) => {
  res.render("EditVideo", { pageTitle: "EDIT_VIDEO" });
};

export const deleteVideo = (req, res) => {
  res.render("DeleteVideo", { pageTitle: "DELETE_VIDEO" });
};
