class TaskDtoEx {
    constructor(ID, TITLE, DESCRiPTION, ACCEPTANCE_CRITERIA, NFR,
        STATUS, PRIORITY, ORIGINAL_ESTIMATE, COMPLETED, REMAINING
    ) {

        [this.ID, this.TITLE, this.DESCRiPTION, this.ACCEPTANCE_CRITERIA,
        this.NFR, this.STATUS, this.PRIORITY, this.ORIGINAL_ESTIMATE,
        this.COMPLETED, this.REMAINING
        ] = arguments
    }
}

let TaskDto = {
}

export default TaskDto;

