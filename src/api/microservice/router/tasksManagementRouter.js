import express from "express";
import * as tasks from "../controllers/tasksController.js";

const routes = express.Router();

/**
 * @swagger
 * /api/1/tasks-management/test:
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
 * /api/1/tasks-management/tasks:
 *  get:
 *    summary: Fetch all tasks
 *    description: Retrieve a single task by id
 *    tags:
 *      - Tasks
 *    responses:
 *      '200':
 *        description: A successful response of task
 */
routes.get("/tasks", tasks.getTasks);


/**
* @swagger
* /api/1/tasks-management/tasks/{id}:
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
routes.get("/tasks/:id", tasks.getTask);

/**
 * @swagger
 * /api/1/tasks-management/tasks:
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
routes.post("/tasks", tasks.createTask);


/**
 * @swagger
 * /api/1/tasks-management/tasks/{id}:
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
routes.put("/tasks/:id", tasks.updateTask)

/**
* @swagger
* /api/1/tasks-management/tasks/{id}:
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
routes.delete("/tasks/:id", tasks.deleteTask);


/**
 * @swagger
 * /api/1/tasks-management/tasks/{id}/status:
 *   patch:
 *     summary: Update the status of a task
 *     description: Update the status of a task
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
 *             $ref: "#/components/schemas/TaskStatusUpdate"
 *     responses:
 *       204:
 *         description: No content.
*/
routes.patch("/tasks/:id/status", tasks.patchTaskStatus)

export default routes

