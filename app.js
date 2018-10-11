var alphabet = "abcdefghijklmnopqrstuvwxyz"
var wordArray = ["death", "skull", "goats", "sacrifice", "seance", "satan", "baphomet", "hell", "lucifer"]
var underScoreArray = []
var lose = 0
var win = 0
var stupid = 0
randomWord = Math.floor(Math.random() * wordArray.length);
randomWord = wordArray[randomWord];
console.log(randomWord);

const pageWord = $('.word')
const keyboard = $('.keyboard')

for (var i = 0; i < alphabet.length; i++) {
    const letter = document.createElement('div')
    letter.setAttribute('id', alphabet[i])
    letter.innerHTML = alphabet[i]
    keyboard.append(letter)
    usersChoice(letter)
}

for (var i = 0; i < randomWord.length; i++) {
    underScoreArray.push("_")
}

pageWord.append(underScoreArray.join(''))

function usersChoice(letter) {
    letter.addEventListener("click", function(event) {
        this.remove()
        compare(this.id)
    })
}

function compare(choice) {
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === choice) {
            win++
            stupid = 0
            underScoreArray[i] = choice
            pageWord.html(underScoreArray.join(''))
            winLose()
        } else if (randomWord[i] !== choice) {
            stupid++
        }
    }
    if (stupid >= randomWord.length) {
        lose++
        stupid = 0
        winLose()
    }
}

function winLose() {
    if (lose >= 6) {
        alert("YOURE DONE YOU FUCKING LOSER")
    } else if (win === randomWord.length) {
        alert("You won!")
    }
}




