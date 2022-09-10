import express from "express";
import tasksManagementRouter from "./tasksManagementRouter.js";
import teamsManagementRouter from "./teamsManagementRouter.js";
import membersManagementRouter from "./membersManagementRouter.js";
import pbisManagemnetRouter from "./pbisManagementRouter.js";
import chatRoomManagementRouter from "./chatRoomManagementRouter.js";
import { API_VERSIONING } from "../constants/index.js";

const routes = express.Router();

routes.get("/", function(req, res) {
  res.send("Welcome to jira ms");
});

routes.use(API_VERSIONING + "/tasks-management", tasksManagementRouter);
routes.use(API_VERSIONING + "/teams-management", teamsManagementRouter);
routes.use(API_VERSIONING + "/members-management", membersManagementRouter);
routes.use(API_VERSIONING + "/pbis-management", pbisManagemnetRouter);
routes.use(API_VERSIONING + "/chatroom-management", chatRoomManagementRouter);

export default routes;
