import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Working at Home";
  res.locals.routes = routes;
  res.locals.user = {
    Authenticated: true,
    id: 1
  };
  next();
};
