import express from "express";
import * as tasks from "./controllers/tasksController.js";
import { API_VERSIONING } from "./constants/index.js";


const routes = express.Router()
routes.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>");
});

// Routes
/**
 * @swagger
 * /test:
 *  get:
 *    description: Use to test
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get("/test", function (req, res) {
    const x = "";
    res.json("working fine....");
});

/**
 * @swagger
 * /api/1/tasks:
 *  get:
 *    description: Fetch all tasks
 *    responses:
 *      '200':
 *        description: A successful response of task
 */
routes.get(API_VERSIONING + "/tasks", tasks.getTasks);
routes.get(API_VERSIONING + "/tasks/:id", tasks.getTask);
routes.post(API_VERSIONING + "/task", tasks.createTask);
routes.put(API_VERSIONING + "/tasks/:id", tasks.updateTask)
routes.delete(API_VERSIONING + "/task/:id", tasks.deleteTask);

export default routes