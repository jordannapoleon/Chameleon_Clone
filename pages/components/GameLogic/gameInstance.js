class GameInstance {
    constructor (hostName) {
      this.host = hostName;
      this.players = [];
      this.maxGroupSize = 4;
      this.currentGroupSize = 1;
      this.private = true;
      this.joinCode = undefined;
      this.gameSettings = {
            think_time: 60,
            type_time: 60,
            debate_time: 60,
            chameleon_count: 1,
            chameleon_hint: true
        };
      this.scores = [];  
    }


    // >>>>> Player Management <<<<< 

    // >>>>  1. Adding players
    addPlayer(playerId, playerName){
        if(this.currentGroupSize < this.maxGroupSize){
            this.players.push(playerName); //store names
            this.scores[playerId] = { name: playerName, score:0};
            this.currentGroupSize = this.players.length;
            return true;
        } else {
            return "The game is currently full"
        }
    }
    // >>>> 2. Removing players
    removePlayer(playerName){
        this.players = this.players.filter(name => name !== playerName);
        this.currentGroupSize = this.players.length;
    }

    // >>>>> Game Settings Management <<<<<

    // >>>> 3. Toggle Game Privacy
    setPrivacy(){
        this.private = !this.private;
    };

    // >>>> 4. Toggle Game Privacy
    setJoinCode(password){
        this.joinCode = password;
    }
    // >>>>> In Game Logic Settings (Scoring / Categories / Chameleon)<<<<<

  }


  //TEST

//   const game = new GameInstance('Jordan', 5);

//   game.addPlayer(generatePlayerId(), 'Jordan');
//   game.addPlayer(generatePlayerId(), 'Lils');
//   game.addPlayer(generatePlayerId(),'Bubba')
// //game.removePlayer('Lils')

//   console.log(game)



//Generates playerId
export default function generatePlayerId() {
    return Math.random().toString(24).substr(2, 8);
}



  module.exports = GameInstance;