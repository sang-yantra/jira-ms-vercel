class TeamsDtoEx {
    constructor(Id,Name , Description,        
    ) {

        [this.Id,
        this.Name,
        this.Description        
        ] = arguments
    }
}

let TeamsDto = {
    Id: String,    
    Name: String,    
    Description: String    
}

export default TeamsDto;