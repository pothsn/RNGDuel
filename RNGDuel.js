runRNGDuel();
function runRNGDuel (){
	alert("Welcome to RNG Duel!");
	let playerOne
	let playerTwo
	alert("Roll stats for Player One.");
	let playerOneAttack = rollAttack(playerOne);
	console.log("Player One attack: " + playerOneAttack);
	let playerOneHealth = rollHealth(playerOne);
	console.log("Player One health: " + playerOneHealth);
	let playerOneAccuracy = rollAccuracy(playerOne);
	console.log("Player One accuracy: " + playerOneAccuracy);
	alert("Roll stats for (playerTwo).");
	let playerTwoAttack = rollAttack(playerTwo);
	console.log("Player Two attack: " + playerTwoAttack);
	let playerTwoHealth = rollHealth(playerTwo);
	console.log("Player Two health: " + playerTwoHealth);
	let playerTwoAccuracy = rollAccuracy(playerTwo);
	console.log("Player Two accuracy: " + playerTwoAccuracy);

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
	roll(1,4);
	if (roll = 1){
		alert("The field is clear, no change to player stats.");
	}
	if (roll = 2){
		alert("The field is rainy, accuracy has been reduced.");
		totalAccuracy += totalAccuracy - 1;
		return playerOneAccuracy;
	}
	if (roll == 3){
		alert("The field is a harsh desert, attack has been reduced.");
		totalAttack += totalAttack - 5;
		return totalAttack;
	}
	if (roll = 4){
		alert("The field is a frozen wasteland, health has been reduced.");
		totalHealth += totalHealth - 10;
		return totalHealth
	}
}
function battlefieldAdjustment(){

}
function attackRoll(){
	roll(1,10);
}




























