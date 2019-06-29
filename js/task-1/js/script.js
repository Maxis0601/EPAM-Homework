
function* fibo() {
  	[a, b] = [0, 1]
  	while (true) {
    	yield a;
    	[a, b] = [b, a + b]
  	}
}


do {
	var n = prompt("Введите число:")

	var fib = fibo();



	for (let i = 0; i < n; i++) {
  		console.log(fib.next().value);
	}

	g = prompt("Хотите продолжить работу?", 'yes')
} while (g === 'yes')


