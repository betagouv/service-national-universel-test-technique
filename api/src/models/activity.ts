import mongoose, { Schema, InferSchemaType, Document } from "mongoose";

const MODELNAME = "activity";

const schema = new Schema({
  projectId: { type: String },
  userId: { type: String },
  userAvatar: { type: String, default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" },
  userCostPerDay: { type: Number },
  userSellPerDay: { type: Number },
  userJobTitle: { type: String },
  date: { type: Date },
  total: { type: Number, default: 0 },
  cost: { type: Number, default: 0 },
  value: { type: Number, default: 0 },
  detail: [{ date: Date, value: Number }],
  created_at: { type: Date, default: Date.now },
  comment: { type: String },
  organisation: { type: String, trim: true, unique: true },
});

export type ActivityType = InferSchemaType<typeof schema> & Document;

export default mongoose.model(MODELNAME, schema);
