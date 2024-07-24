require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");

require("./mongo");

const { PORT, APP_URL } = require("./config.js");
const { initDB } = require("./mongo");

const app = express();

app.use(cors({ credentials: true, origin: APP_URL.split(",") }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname + "/../public"));

app.use("/user", require("./controllers/user"));
app.use("/project", require("./controllers/project"));
app.use("/activity", require("./controllers/activity"));

app.get("/", async (req, res) => {
  res.status(200).send({ name: "technical-test-api", localTime: new Date().toISOString() });
});

require("./passport")(app);

process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection: ", error?.message);
  process.exit(1);
});

(async () => {
  await initDB();
  app.listen(PORT, () => console.log("Listening on port " + PORT));
})();
