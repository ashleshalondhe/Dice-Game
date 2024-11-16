// Store player names
let player1 = "";
let player2 = "";

// Start the game by showing the game section if names are entered
function startGame() {
    player1 = document.getElementById("player1-name").value.trim();
    player2 = document.getElementById("player2-name").value.trim();

    if (player1 === "" || player2 === "") {
        alert("Please enter names for both players!");
        return;
    }

    document.querySelector(".player1-name-display").textContent = player1;
    document.querySelector(".player2-name-display").textContent = player2;

    document.querySelector(".input-section").classList.add("hidden");
    document.querySelector(".game-section").classList.remove("hidden");
}

// Roll the dice and determine the winner
function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src", "image/d1.svg");
    diceNum2.setAttribute("src", "image/d1.svg");

    let result = document.getElementById("result");
    result.textContent = "Rolling...";

    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute('src', `image/d${randomNumber1}.svg`);
        diceNum2.setAttribute('src', `image/d${randomNumber2}.svg`);

        if (randomNumber1 === randomNumber2) {
            result.textContent = "It's a Draw!";
        } else if (randomNumber1 < randomNumber2) {
            result.textContent = `${player2} Wins! 🎉`;
        } else {
            result.textContent = `${player1} Wins! 🎉`;
        }
    }, 1500);
}
