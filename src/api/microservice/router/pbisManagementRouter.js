import express from "express";
import * as pbis from "../controllers/pbiController.js";

const routes = express.Router();

routes.get("/create-pbis", pbis.createManyPbis);

export default routes;
