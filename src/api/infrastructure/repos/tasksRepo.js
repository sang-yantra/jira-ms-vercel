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

/**
 * Function to create a task in db
 * @param {object} task 
 * @returns task
 */
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

/**
 * Function to get a task by Id
 * @param {*} Id 
 */
export async function getTaskById(Id) {
    const taskById = await context.taskInfo.findFirstOrThrow({
        where: {
            Id: uuidStringToBuffer(Id)
        }
    })

    return taskById;
}

/**
 * function to update a task
 * @param {string} id 
 * @param {object} task 
 * @returns updates Task
 */
export async function updateTaskById(id, task) {
    const updateTask = await context.taskInfo.update({
        where: {
            Id: uuidStringToBuffer(id)
        },
        data: {
            //Pbi_Id: uuidStringToBuffer(task.PbiId),
            Title: task.Title,
            Type: task.Type,
            Description: task.Description,
            Status: task.Status,
            Acceptance_Criteria: task.Acceptance_Criteria,
            Nfr: task.Nfr,
            Original_Estimate: task.Original_Estimate,
            Remaining: task.Remaining,
            Completed: task.Completed,
            //Assigned_To: uuidStringToBuffer(task.Assigned_To),
            Created_Date: task.Created_Date,
            Updated_Date: task.Updated_Date,
        }
    })

    return updateTask;
}


/**
 * Delete a task by it's Id
 * @param {string} id 
 */
export async function deleteTaskById(id) {
    await context.taskInfo.delete({
        where: {
            Id: uuidStringToBuffer(id)
        }
    })
}