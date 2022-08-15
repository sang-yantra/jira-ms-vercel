/// dto models
import TaskInfoDto from "../dto/TaskInfoDto.js";

/// repos
import * as tasksRepo from "../../infrastructure/repos/tasksRepo.js"
import * as pbiRepo from "../../infrastructure/repos/pbiRepo.js"
import * as memberRepo from "../../infrastructure/repos/memberRepo.js"
import { stringify } from "uuid";
import PbiDto from "../dto/PbiDto.js";


class TaskServices {
    constructor() {
        /// logging functionality
    }

    /**
     * service to get list of task, with pbi
     * not all properties are included in the task
     * @param {*} teamId 
     * @returns Task
     */
    async getTasks(teamId) {
        const dbpbis = await pbiRepo.getPbisByTeamId(teamId)
        const pbIds = dbpbis.map(pbi => stringify(pbi.Id))
        const dbtasks = await tasksRepo.getTasksbyPbIds(pbIds)

        const tasksWithPbi = dbtasks.map(dbtask => {
            let task = TaskInfoDto;
            task.Id = stringify(dbtask.Id);
            task.Pbi = dbpbis.filter(dbpbi => stringify(dbpbi.Id) === stringify(dbtask.Pbi_Id))
                .map(dbpbi => {
                    let pbi = PbiDto;
                    pbi.Id = stringify(dbpbi.Id);
                    pbi.Team_Id = stringify(dbpbi.Team_Id);
                    pbi.Title = dbpbi.Title;
                    pbi.Status = dbpbi.Status;
                    pbi.Type = dbpbi.Type;
                    pbi.Effort = dbpbi.Effort;

                    return pbi;
                });
            task.Title = dbtask.Title;
            task.Type = dbtask.Type;
            task.Status = dbtask.Status;
            task.Remaining = dbtask.Remaining;

            return task;

        })

        return tasksWithPbi;
    }

    /**
     * service to get a task by Id
     * @param {*} Id 
     * @returns Task
     */
    async getTaskById(Id) {
        const task = await tasksRepo.getTaskById(Id);
        task.Id = stringify(task.Id);
        task.Pbi_Id = stringify(task.Pbi_Id);
        task.Assigned_To = stringify(task.Assigned_To);

        /// get pbi
        const pbi = await pbiRepo.getPbiById(task.Pbi_Id);

        /// get assigned to
        const member = await memberRepo.getMemberById(task.Assigned_To);

        task.Pbi = {
            Title: pbi.Title,
        };
        task.Assigned = {
            Name: member.Name,
            Email: member.Email,
        }

        return task;

    }

    /**
     * service to create a task
     * @param {object} task 
     * @returns created Task
     */
    async createTask(task) {
        const createdtask = await tasksRepo.createTask(task);
        const taskwithParseIds = {
            ...createdtask,
            Id: stringify(createdtask.Id),
            Pbi_Id: stringify(createdtask.Pbi_Id),
            Assigned_To: stringify(createdtask.Assigned_To)
        }
        return taskwithParseIds;
    }

    /**
     * service to update a task
     * @param {string} id 
     * @param {object} task 
     * @returns updated task
     */
    async updateTask(id, task) {
        const updateTask = await tasksRepo.updateTaskById(id, task);
        const taskwithParseIds = {
            ...updateTask,
            Id: id,
            Pbi_Id: stringify(updateTask.Pbi_Id),
            Assigned_To: stringify(updateTask.Assigned_To)
        }
        return taskwithParseIds;
    }
}

export default TaskServices;