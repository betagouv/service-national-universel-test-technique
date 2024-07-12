/**
 * Reset activity for organisation
 */
require("dotenv").config();
require("../src/mongo");

const ActivityModel = require("../src/models/activity");

const mode = "test"; // save - test
const organisation = "Test";

(async () => {
  try {
    const activities = await ActivityModel.find({ organisation });
    if (!activities || !activities.length) {
      console.log("🚫 Activities not found");
      process.exit(1);
    }

    for (const activity of activities) {
      console.log({ id: activity._id, total: activity.total });
      activity.set({ total: 0 });
      if (mode === "save") {
        // await activity.save();
        console.log("✅ Activity updated");
      }
    }
  } catch (e) {
    console.log("🚫 Error", e);
    process.exit(1);
  }
  process.exit(0);
})();
