import { uuidStringToBuffer } from "../../../utils/index.js";
import * as pbiRepo from "../../infrastructure/repos/pbiRepo.js";
import { v4 as uuid } from "uuid";

import PbiDto from "../dto/PbiDto.js";
class PbiServices {
  async createManyPbi() {
    const TeamId = "37f954dd-8906-4680-85df-c3a9238de9b8";
    const memberId_Anup = "ad55b9e0-39f6-49aa-8660-f4c4a998fd9d";
    let pbiArr = [];
    for (let i = 0; i < 10; i++) {
      let pbi = {};
      pbi.Id = uuidStringToBuffer(uuid());
      pbi.Team_Id = uuidStringToBuffer(TeamId);
      pbi.Title = "Task auto generated " + i;
      pbi.Type = "Normal";
      pbi.Description = "This is a task auto generated from backend" + i;
      pbi.Status = "New";
      pbi.Acceptance_Criteria = "Acceptance Criteria no-" + i;
      pbi.Nfr = "Nfr" + i;
      pbi.Business_Value = i + 1;
      pbi.Effort = i + 1;
      pbi.Priority = "Low";
      pbi.Assigned_To = uuidStringToBuffer(memberId_Anup);

      pbiArr = [...pbiArr, pbi];
    }

    const createdPbis = pbiRepo.createManyPbi(pbiArr);

    return createdPbis;
  }
}

export default PbiServices;
