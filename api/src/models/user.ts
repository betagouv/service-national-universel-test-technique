import mongoose, { Schema, InferSchemaType, Document } from "mongoose";
import bcrypt from "bcryptjs";

const MODELNAME = "user";

const schema = new Schema({
  name: { type: String, trim: true, unique: true },

  email: { type: String, trim: true },

  avatar: { type: String, default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" },
  banner: { type: String, default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" },

  password: { type: String },

  last_login_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },

  costPerDay: { type: Number, default: 100 },
  sellPerDay: { type: Number, default: 200 },

  days_worked: { type: Number, default: 23 },

  description: { type: String },
  job_title: { type: String },

  organisation: { type: String, trim: true, unique: true },
  status: { type: String, default: "active" },
  availability: { type: String, default: "available" },
  address: { type: String },
});

schema.pre("save", function (next) {
  if (this.isModified("password") || this.isNew) {
    bcrypt.hash(this.password, 10, (e, hash) => {
      this.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

schema.methods.comparePassword = function (p) {
  return bcrypt.compare(p, this.password || "");
};

export type UserType = InferSchemaType<typeof schema> & Document;

export default mongoose.model(MODELNAME, schema);
