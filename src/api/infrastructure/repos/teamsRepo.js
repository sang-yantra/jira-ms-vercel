import context from "../context/jiraContext.js";
import { v4 as uuidv4, stringify, parse } from "uuid";
import { uuidStringToBuffer } from "../../../utils/index.js";

/**
 * Function to return list of tasks
 * @returns list of tasks
 */
export async function getTeams() {
  const teams = await context.teams.findMany({
    select: {
      Id: true,
      Name: true,
      Description: true,
      Teams_Photo: true,
    },
  });
  return teams;
}

/**
 * Function to create a task in db
 * @param {object} task
 * @returns task
 */
export async function createTeam(team) {
  const createdteam = await context.teams.create({
    data: {
      Id: uuidStringToBuffer(uuidv4()),
      Name: team.Name,
      Description: team.Description,
    },
  });

  return createdteam;
}

/**
 * Function to get a team by Id
 * @param {*} Id
 */
export async function getTeamById(Id) {
  const teamById = await context.teams.findFirstOrThrow({
    where: {
      Id: uuidStringToBuffer(Id),
    },
  });

  return teamById;
}

/**
 * function to update a task
 * @param {string} id
 * @param {object} task
 * @returns updates Task
 */
export async function updateTeamById(id, team) {
  const updateTeam = await context.teams.update({
    where: {
      Id: uuidStringToBuffer(id),
    },
    data: {
      //Pbi_Id: uuidStringToBuffer(task.PbiId),
      Name: team.Name,
      Description: team.Description,
    },
  });

  return updateTeam;
}

/**
 * Delete a team by it's Id
 * @param {string} id
 */
export async function deleteTeamById(id) {
  await context.teams.delete({
    where: {
      Id: uuidStringToBuffer(id),
    },
  });
}

export async function saveImageOfTeamById(id, file) {
  await context.teams.update({
    where: {
      Id: uuidStringToBuffer(id),
    },
    data: {
      Teams_Photo: file.buffer,
    },
  });
}
