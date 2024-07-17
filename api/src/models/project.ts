import mongoose, { Schema, InferSchemaType, Document } from "mongoose";

const MODELNAME = "project";

const schema = new Schema({
  name: { type: String, unique: true },
  description: { type: String },
  website: { type: String },

  links: { type: [{ label: { type: String }, url: { type: String } }] },
  lead: { type: String },

  type: { type: String, enum: ["prospection", "startup-project", "startup-invest", "admin"] },

  paymentCycle: { type: String, enum: ["MONTHLY", "ONE_TIME"], default: "MONTHLY" },

  organisation: { type: String, trim: true },
  logo: { type: String, default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" },
  background: { type: String, default: "" },
  objective: { type: String },
  budget_max_monthly: { type: Number },
  created_at: { type: Date, default: Date.now },
  last_updated_at: { type: Date, default: Date.now },
  status: { type: String },
});

export type ProjectType = InferSchemaType<typeof schema> & Document;

export default mongoose.model(MODELNAME, schema);
