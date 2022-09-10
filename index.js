import path from "path";
import express from "express";
import app from "./src/api/api.js";
import createSocketServer from "./src/socket/socket.js";
import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

app.use("/static", express.static("public"));
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Add this
// Listen for when the client connects via socket.io-client
const CHAT_BOT = "ChatBot"; // Add this
// Add this
let chatRoom = ""; // E.g. javascript, node,...
let allUsers = []; // All users in current chat room
// io.on("connection", (socket) => {
//   console.log(`User connected ${socket.id}`);

//   socket.on("join_room", (data) => {
//     console.log("join_room captured");
//     const { username, room } = data; // Data sent from client when join_room event emitted
//     socket.join(room);

//     // Add this
//     let __createdtime__ = Date.now(); // Current timestamp
//     // // Send message to all users currently in the room, apart from the user that just joined
//     socket.to(room).emit("receive_message", {
//       message: `${username} has joined the chat room`,
//       username: CHAT_BOT,
//       __createdtime__,
//     });

//     socket.emit("receive_message", {
//       message: `Welcome ${username}`,
//       username: CHAT_BOT,
//       __createdtime__,
//     });
//     chatRoom = room;
//     allUsers.push({ id: socket.id, username, room });
//     chatRoomUsers = allUsers.filter((user) => user.room === room);
//     socket.to(room).emit("chatroom_users", chatRoomUsers);
//     socket.emit("chatroom_users", chatRoomUsers);

//     console.log("join_room event completed");
//   });

//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });
// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} joined room: ${data}`);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected", socket.id);
//   });
// });

createSocketServer(io);

server.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${5000}`)
);
