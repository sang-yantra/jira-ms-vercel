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
 *    tags:
 *      - test
 *    responses:
 *      '200':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/test"
 *          application/xml:
 *            schema:
 *              $ref: "#/components/schemas/test"
 */
routes.get("/test", function (req, res) {
    const x = "";
    res.json("working fine....");
});

/**
 * @swagger
 * /api/1/tasks:
 *  get:
 *    summary: Fetch all tasks
 *    description: Retrieve a single task by id
 *    tags:
 *      - Tasks
 *    responses:
 *      '200':
 *        description: A successful response of task
 */
routes.get(API_VERSIONING + "/tasks", tasks.getTasks);


/**
* @swagger
* /api/1/tasks/{id}:
*   get:
*     summary: Retrieve a single task
*     description: Retrieve a single task by id
*     tags:
*       - Tasks
*     parameters:
*       - in: path
*         name: id
*         type: integer
*         required: true
*         description: Numeric ID of the user to get
*     responses:
*       '200':
*         description: Successful operation
*         content:
*           application/json:
*             schema:
*               $ref: "#/components/schemas/Task"
*           application/xml:
*             schema:
*               $ref: "#/components/schemas/Task"
 */
routes.get(API_VERSIONING + "/tasks/:id", tasks.getTask);

/**
 * @swagger
 * /api/1/task:
 *   post:
 *     summary: Create a new task
 *     description: Create a new task
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/TaskPost"
 *     responses:
 *       201:
 *         description: task creatd.
 */
routes.post(API_VERSIONING + "/task", tasks.createTask);


/**
 * @swagger
 * /api/1/tasks/{id}:
 *   put:
 *     summary: Update a new task
 *     description: Update a new task by id
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *         description: Numeric ID of the user to get
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/TaskPost"
 *     responses:
 *       201:
 *         description: task creatd.
*/
routes.put(API_VERSIONING + "/tasks/:id", tasks.updateTask)

/**
* @swagger
* /api/1/task/{id}:
*   delete:
*     summary: Delete a single task by id.
*     description: Retrieve a single task by id
*     tags:
*       - Tasks
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
routes.delete(API_VERSIONING + "/task/:id", tasks.deleteTask);

export default routes

