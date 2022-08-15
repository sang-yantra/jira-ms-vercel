/// dto models
import TaskDto from "../dto/TaskDto.js";
import TaskInfoDto from "../dto/TaskInfoDto.js";

/// repos
import * as tasksRepo from "../../infrastructure/repos/tasksRepo.js"
import * as pbiRepo from "../../infrastructure/repos/pbiRepo.js"
import { stringify } from "uuid";
import PbiDto from "../dto/PbiDto.js";


class TaskServices {
    constructor() {
        /// logging functionality
    }

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

    getTask() {

    }
}

export default TaskServices;