runRNGDuel();
function runRNGDuel (){
	console.log("Welcome to RNG Duel!");
	let playerOne = "Player One";
	let playerTwo = "Player Two";
	let playerOneAttack = rollAttack(playerOne);
	let playerOneHealth = rollHealth(playerOne);
	let playerOneAccuracy = rollAccuracy(playerOne);
	let playerOneStats = {
		aP: (playerOneAttack),
		hP: (playerOneHealth),
		aCC: (playerOneAccuracy)
	}
	console.log("Player One attack: " + (playerOneStats.aP), "Player One health: " + (playerOneStats.hP), "Player One accuracy: " + (playerOneStats.aCC));
	let playerTwoAttack = rollAttack(playerTwo);
	let playerTwoHealth = rollHealth(playerTwo);
	let playerTwoAccuracy = rollAccuracy(playerTwo);
	let playerTwoStats = {
		aP: (playerTwoAttack),
		hP: (playerTwoHealth),
		aCC: (playerTwoAccuracy)
	}
	console.log("Player Two attack: " + (playerTwoStats.aP), "Player Two health: " + (playerTwoStats.hP), "Player Two accuracy: " + (playerTwoStats.aCC));
	let selectedField = battlefield();
	playerOneStats = battlefieldAdjustment(playerOneStats, selectedField);
	playerTwoStats = battlefieldAdjustment(playerTwoStats, selectedField);
	console.log("Player One attack: " + (playerOneStats.aP), "Player One health: " + (playerOneStats.hP), "Player One accuracy: " + (playerOneStats.aCC));
	console.log("Player Two attack: " + (playerTwoStats.aP), "Player Two health: " + (playerTwoStats.hP), "Player Two accuracy: " + (playerTwoStats.aCC));
	let firstAttacker = attackRoll(playerOne, playerTwo);
	console.log(firstAttacker);


}



function roll(min, max){
	return Math.floor(Math.random() * (max - min) ) + min;
}
function rollAttack(player){
	let baseAttack = 10;
	let attackRoll = roll(1, 8);
	let totalAttack = baseAttack + attackRoll;
	return totalAttack;
}
function rollHealth(player){
	let baseHealth = 25;
	let healthRoll = roll(1, 20);
	let totalHealth = baseHealth + healthRoll;
	return totalHealth;
}
function rollAccuracy(player){
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
function attackRoll(firstPlayer, secondPlayer){
	let firstPlayerRoll = roll(1, 12);
	let secondPlayerRoll = roll(1, 12);
		if(firstPlayerRoll > secondPlayerRoll){
			return firstPlayer;
			}
			if(firstPlayerRoll < secondPlayerRoll){
				return secondPlayer;
			}
			else{
				attackRoll(firstPlayer,secondPlayer);
				return;
			}
		}



























