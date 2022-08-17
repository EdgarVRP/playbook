class ExplorerService{
    constructor(){
        this.NumExplorers=0;
        this.usernames=null;
    }
    static filterByMission(explorers, mission){
        const explorermission = explorers.filter((explorer) => explorer.mission == mission);
        console.log(explorermission.length);
        this.NumExplorers=explorermission.length;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        this.filterByMission(explorers, mission);
        return this.NumExplorers;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        console.log(usernamesInNode);
        this.usernames=usernamesInNode;
        return this.usernames;
    }
}
module.exports = ExplorerService;