window.onload = function() {

    var wins = 0;
    var remGuesses = 9;
    var lettersGuessed = [];

    var words = ['mario', 'contra', 'nintendo', 'peach', 'zelda', 'link', 'megaman', 'pacman', 'galaga', 'fox', ''];

    var curWord = words[Math.floor(Math.random() * words.length)].toLowerCase();;
    console.log(curWord);

    var activeWord = [];
    for (var i = 0; i < curWord.length; i++) {
        activeWord[i] = "_";
    }
    console.log(activeWord);
    console.log(curWord);

    var remainingLetters = curWord.length;
    console.log(remainingLetters);

    document.querySelector('#wins').innerHTML = "Wins:<br>" + wins;

    document.querySelector('#remaining-guesses').innerHTML = "Remaining guesses:<br>" + remGuesses;

    document.querySelector('#current-word').innerHTML = "Your Guess:<br>" + activeWord.join(" ");


    function resetGame() {

        wins = 0;
        remGuesses = 9;
        lettersGuessed = [];
        curWord = chars[Math.floor(Math.random() * chars.length)].toLowerCase();;
        console.log(curWord);

        activeWord = [];

        for (var i = 0; i < curWord.length; i++) {
            activeWord[i] = "_";
        }
        console.log(activeWord);
        console.log(curWord);

        remainingLetters = curWord.length;
        console.log(remainingLetters);

        document.querySelector('#wins').innerHTML = "Wins:<br>" + wins;

        document.querySelector('#remaining-guesses').innerHTML = "Remaining guesses:<br>" + remGuesses;

        document.querySelector('#current-word').innerHTML = "Your Guess:<br>" + activeWord.join(" ");

        document.querySelector('#current-word').innerHTML = "Your Guess:<br>" + activeWord.join(" ");
    }

    document.onkeyup = function(event) {

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);

        for (var j = 0; j < curWord.length; j++) {
            if (curWord.charAt(j) === userGuess) {
                activeWord[j] = userGuess;
                remainingLetters--;
                console.log(remainingLetters);
                document.querySelector('#current-word').innerHTML = "Your Guess:<br>" + activeWord.join(" ");
            }
        }

        if (!curWord.includes(userGuess) && lettersGuessed.includes(userGuess)) {
            document.querySelector('#letters-guessed').innerHTML = "Letters already guessed:<br>" + lettersGuessed.join(", ");
        }

        for (var k = 0; k < curWord.length; k++) {
            if (!curWord.includes(userGuess)) {
                lettersGuessed.push(userGuess)
                remGuesses--;
                break;
            }
        }


        if (remainingLetters === 0) {
            alert("Congratulations!  But the princess is in another castle.");
            setTimeout(resetGame(), 3000);
        } else if (remGuesses === 0) {
            alert("Game Over");
            setTimeout(resetGame(), 3000);
        }

        document.querySelector('#remaining-guesses').innerHTML = "Remaining guesses:<br>" + remGuesses;

        document.querySelector('#letters-guessed').innerHTML = "Letters already guessed:<br>" + lettersGuessed.join(", ");
    }

}