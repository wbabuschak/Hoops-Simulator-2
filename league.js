class League {
    constructor(noTeams = 1){
        this.noTeams = noTeams;

        this.teams = [];
        for (let i = 0; i < noTeams; i++){
            let team = new Team();
            team.name = "Team #" + (i+1);
            team.division = "Division " + Math.floor(((i * 2)/noTeams)+1);
            team.roster = new Roster();
            this.teams.push(team);
        }
        League.counter = 0;
    }

     static assignID(){
        if (League.counter === undefined){
            League.counter = 0;
        }
        return League.counter++;
    }

    seasonPlayerTotal(id, statName, season = this.seasonNo){
        return 0.0;
    }
    
}

class Team {

}

class Roster {
    static NO_PLAYERS = 12;

    constructor(){
        this.players = [];
        for (let i = 0; i < Roster.NO_PLAYERS; i++){
            let player = new Player();
            player.name = "Player #" + (i+1);
            player.id = League.assignID();
            this.players.push(player);
        }
    }

   
}

class Player {

}