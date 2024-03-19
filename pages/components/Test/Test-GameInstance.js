const testGameObj = {
    host: "Jordan",
    players: ["Host", "Player 2", "Player 3", "Player 4" ],
    maxGroupSize: 4,
    private: true,
    joinCode: undefined,
    gameSettings: {
          think_time: 60,
          type_time: 60,
          debate_time: 60,
          chameleon_count: 1,
          chameleon_hint: true
      },
    scores: []  
  }

  testGameObj.currentGroupSize = testGameObj.players.length

  export { testGameObj };