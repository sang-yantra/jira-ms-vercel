import express from "express";
import * as tasks from "./controllers/tasksController.js";
import { API_VERSIONING } from "./constants/index.js";


const routes = express.Router()
routes.get("/", function (req, res) {
    res.send("Welcome to jira ms");
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


/**
* @swagger
* /api/1/tasks/{id}:
*   get:
*     summary: Retrieve a single task.
*     description: Retrieve a single task by id
*     parameters:
*       - in: path
*         name: id
*         type: integer
*         required: true
*         description: Numeric ID of the user to get
*     responses:
*       200:
*         description: A single user.
*/
routes.get(API_VERSIONING + "/tasks/:id", tasks.getTask);

/**
 * @swagger
 * /api/1/task:
 *   post:
 *     summary: Create a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TITLE:
 *                 type: string
 *                 description: Title of the task.
 *                 example: Task from swagger
 *               DESCRiPTION:
 *                 DESCRiPTION: string
 *                 description: Description pf the task
 *                 example: Description pf the task
 *               ACCEPTANCE_CRITERIA:
 *                 type: string
 *                 description: ACCEPTANCE_CRITERIA of a task
 *                 example: ACCEPTANCE_CRITERIA of a task
 *               NFR:
 *                 type: string
 *                 description: NFR of a task
 *                 example: NFR of a task
 *               STATUS:
 *                 type: string
 *                 description: Status of the task
 *                 example: New
 *               PRIORITY:
 *                 type: string
 *                 description: PRIORITY of the task
 *                 example: Low
 *               ORIGINAL_ESTIMATE:
 *                 type: int
 *                 description: ORIGINAL_ESTIMATE of the task in hrs
 *                 example: 10
 *               COMPLETED:
 *                 type: int
 *                 description: COMPLETED of the task in hrs
 *                 example: 0
 *               REMAINING:
 *                 type: int
 *                 description: REMAINING of the task in hrs
 *                 example: 10
*     responses:
*       201:
*         description: task creatd.
*/
routes.post(API_VERSIONING + "/task", tasks.createTask);
routes.put(API_VERSIONING + "/tasks/:id", tasks.updateTask)
routes.delete(API_VERSIONING + "/task/:id", tasks.deleteTask);

export default routes

