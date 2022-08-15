import context from "../context/jiraContext.js"
import { stringify, parse } from "uuid";
import { uuidStringToBuffer } from "../../../utils/index.js"

/**
 * Function to return list of tasks
 * @returns list of tasks
 */
export async function getTasksbyPbIds(pbiIds) {

    const pbiIdsBuffer = pbiIds.map(pbi => uuidStringToBuffer(pbi));
    const tasks = await context.taskInfo.findMany({
        where: {
            Pbi_Id: {
                in: pbiIdsBuffer
            }
        },
        select: {
            Id: true,
            Pbi_Id: true,
            Title: true,
            Status: true,
            Name: true
        }
    });
    return tasks;
}