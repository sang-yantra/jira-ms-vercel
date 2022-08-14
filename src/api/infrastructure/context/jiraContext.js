import { PrismaClient } from "@prisma/client";

const jiraContext = new PrismaClient({ log: ['query', 'error'] })
export default jiraContext;