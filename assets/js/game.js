var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

    if(promptFight.toLowerCase() == "fight") {
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + (enemyHealth -= playerAttack) + " health remaining.");
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!")
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + (playerHealth -= enemyAttack) + " health remaining.");
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!")
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight.toLowerCase() == "skip") {
        var confirmSkip = window.confirm("ARe you sure you'd like to quit?");

        if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney -= 2;
        }
        else {
            fight();
        }
    }

};

fight();