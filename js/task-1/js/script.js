
function* generator(user) {
	var a, b, start = 0, sum; 
	if (user.flag === 'yes'){
		yield start;
		a = 1;
		b = 1;
		yield a;
		yield b;
		for(var i = 3; i <= user.n; i++){
			sum = a + b;
			a = b;
			b = sum;
			yield b;
		}
	} 
	else {
		a = 1;
		b = -1;
		yield start;
		yield a;
		yield b;
		for(var i = 3; i <= user.n; i++){
			sum = a - b;
			a = b;
			b = sum;
			yield b;
		}
	}
	
	
}



do {
	
	var user = {
		n: prompt("Введите число:", 7),
		flag: prompt("Введите направления ряда: yes - положительные, другие отрицательные", 'yes')
	}

	var sequence = [...generator(user)];

	alert (sequence); 

	g = prompt("Хотите продолжить работу?", 'yes')
} while (g === 'yes')


