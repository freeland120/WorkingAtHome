import passport from "passport";
import User_Model from "./models/User";

passport.use(User_Model.createStrategy());

passport.serializeUser(User_Model.serializeUser());
passport.deserializeUser(User_Model.deserializeUser());
