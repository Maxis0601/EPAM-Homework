function randInt(min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
}
		
function clearGame(){
	var pageNumberUser = document.getElementById("numberUser");
	var gameHistoryUser = document.getElementById("list-logsUser");
	pageNumberUser.innerHTML = 0;
	gameHistoryUser.innerHTML = "<li value=0>Игра ещё не началась!</li>";
	var pageNumberComputer = document.getElementById("numberComputer");
	var gameHistoryComputer = document.getElementById("list-logsComputer");
	pageNumberComputer.innerHTML = 0;
	gameHistoryComputer.innerHTML = "<li value=0>Игра ещё не началась!</li>";
}
				
function newGame() {
	clearGame();
	var compNumber = randInt(0,100);
	//alert(compNumber);
	var userNumber;
	var computerNumber;
	var pageNumberUser = document.getElementById("numberUser");
	var gameHistoryUser = document.getElementById("list-logsUser");
	var gameHintUser = document.getElementsByClassName("hintUser")[0];
	var pageNumberComputer = document.getElementById("numberComputer");
	var gameHistoryComputer = document.getElementById("list-logsComputer");
	var gameHintComputer = document.getElementsByClassName("hintComputer")[0];
	var endGameUser = false;
	var endGameComputer = false;
	
	while (!endGameUser) {
		userNumber = -1;
		userNumber = prompt("Введите число:", userNumber);
		userNumber = Number(userNumber);
		pageNumberUser.innerHTML = +pageNumberUser.innerHTML + 1;

		var newMoveUser = document.createElement("li");

		newMoveUser.innerHTML = "Ваш ход - " + userNumber;
		gameHistoryUser.appendChild(newMoveUser);
				
		if (compNumber === userNumber){
			//alert("Угадал!");
			gameHintUser.style.color = "#fa5858";
			gameHintUser.innerHTML = "Поздравляю! Ты угадал моё число!";  
			endGameUser = true;
		} else if (compNumber > userNumber) {
				//	alert("Больше!");
					gameHintUser.style.color = "#fa5858";
					gameHintUser.innerHTML = "Больше!"
		} else {
				//	alert("Меньше!");
			gameHintUser.style.color = "#0080ff";
			gameHintUser.innerHTML = "Меньше!"	
		}

		
	}

	while (!endGameComputer) {
		computerNumber = randInt(0,100);
	
		pageNumberComputer.innerHTML = +pageNumberComputer.innerHTML + 1;

		var newMoveComputer = document.createElement("li");

		newMoveComputer.innerHTML = "Ваш ход - " + computerNumber;
		gameHistoryComputer.appendChild(newMoveComputer);
				
		if (compNumber === computerNumber){
			//alert("Угадал!");
			gameHintComputer.style.color = "#fa5858";
			gameHintComputer.innerHTML = "Поздравляю! Ты угадал моё число!";  
			endGameComputer = true;
		}
	}
}
