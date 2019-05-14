runRNGDuel();
function runRNGDuel (){
	console.log("Welcome to RNG Duel!");
	let playerOneAttack = rollAttack();
	let playerOneHealth = rollHealth();
	let playerOneAccuracy = rollAccuracy();
	let playerOne = {
		aP: playerOneAttack,
		hP: playerOneHealth,
		aCC: playerOneAccuracy,
		playerNumber: 1,
		name: "Player One"
	}
	console.log("Player One attack: " + (playerOne.aP),"Player One health: " + (playerOne.hP), "Player One accuracy: " + (playerOne.aCC));
	let playerTwoAttack = rollAttack();
	let playerTwoHealth = rollHealth();
	let playerTwoAccuracy = rollAccuracy();
	let playerTwo = {
		aP: playerTwoAttack,
		hP: playerTwoHealth,
		aCC: playerTwoAccuracy,
		playerNumber: 2,
		name: "Player Two"
	}
	console.log("Player Two attack: " + (playerTwo.aP), "Player Two health: " + (playerTwo.hP), "Player Two accuracy: " + (playerTwo.aCC));
	
	let selectedField = battlefield();
	playerOne = battlefieldAdjustment(playerOne, selectedField);
	playerTwo = battlefieldAdjustment(playerTwo, selectedField);
	console.log("Player One attack: " + (playerOne.aP), "Player One health: " + (playerOne.hP), "Player One accuracy: " + (playerOne.aCC));
	console.log("Player Two attack: " + (playerTwo.aP), "Player Two health: " + (playerTwo.hP), "Player Two accuracy: " + (playerTwo.aCC));
	
	let firstAttacker = firstAttackRoll(playerOne, playerTwo);
	console.log(firstAttacker.name + " will attack first.");

	let secondAttacker;

	if(firstAttacker.playerNumber === 1) {
		secondAttacker = playerTwo;
	}
	else {
		secondAttacker = playerOne;
	}
	
	let attack = selectAttack(firstAttacker);
	attackTypeAdjust(firstAttacker, attack);
	console.log("Attack will have " + firstAttacker.aP + " attack power and ", firstAttacker.aCC + " accuracy.")

	attackSuccess(firstAttacker);




}



function roll(min, max){
	return Math.floor(Math.random() * (max - min) ) + min;
}
function rollAttack(){
	let baseAttack = 10;
	let attackRoll = roll(1, 8);
	let totalAttack = baseAttack + attackRoll;
	return totalAttack;
}
function rollHealth(){
	let baseHealth = 25;
	let healthRoll = roll(1, 20);
	let totalHealth = baseHealth + healthRoll;
	return totalHealth;
}
function rollAccuracy(){
	let baseAccuracy = 3;
	let accuracyRoll = roll(1, 6);
	let totalAccuracy = baseAccuracy + accuracyRoll;
	return totalAccuracy
}
function battlefield(){
	let field = roll(1,4);
	switch (field){
		case 1:
			console.log("The field is clear, no change to player stats.");
			return "clear";
		case 2:
		console.log("The field is rainy, accuracy has been reduced.");
			return "rainy";
		case 3:
			console.log("The field is a harsh desert, attack has been reduced.");
			return "desert";		
		case 4:
			console.log("The field is a frozen wasteland, health has been reduced.");
			return "frozen";
	}
}
function battlefieldAdjustment(playerStats, fieldSelection){
	switch (fieldSelection){
		case "clear":
			break;
		case "rainy":
			playerStats.aCC -= 1;
			// playerStats.aCC = playerStats.aCC - 10;
			break;
		case "desert":
			playerStats.aP -= 5;
			break;
			//playerStats.aP = playerStats.aP - 5;
		case "frozen":
			playerStats.hP -= 10;
			//playerStats.aP = playerStats.hP - 10;
			break;
		}
			return playerStats;
}
function firstAttackRoll(firstPlayer, secondPlayer){
	let firstPlayerRoll = roll(1, 12);
	let secondPlayerRoll = roll(1, 12);
		if(firstPlayerRoll > secondPlayerRoll){
			return firstPlayer;
			}
			if(firstPlayerRoll < secondPlayerRoll){
				return secondPlayer;
			}
			else{
				return firstAttackRoll(firstPlayer,secondPlayer);
			}
		}
function selectAttack(attacker){
	let selectedAttack = prompt("Enter attack type: Measured, Heavy or Regular");
	return selectedAttack
}		
function attackTypeAdjust(attacker, attack){
	switch (attack){
		case "Measured":
			attacker.aCC += 5;
			attacker.aP -= 12;
			break;
		case "Heavy": 
			attacker.aP += 6;
			attacker.aCC -= 2;
			break;
		case "Regular":
			break;
	}
		return attacker;
}
function attackSuccess(attacker){
	let hitRoll = roll(1, 10);
	if(hitRoll <= attacker.aCC){
		console.log("The attack hit!")
	}
	else{
		console.log("The attack missed!")
	}
}

























