import routes from "./routes";
import dotenv from "dotenv";
import passport from "passport";
import User_Model from "./models/User";

import GithubStrategy from "passport-github";
import GoogleStrategy from "passport-google-oauth20";
import FaceBookStrategy from "passport-facebook";

import {
  githubLoginCallback,
  googleLoginCallback,
  facebookLoginCallback
} from "./controllers/globalController";

dotenv.config();

passport.use(User_Model.createStrategy());

//Github 정책
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackURL: `http://localhost:9000${routes.github_callback}`
    },
    githubLoginCallback
  )
);

//Google 정책
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: `http://localhost:9000${routes.google_callback}`
    },
    googleLoginCallback
  )
);

//Facebook 정책
passport.use(
  new FaceBookStrategy(
    {
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: `http://localhost:9000${routes.facebook_callback}`
    },
    facebookLoginCallback //모든게 잘 돌아갈 때 실행시켜야 하는 것
  )
);

/* passport.serializeUser(User_Model.serializeUser());
passport.deserializeUser(User_Model.deserializeUser()); */

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
