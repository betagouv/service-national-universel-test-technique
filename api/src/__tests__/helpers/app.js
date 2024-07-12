const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");

passport.authenticate = (type) => {
  return (req, res, next) => {
    req.user = { name: "admin" };
    passport.lastTypeCalledOnAuthenticate = type;
    next();
  };
};

function getAppHelper() {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.text({ type: "application/x-ndjson" }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use("/user", require("../../controllers/user"));
  app.use("/project", require("../../controllers/project"));
  app.use("/activity", require("../../controllers/activity"));
  return app;
}

module.exports = getAppHelper;
