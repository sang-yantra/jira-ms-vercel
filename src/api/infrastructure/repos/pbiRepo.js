import context from "../context/jiraContext.js"
import { stringify, parse } from "uuid";
import { uuidStringToBuffer } from "../../../utils/index.js"

export async function getPbisByTeamId(teamId) {
    const pbiList = await context.pbiInfo.findMany({
        where: {
            Team_Id: uuidStringToBuffer(teamId)
        },
        select: {
            Id: true,
            Team_Id: true,
            Title: true,
            Status: true,
            Assigned_To: true,
            Effort: true,
            Priority: true,
        },
    });

    return pbiList
}