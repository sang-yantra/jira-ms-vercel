
import { PrismaClient } from "@prisma/client";
import { catchErrors } from "../../domain/errors/asyncCatch.js";

const prisma = new PrismaClient();


/**
 * Controller to get all tasks 
 */
export const getTasks = catchErrors(async (req, res) => {
    const tasks = await prisma.tASK.findMany();
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
    const x = "";
    const task = await prisma.tASK.create({
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

