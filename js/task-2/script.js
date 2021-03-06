var randomNumber = Math.floor(Math.random() * 100) + 1;
    var guesses = document.querySelector('.guesses');
    var lastResult = document.querySelector('.lastResult');
    var lowOrHi = document.querySelector('.lowOrHi');
    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');
    var guessCount = 1;
    var resetButton;

    function checkGuess() {
      var userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = 'Предыдущие догадки: ';
      }

      guesses.textContent += userGuess + ' ';

      if (userGuess === randomNumber) {
        lastResult.textContent = 'Вас можно поздравить! Вы это сделали!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = '!!!Игра окончена!!!';
        lowOrHi.textContent = '';
        setGameOver();
      } else {
        lastResult.textContent = 'Вы сделали неправильный ход!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          lowOrHi.textContent='Последнее предположение было слишком низким!' ;
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Последнее предположение было слишком высоким!';
        }
      }

      guessCount++;
      guessField.value = '';
    }

    guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Старт новой игры';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
      guessCount = 1;
      var resetParas = document.querySelectorAll('.resultParas p');
      for(var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent='';
      }

      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value='';
      guessField.focus();
      lastResult.style.backgroundColor='white';
      randomNumber=Math.floor(Math.random() * 100) + 1;
    }