const mongoose = require("mongoose");
const { MONGO_URL } = require("./config.js");

//Set up default mongoose connection
async function initDB() {
  if (!MONGO_URL) {
    throw new Error("ERROR CONNECTION. MONGO URL EMPTY");
  }

  console.log("Mongo initDB", MONGO_URL);

  mongoose.Promise = global.Promise; //Get the default connection
  const db = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)
  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  db.on("connecting", () => console.log("MONGODB: connecting"));
  db.on("open", () => console.log("MONGODB: open"));
  db.on("connected", () => console.log("MONGODB: connected"));
  db.on("disconnecting", () => console.log("MONGODB: disconnecting"));
  db.on("disconnected", () => console.log("MONGODB: disconnected"));
  db.on("reconnected", () => console.log("MONGODB: reconnected"));
  db.on("close", () => console.log("MONGODB: close"));

  db.on("fullsetup", () => console.log("MONGODB: fullsetup"));
  db.on("all", () => console.log("MONGODB: all"));
  db.on("reconnectFailed", () => console.log("MONGODB: reconnectFailed"));

  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 1000 });
  } catch (error) {
    if (error.reason && error.reason.servers) {
      if (error.message.includes("ECONNREFUSED")) {
        console.error("MONGODB: connection error:", error.message, "(is server up and running ?)");
      } else {
        console.error(error.reason.servers);
      }
    } else {
      console.error("MONGODB: connection error:", error);
    }
    throw error;
  }
}

async function closeDB() {
  const db = mongoose.connection;
  await db.close();
}

module.exports = {
  initDB,
  closeDB,
};
