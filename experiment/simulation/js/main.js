let words = [];
let score = 0;

const wordBox = document.getElementById("wordBox");
const inputBox = document.getElementById("inputBox");
const textBoxes = document.getElementById("textBoxes");
const submitButton = document.getElementById("submit");
const scoreDisplay = document.getElementById("scoreDisplay");
const resetButton = document.getElementById("resetButton");

document.getElementById("startButton").addEventListener("click", function() {
    const numWords = parseInt(document.getElementById("numWords").value);
    if (numWords <= 0 || isNaN(numWords)) {
        alert("Please enter a valid number of words.");
        return;
    }

    const wordList = ["apple", "banana", "cherry", "grape", "kiwi", "lemon", "orange", "pear", "pineapple", "strawberry"];
    for (let i = 0; i < numWords; i++) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        words.push(wordList[randomIndex]);
    }

    wordBox.innerHTML = words.join(", ");
    wordBox.classList.remove("hidden");
    setTimeout(function() {
        wordBox.classList.add("hidden");
        inputBox.classList.remove("hidden");
        for (let i = 0; i < numWords; i++) {
            const textBox = document.createElement("input");
            textBox.type = "text";
            textBoxes.appendChild(textBox);
        }
    }, 5000);
});

submitButton.addEventListener("click", function() {
    calculateScore();
    inputBox.classList.add("hidden");
    scoreDisplay.innerHTML = `Score: ${score} out of ${words.length}`;
    scoreDisplay.classList.remove("hidden");
    resetButton.classList.remove("hidden");
});

resetButton.addEventListener("click", function() {
    words = [];
    score = 0;
    wordBox.innerHTML = "";
    textBoxes.innerHTML = "";
    scoreDisplay.innerHTML = "";
    wordBox.classList.add("hidden");
    inputBox.classList.add("hidden");
    scoreDisplay.classList.add("hidden");
    resetButton.classList.add("hidden");
});

function calculateScore() {
    for (let i = 0; i < words.length; i++) {
        const input = textBoxes.children[i].value.toLowerCase();
        if (input == words[i]) {
            score++;
        }
    }
}
