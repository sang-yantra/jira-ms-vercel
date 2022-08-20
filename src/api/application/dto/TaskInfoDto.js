import PbiDto from "./PbiDto.js";

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