function pickWord(){
    words = ["деньги", "пропаганда", "мстительность"];
    return Math.floor(Math.random*words.length));
}
var word = pickWord();

function setupAnswerArray(word){
    var arr = [];
    for (var i =0; i<word.length;i++){
        arr.push("_");
    }
}
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
while (remainingLetters > 0) {
showPlayerProgress(answerArray);
// guess: ответ игрока
var guess = getGuess();
if (guess === null) {
break;
} else if (guess.length !== 1) {
alert("Пожалуйста, введите одиночную букву.");
} else {
// correctGuesses: количество открытых букв
var correctGuesses = updateGameState(guess, word,
answerArray);
remainingLetters -= correctGuesses;
}
}
showAnswerAndCongratulatePlayer(answerArray);