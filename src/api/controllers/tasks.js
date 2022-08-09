import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const GetTasks = async () => {
    console.log("task controller");
    const tasks = await prisma.tASK.findMany();
    return tasks;
};

export { GetTasks };
