import context from "../context/jiraContext.js";
import { stringify, parse } from "uuid";
import { uuidStringToBuffer } from "../../../utils/index.js";

/**
 * Function to get Pbis by TeamId
 * @param {*} teamId
 * @returns
 */
export async function getPbisByTeamId(teamId) {
  const pbiList = await context.pbiInfo.findMany({
    where: {
      Team_Id: uuidStringToBuffer(teamId),
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

  return pbiList;
}

/**
 * Function to get Pbi by Id
 * @param {String} Id
 * @return Pbi
 */
export async function getPbiById(Id) {
  const pbiById = await context.pbiInfo.findFirstOrThrow({
    where: {
      Id: uuidStringToBuffer(Id),
    },
  });

  return pbiById;
}

export async function createManyPbi(pbisArr) {
  const x = "";
  const pbis = await context.pbiInfo.createMany({
    data: pbisArr,
  });
  return pbis;
}
