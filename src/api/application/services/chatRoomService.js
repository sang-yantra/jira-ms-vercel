import { stringify } from "uuid";
import * as chatRoomRepo from "../../infrastructure/repos/chatRoomRepo.js";

class ChatRoomServices {
  /**
   * service to create chat room
   * @param {*} chatRoom
   * @returns
   */
  async createChatRoom(chatRoom) {
    const chatRoomCreated = await chatRoomRepo.createChatRoom(chatRoom);
    chatRoomCreated.RoomId = stringify(chatRoomCreated.RoomId);
    return chatRoom;
  }

  async getAllChatRoom() {
    const chatRooms = await chatRoomRepo.getAllChatRoom();
    const chatRoomsFormatId = chatRooms.map((room) => {
      return { ...room, RoomId: stringify(room.RoomId) };
    });
    return chatRoomsFormatId;
  }
}

export default ChatRoomServices;
