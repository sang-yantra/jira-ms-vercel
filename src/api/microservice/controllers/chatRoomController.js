import { PrismaClient } from "@prisma/client";
import _ from "lodash";
import ChatRoomServices from "../../application/services/chatRoomService.js";
import { catchErrors } from "../../domain/errors/asyncCatch.js";

export const createChatRoom = catchErrors(async (req, res) => {
  const payload = {
    ...req.body,
    CreatedDateTime: new Date(req.body.CreatedDateTime),
  };
  const chatRoom = await new ChatRoomServices().createChatRoom(payload);
  res.json(chatRoom);
});

export const getAllChatRoom = catchErrors(async (req, res) => {
  const chatRooms = await new ChatRoomServices().getAllChatRoom();
  res.json(chatRooms);
});
