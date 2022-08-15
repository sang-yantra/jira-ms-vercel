import context from "../context/jiraContext.js"
import { v4 as uuidv4, stringify, parse } from "uuid";
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
        }
    });
    return tasks;
}


export async function createTask(task) {
    const createdtask = await context.taskInfo.create({
        data: {
            Id: uuidStringToBuffer(uuidv4()),
            Pbi_Id: uuidStringToBuffer(task.PbiId),
            Title: task.Title,
            Type: task.Type,
            Description: task.Description,
            Status: task.Status,
            Acceptance_Criteria: task.Acceptance_Criteria,
            Nfr: task.Nfr,
            Original_Estimate: task.Original_Estimate,
            Remaining: task.Remaining,
            Completed: task.Completed,
            Assigned_To: uuidStringToBuffer(task.Assigned_To),
            Created_Date: task.Created_Date,
            Updated_Date: task.Updated_Date,
        }
    })

    return createdtask;
}