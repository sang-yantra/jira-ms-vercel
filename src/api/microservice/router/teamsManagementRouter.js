import express from "express";
import * as teams from "../controllers/teamsController.js";

const routes = express.Router();


/**
 * @swagger
 * /api/1/teams-management/teams:
 *  get:
 *    summary: Fetch all teams
 *    description: Retrieve a single task by id
 *    tags:
 *      - Teams
 *    responses:
 *      '200':
 *        description: A successful response of task
 */
routes.get("/teams", teams.getTeams);

/**
* @swagger
* /api/1/tasks-management/teams/{id}:
*   get:
*     summary: Retrieve a single team
*     description: Retrieve a single team by id
*     tags:
*       - Teams
*     parameters:
*       - in: path
*         name: id
*         type: string
*         required: true
*         description: Numeric ID of the user to get
*     responses:
*       '200':
*         description: Successful operation
*         content:
*           application/json:
*             schema:
*               $ref: "#/components/schemas/Team"
*           application/xml:
*             schema:
*               $ref: "#/components/schemas/Team"
 */
 routes.get("/teams/:id", teams.getTeam);

 /**    
 * @swagger
 * /api/1/teams-management/teams:
 *   post:
 *     summary: Create a new team
 *     description: Create a new team
 *     tags:
 *       - Teams
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/TeamPost"
 *     responses:
 *       201:
 *         description: task creatd.
 */
routes.post("/teams", teams.createTeam);

/**
 * @swagger
 * /api/1/teams-management/teams/{id}:
 *   put:
 *     summary: Update a  team
 *     description: Update a  team by id
 *     tags:
 *       - Teams
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
 *             $ref: "#/components/schemas/TeamPost"
 *     responses:
 *       201:
 *         description: task creatd.
*/
routes.put("/teams/:id", teams.updateTeam)

/**
* @swagger
* /api/1/teams-management/teams/{id}:
*   delete:
*     summary: Delete a single team by id.
*     description: Delete a single team by id.
*     tags:
*       - Teams
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
routes.delete("/teams/:id", teams.deleteTeam);

export default routes
