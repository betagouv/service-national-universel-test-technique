import { InferSchemaType } from "mongoose";

import ActivityModel from "./activity";
export type ActivityType = InferSchemaType<typeof ActivityModel>;

import ProjectModel from "./project";
export type ProjectType = InferSchemaType<typeof ProjectModel>;

import UserModel from "./user";
export type UserType = InferSchemaType<typeof UserModel>;

export { ActivityModel, ProjectModel, UserModel };
