
import { PrismaClient } from "@prisma/client";
import _ from "lodash";
import superjson from "superjson"
import { catchErrors } from "../../domain/errors/asyncCatch.js";
import TaskServices from "../../application/services/taskServices.js";
import TaskInfoDto from "../../application/dto/TaskInfoDto.js"


const prisma = new PrismaClient();


/**
 * Controller to get all tasks 
 */
export const getTasks = catchErrors(async (req, res) => {
    const memberId = "a2a64c91-1bf8-11ed-a3b2-b622babdeb3e"
    const teamId = "a3c0a19e-1bf7-11ed-a3b2-b622babdeb3e"
    const tasks = await new TaskServices().getTasks(teamId);
    res.json(tasks)
})


/**
 * Controller to get a particular task by id 
 */
export const getTask = catchErrors(async (req, res) => {

    const task = await prisma.tASK.findUnique({
        where: {
            ID: parseInt(req.params["id"])
        }
    })

    res.json(task)
})


/**
 * Controller to create a task
 */
export const createTask = catchErrors(async (req, res) => {

    let payload = _.cloneDeep(req.body);
    if (typeof payload !== 'object')
        return Error("invalid payload");
    // // const newTask = TaskInfoDto;
    // // newTask.PbiId = "f57da697-1bfa-11ed-a3b2-b622babdeb3e"
    // // newTask.Title = payload.Title;
    // // newTask.Type = payload.Type;
    // // newTask.Description = payload.Description;
    // // newTask.Status = payload.Status;
    // // newTask.Acceptance_Criteria = payload.Acceptance_Criteria;
    // // newTask.Nfr = payload.Nfr;
    // // newTask.Original_Estimate = payload.Original_Estimate;
    // // newTask.Remaining = payload.Remaining;
    // // newTask.Completed = payload.Completed;
    // // newTask.Assigned_To = "6cfde996-1bf8-11ed-8c66-0897987103eb";
    // // newTask.Created_Date = new Date(payload.Created_Date);
    // // newTask.Updated_Date = new Date(payload.Updated_Date);

    const newTask = {
        ...payload,
        PbiId: "f57da697-1bfa-11ed-a3b2-b622babdeb3e",
        Assigned_To: "6cfde996-1bf8-11ed-8c66-0897987103eb",
        Created_Date: new Date(payload.Created_Date),
        Updated_Date: new Date(payload.Updated_Date)
    };

    const task = await new TaskServices().createTask(newTask)

    res.json(task)
})

/**
 * Controller to update a task
 */
export const updateTask = catchErrors(async (req, res) => {
    const updateTask = await prisma.tASK.update({
        where: {
            ID: parseInt(req.params["id"])
        },
        data: {
            TITLE: req.body.TITLE,
            DESCRiPTION: req.body.DESCRiPTION,
            ACCEPTANCE_CRITERIA: req.body.ACCEPTANCE_CRITERIA,
            NFR: req.body.NFR,
            STATUS: req.body.STATUS,
            PRIORITY: req.body.PRIORITY,
            ORIGINAL_ESTIMATE: req.body.ORIGINAL_ESTIMATE,
            COMPLETED: req.body.COMPLETED,
            REMAINING: req.body.REMAINING
        }
    })
    res.json(updateTask)
})


/**
 * controller to delete a task
 */
export const deleteTask = catchErrors(async (req, res) => {
    const deleteTask = await prisma.tASK.delete({
        where: {
            ID: parseInt(req.params["id"])
        }
    })
    res.json(deleteTask)
})

