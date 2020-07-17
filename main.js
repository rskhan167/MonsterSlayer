new Vue({
    el: '#app',
    data: {
      text: 'Welcome to the game!',
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      turns: []
    },
    methods: {
        startGame(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        }

    }
});