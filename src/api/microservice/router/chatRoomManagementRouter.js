import express from "express";
import * as chatRoom from "../controllers/chatRoomController.js";

const routes = express.Router();

/**
 * @swagger
 * /api/1/chatroom-management/chatroom:
 *   post:
 *     summary: Create a new chat room
 *     description: Create a new chat room
 *     tags:
 *       - Chat Room
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/ChatRoomPost"
 *     responses:
 *       201:
 *         description: task creatd.
 */
routes.post("/chatroom", chatRoom.createChatRoom);

/**
 * @swagger
 * /api/1/chatroom-management/chatRooms:
 *   get:
 *     summary: Get all chat rooms
 *     description: Get all chat rooms
 *     tags:
 *       - Chat Room
 *     responses:
 *       201:
 *         description: task creatd.
 */
routes.get("/chatRooms", chatRoom.getAllChatRoom);

export default routes;
