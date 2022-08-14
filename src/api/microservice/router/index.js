import express from "express";
import tasksManagementRouter from "./tasksManagementRouter.js"
import { API_VERSIONING } from "../constants/index.js"

const routes = express.Router();

routes.get("/", function (req, res) {
    res.send("Welcome to jira ms");
});

routes.use(API_VERSIONING + "/tasks-management", tasksManagementRouter)

export default routes;