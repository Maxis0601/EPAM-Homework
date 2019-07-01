
function* fibo(user) {
  	var a,b,c;
    if (user.flag == 'yes'){
        [a,b] = [0, 1] 
        while (true) {
            yield a;
            [a,b] = [b, a + b];
        }
    } else {
        [a, b] = [0, -1]
        while (true) {
          yield a;
          [a,b] = [b, a - b];
        }
    }
   
}


do {

  var user = {
      n: prompt("Введите число:"),
      flag: prompt("Выберете направление, yes - положительное, остальные варианты отрецательное")
  }


  var fib = fibo(user);

	for (let i = 0; i < user.n; i++) {
  		console.log(fib.next().value);
	}

	g = prompt("Хотите продолжить работу?", 'yes')
} while (g === 'yes')


