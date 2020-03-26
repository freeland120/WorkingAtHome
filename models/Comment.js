import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text가 필요합니다."
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Comment_Model = mongoose.model("Comment", CommentSchema);
export default Comment_Model;
