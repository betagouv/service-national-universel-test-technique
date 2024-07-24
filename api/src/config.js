const ENVIRONMENT = process.env.ENVIRONMENT || "development";

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27117/local_app";

const PORT = process.env.PORT || 8080;
const secret = process.env.SECRET || "not-so-secret";
const APP_URL = process.env.APP_URL || "http://localhost:8082";

module.exports = {
  PORT,
  MONGO_URL,
  secret,
  APP_URL,
  ENVIRONMENT,
};
