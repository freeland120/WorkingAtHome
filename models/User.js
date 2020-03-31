import mongoose from "mongoose";
import PassportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  githubId: Number,
  googleId: Number,
  facebookId: Number
});

UserSchema.plugin(PassportLocalMongoose, { usernameField: "email" });

const User_Model = mongoose.model("User", UserSchema);

export default User_Model;
