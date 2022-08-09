
import { catchErrors } from "../domain/errors/asyncCatch.js";
import { PrismaClient } from "@prisma/client";
import { parse } from "dotenv";
const prisma = new PrismaClient();

export const getTasks = catchErrors(async (req, res) => {
    const tasks = await prisma.tASK.findMany();
    res.json({ tasks })
})

export const getTask = catchErrors(async (req, res) => {
    const task = await prisma.tASK.findUnique({
        where: {
            ID: parseInt(req.params["id"])
        }
    })

    res.json(task)
})


