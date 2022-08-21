import express from "express";
import * as members from "../controllers/memberController.js";

const routes = express.Router();


routes.get("/members/:id", members.getMemberById);

export default routes