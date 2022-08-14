import PbiDto from "./PbiDto.js";
class TaskInfoDtoEx {
    constructor(Id, Pbi_Id, Title, Type, Description,
        Status, Acceptance_Criteria, Nfr, Original_Estimate,
        Remaining, Completed, Priority, Assigned_To, Created_Date, Updated_Date
    ) {

        [this.Id,
        this.Pbi_Id,
        this.Title,
        this.Type,
        this.Description,
        this.Status,
        this.Acceptance_Criteria,
        this.Nfr,
        this.Original_Estimate,
        this.Remaining,
        this.Completed,
        this.Assigned_To,
        this.Created_Date,
        this.Updated_Date,
        ] = arguments
    }
}

let TaskInfoDto = {
    Id: String,
    Pbi: PbiDto,
    Title: String,
    Type: String,
    Description: String,
    Status: String,
    Acceptance_Criteria: String,
    Nfr: String,
    Original_Estimate: Number,
    Remaining: Number,
    Completed: String,
    Assigned_To: String,
    Created_Date: String,
    Updated_Date: String,
}

export default TaskInfoDto;