import TeamsDto from "../dto/TeamsDto.js";

/// repos
import * as teamsRepo from "../../infrastructure/repos/teamsRepo.js"
import { stringify } from "uuid";



class TeamServices {
    constructor() {
        /// logging functionality
    }

    /**
     * service to get list of teams 
     * @returns Teams
     */
    async getTeams() {
       
        const dbteams = await teamsRepo.getTeams()

        const teamsData = dbteams.map(dbteam => {
            let team = {...TeamsDto};
            team.Id = stringify(dbteam.Id);            
            team.Name =dbteam.Name;
            team.Description = dbteam.Description;     

            return team;

        })

        return teamsData;
    }

    /**
     * service to get a team by Id
     * @param {*} Id 
     * @returns Task
     */
     async getTeamById(Id) {
        const team = await teamsRepo.getTeamById(Id);
        team.Id = stringify(team.Id);  
        return team;

    }
    /**
     * service to create a team
     * @param {object} team 
     * @returns created Team
     */
     async createTeam(team) {
        const createdteam = await teamsRepo.createTeam(team);
        const teamwithParseIds = {
            ...createdteam,
            Id: stringify(createdteam.Id),
            
        }
        return teamwithParseIds;
    }
     /**
     * service to update a team
     * @param {string} id 
     * @param {object} task 
     * @returns updated team
     */
      async updateTeam(id, team) {
        const updateTeam = await teamsRepo.updateTeamById(id, team);
        const teamwithParseIds = {
            ...updateTeam,
            Id: id          
        }
        return teamwithParseIds;
    }

    
    /**
     * Delete a team by it's Id
     * @param {string} id 
     */
     async deleteTeamById(id) {
        await teamsRepo.deleteTeamById(id)
    }
}
export default TeamServices;