import { PrismaClient } from "@prisma/client";
import _ from "lodash";
import superjson from "superjson";
import { catchErrors } from "../../domain/errors/asyncCatch.js";
import TaskServices from "../../application/services/taskServices.js";
import TaskInfoDto from "../../application/dto/TaskInfoDto.js";

const prisma = new PrismaClient();
const PBI_ID = "f57dac0d-1bfa-11ed-a3b2-b622babdeb3e";
const ASSIGNED_TO = "ad55b9e0-39f6-49aa-8660-f4c4a998fd9d";

/**
 * Controller to get all tasks
 */
export const getTasks = catchErrors(async (req, res) => {
  const memberId = "a2a64c91-1bf8-11ed-a3b2-b622babdeb3e";
  const teamId = "37f954dd-8906-4680-85df-c3a9238de9b8";
  const tasks = await new TaskServices().getTasks(teamId);
  res.json(tasks);
});

/**
 * Controller to get a particular task by id
 */
export const getTask = catchErrors(async (req, res) => {
  ///7aab6d29-1bfc-11ed-a3b2-b622babdeb3e
  const task = await new TaskServices().getTaskById(req.params.id);
  res.json(task);
});

/**
 * Controller to create a task
 */
export const createTask = catchErrors(async (req, res) => {
  let payload = _.cloneDeep(req.body);
  if (typeof payload !== "object") return Error("invalid payload");
  const newTask = {
    ...payload,
    Created_Date: new Date(payload.Created_Date),
    Updated_Date: new Date(payload.Updated_Date),
  };

  const task = await new TaskServices().createTask(newTask);

  res.json(task);
});

/**
 * Controller to update a task
 */
export const updateTask = catchErrors(async (req, res) => {
  let payload = _.cloneDeep(req.body);
  if (typeof payload !== "object") return Error("invalid payload");

  const payloadTask = {
    ...payload,
    Pbi_Id: payload.Pbi_Id ?? PBI_ID,
    Assigned_To: payload.Assigned_To ?? ASSIGNED_TO,
    Created_Date: new Date(payload.Created_Date),
    Updated_Date: new Date(payload.Updated_Date),
  };

  const updatedTask = await new TaskServices().updateTask(
    req.params.id,
    payloadTask
  );

  res.json(updatedTask);
});

/**
 * controller to delete a task
 */
export const deleteTask = catchErrors(async (req, res) => {
  await new TaskServices().deleteTaskById(req.params.id);
  res.json("deleted a task successfully");
});

/**
 * Controller to update status of the task
 */
export const patchTaskStatus = catchErrors(async (req, res) => {
  await new TaskServices().patchTaskStatusById(req.params.id, req.body.Status);
  res.json("No Content");
});
