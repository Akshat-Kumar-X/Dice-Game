const button = document.getElementById('button');

button.addEventListener('click', function() {

    button.innerHTML = "Reroll";

    var num1 = Math.floor(Math.random() * 6 + 1);
    var num2 = Math.floor(Math.random() * 6 + 1);


    if (num1 === 1) {
        document.querySelector(".dice-1").setAttribute("src", "Images/dice1.png");
    } else if (num1 === 2) {
        document.querySelector(".dice-1").setAttribute("src", "Images/dice2.png");
    } else if (num1 === 3) {
        document.querySelector(".dice-1").setAttribute("src", "Images/dice3.png");
    } else if (num1 === 4) {
        document.querySelector(".dice-1").setAttribute("src", "Images/dice4.png");
    } else if (num1 === 5) {
        document.querySelector(".dice-1").setAttribute("src", "Images/dice5.png");
    } else if (num1 === 6) {
        document.querySelector(".dice-1").setAttribute("src", "Images/dice6.png");
    }

    if (num2 === 1) {
        document.querySelector(".dice-2").setAttribute("src", "Images/dice1.png");
    } else if (num2 === 2) {
        document.querySelector(".dice-2").setAttribute("src", "Images/dice2.png");
    } else if (num2 === 3) {
        document.querySelector(".dice-2").setAttribute("src", "Images/dice3.png");
    } else if (num2 === 4) {
        document.querySelector(".dice-2").setAttribute("src", "Images/dice4.png");
    } else if (num2 === 5) {
        document.querySelector(".dice-2").setAttribute("src", "Images/dice5.png");
    } else if (num2 === 6) {
        document.querySelector(".dice-2").setAttribute("src", "Images/dice6.png");
    }

    if (num1 > num2) {
        document.querySelector(".result h5").innerHTML = "Player 1 Won!";
    } else if (num1 < num2) {
        document.querySelector(".result h5").innerHTML = "Player 2 Won!";
    } else {
        document.querySelector(".result h5").innerHTML = "Wow That's Rare";
    }
});