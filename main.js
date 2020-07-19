new Vue({
    el: '#app',
    data: {
      text: 'Welcome to the game!',
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      turns: [],
      splAtkCount: 3
    },
    methods: {
        startGame(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.splAtkCount = 3;
            this.turns = [];
        },
        attack(){
            if(this.monsterHealth <= 0 || this.playerHealth <= 0){
                this.winner();
            }
            else{
                var atk = 0;
                atk = this.randomNum(10, 3);
                //console.log(atk);
                this.damage(atk);
                this.logAttacking(true, atk);
            }
        },
        specialAttack(){
            //if(this.monsterHealth <= 0 || this.playerHealth <= 0){
                this.winner();
            //}
            //else{
                if(this.splAtkCount > 0){
                    var splAtk = 0;
                    splAtk = this.randomNum(15, 8);
                    console.log(splAtk);
                    this.damage(splAtk);
                    this.splAtkCount -= 1;
                    this.logSplAttack(true, splAtk);
                }
                else{
                    return;
                }
                
            //}
        },
        heal(){
            var x = 0;
            x = this.randomNum(15, 8);
            if(this.playerHealth < 92 && this.playerHealth > 0){
                this.playerHealth += x;
                this.monAttack();
                this.logHeal(x);
            }
        },
        giveUp(){
            this.gameIsRunning = false;
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
            monAtk = this.randomNum(12, 4);
            if(this.playerHealth < monAtk){
                this.playerHealth = 0;
                this.winner();
                this.logMonsterAttack(false, this.playerHealth);
            }
            else{
                this.playerHealth -= monAtk;
                this.logMonsterAttack(false, monAtk);
            }
        },
        randomNum(max, min){
            let ran = 0;
            ran = Math.floor(Math.random() * (max - min) + min);
            return ran;
        },
        winner(){
            if(this.playerHealth === 0 && this.monsterHealth === 0)
            {
                gameIsRunning = false;
                alert("It's a Tie");
            }
            else if(this.playerHealth <=0 ){
                gameIsRunning = false;
                alert('Monster wins');
            }
            else if(this.monsterHealth <= 0){
                gameIsRunning = false;
                alert('You win!');
            }
        },
        logAttacking(isPlayer, atk){
            this.turns.unshift({
                isPlayer: isPlayer,
                text: 'Player hits Monster for ' + atk + ' damage.'
            });
        },
        logSplAttack(isPlayer, splAtk){
            this.turns.unshift({
                isPlayer: isPlayer,
                text: 'Player hits Monster hard for ' + splAtk + ' damage.'
            });
        },
        logMonsterAttack(isPlayer, monAtk){
            this.turns.unshift({
                isPlayer: isPlayer,
                text: 'Monster hits Player for ' + monAtk + ' damage.'
            });
        },
        logHeal(x){
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for ' + x
            })
        }
    },
});