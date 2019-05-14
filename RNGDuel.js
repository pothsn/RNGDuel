runRNGDuel();
function runRNGDuel (){
	alert("Welcome to RNG Duel!");
	let playerOne = "Player One";
	let playerTwo = "Player Two";
	// alert("Roll stats for Player One.");
	let playerOneAttack = rollAttack(playerOne);
	console.log("Player One attack: " + playerOneAttack);
	let playerOneHealth = rollHealth(playerOne);
	console.log("Player One health: " + playerOneHealth);
	let playerOneAccuracy = rollAccuracy(playerOne);
	console.log("Player One accuracy: " + playerOneAccuracy);
	let playerOneStats = {
		aP: (playerOneAttack),
		hP: (playerOneHealth),
		aCC: (playerOneAccuracy)
	}
	let playerTwoAttack = rollAttack(playerTwo);
	console.log("Player Two attack: " + playerTwoAttack);
	let playerTwoHealth = rollHealth(playerTwo);
	console.log("Player Two health: " + playerTwoHealth);
	let playerTwoAccuracy = rollAccuracy(playerTwo);
	console.log("Player Two accuracy: " + playerTwoAccuracy);
	let playerTwoStats = {
		aP: (playerTwoAttack),
		hP: (playerTwoHealth),
		aCC: (playerTwoAccuracy)
	}
	let selectedField = battlefield();
	let fieldStats = battlefieldAdjustment(playerOneStats, playerTwoStats);


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
function battlefieldAdjustment(player){

}
function attackRoll(){
	roll(1,10);
}




























