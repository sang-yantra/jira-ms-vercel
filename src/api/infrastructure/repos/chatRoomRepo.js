import context from "../context/jiraContext.js";
import { v4 as uuidv4, stringify, parse } from "uuid";
import { uuidStringToBuffer } from "../../../utils/index.js";

export async function createChatRoom(chatRoom) {
  const chatRoomCreated = await context.chatRoom.create({
    data: {
      RoomId: uuidStringToBuffer(uuidv4()),
      Title: chatRoom.Title,
      Description: chatRoom.Description,
      Type: chatRoom.Type,
      CreatedDateTime: chatRoom.CreatedDateTime,
      CreatedBy: chatRoom.CreatedBy,
    },
  });

  return chatRoomCreated;
}

export async function getAllChatRoom() {
  return await context.chatRoom.findMany();
}
