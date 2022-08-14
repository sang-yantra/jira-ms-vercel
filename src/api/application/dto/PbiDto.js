import TaskInfoDto from "./TaskInfoDto.js"

class PbiDtoEx {

    constructor(Id, Team_Id, Title, Type, Description,
        Status, Acceptance_Criteria, Nfr, Business_Value,
        Effort, Priority, Assigned_To, Created_Date, Updated_Date,
        TaskInfoDtos
    ) {

        [this.Id,
        this.Team_Id,
        this.Title,
        this.Type,
        this.Description,
        this.Status,
        this.Acceptance_Criteria,
        this.Nfr,
        this.Business_Value,
        this.Effort,
        this.Priority,
        this.Assigned_To,
        this.Created_Date,
        this.Updated_Date,
        this.TaskInfoDtos
        ] = arguments
    }
}

let PbiDto = {
    Id: String,
    Team_Id: String,
    Title: String,
    Type: String,
    Description: String,
    Status: String,
    Acceptance_Criteria: String,
    Nfr: String,
    Business_Value: Number,
    Effort: Number,
    Priority: String,
    Assigned_To: String,
    Created_Date: String,
    Updated_Date: String,
}

export default PbiDto;