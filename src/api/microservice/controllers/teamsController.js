import { PrismaClient } from "@prisma/client";
import _ from "lodash";
import superjson from "superjson";
import { catchErrors } from "../../domain/errors/asyncCatch.js";
import TeamServices from "../../application/services/teamService.js";

const prisma = new PrismaClient();
const PBI_ID = "f57da697-1bfa-11ed-a3b2-b622babdeb3e";
const ASSIGNED_TO = "a2a64c91-1bf8-11ed-a3b2-b622babdeb3e";

/**
 * Controller to get all teams
 */
export const getTeams = catchErrors(async (req, res) => {
  const teams = await new TeamServices().getTeams();
  res.json(teams);
});
/**
 * Controller to get team for a team Id
 */
export const getTeam = catchErrors(async (req, res) => {
  const teams = await new TeamServices().getTeamById(req.params.id);
  res.json(teams);
});

/**
 * Controller to create a team
 */
export const createTeam = catchErrors(async (req, res) => {
  let payload = _.cloneDeep(req.body);
  if (typeof payload !== "object") return Error("invalid payload");
  const newTeam = {
    ...payload,
  };

  const team = await new TeamServices().createTeam(newTeam);

  res.json(team);
});

/**
 * Controller to update a task
 */
export const updateTeam = catchErrors(async (req, res) => {
  let payload = _.cloneDeep(req.body);
  if (typeof payload !== "object") return Error("invalid payload");

  const payloadTeam = {
    ...payload,
  };

  const updatedTeam = await new TeamServices().updateTeam(
    req.params.id,
    payloadTeam
  );

  res.json(updatedTeam);
});

/**
 * controller to delete a team
 */
export const deleteTeam = catchErrors(async (req, res) => {
  await new TeamServices().deleteTeamById(req.params.id);
  res.json("deleted a team successfully");
});

export const saveImageOfTeam = catchErrors(async (req, res) => {
  const teamId = req.params.id,
    imageFile = req.file;

  const result = new TeamServices().saveImageOfTeam(teamId, imageFile);

  res.json(result);
});
