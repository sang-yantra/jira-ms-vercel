import context from "../context/jiraContext.js"
import { v4 as uuidv4, stringify, parse } from "uuid";
import { uuidStringToBuffer } from "../../../utils/index.js"

/**
 * function to get member by Id
 * @param {} Id 
 * @returns Member
 */
export async function getMemberById(Id) {
    return await context.members.findFirstOrThrow({
        where: {
            Id: uuidStringToBuffer(Id)
        }
    })
}