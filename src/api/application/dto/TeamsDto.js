class TeamsDtoEx {
  constructor(Id, Name, Description) {
    [this.Id, this.Name, this.Description] = arguments;
  }
}

let TeamsDto = {
  Id: String,
  Name: String,
  Description: String,
  Teams_Photo: Buffer,
};

export default TeamsDto;
