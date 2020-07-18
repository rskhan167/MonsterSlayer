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
        },
        attack(){
            if(this.monsterHealth <= 0 || this.playerHealth <= 0){
                this.winner();
            }
            else{  
                var atk = 0;
                atk = this.randomNum(10, 3);
                console.log(atk);
                this.damage(atk);
            }
        },
        specialAttack(){
            if(this.monsterHealth <= 0 || this.playerHealth <= 0){
                this.winner();
            }
            else{
                var splAtk = 0;
                splAtk = this.randomNum(15, 8);
                console.log(splAtk);
                this.damage(splAtk);
            }
        },
        heal(){
            if(this.playerHealth < 92 && this.playerHealth > 0){
                this.playerHealth += this.randomNum(8, 3);
            }
        },
        giveUp(){
            gameIsRunning = false;
        },
        damage(dam) {
            if(this.monsterHealth < dam){
                this.monsterHealth = 0;
                this.monAttack();
                this.winner();
            }
            else{
                this.monsterHealth -= dam;
                this.monAttack();
            }
        },
        monAttack(){
            var monAtk = 0;
            monAtk = this.randomNum(12, 5);
            if(this.playerHealth < monAtk){
                this.playerHealth = 0;
                this.winner();
            }
            else{
                this.playerHealth -= monAtk;
            }
        },
        randomNum(max, min){
            let ran = 0;
            ran = Math.floor(Math.random() * (max - min) + min);
            return ran;
        },
        winner(){
            gameIsRunning = false;
            if(this.playerHealth === 0 && this.monsterHealth === 0)
            {
                alert("It's a Tie");
            }
            else if(this.playerHealth <=0 ){
                alert('Monster wins');
            }
            else if(this.monsterHealth === 0){
                alert('You win!');
            }
        }
    },
});