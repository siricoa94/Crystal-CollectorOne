var randomNumber = 0;
var crystalNumber = 0;
var score = 0;
var redCrystal = 0;
var blueCrystal = 0;
var greenCrystal = 0;
var yellowCrystal = 0;

var win = 0;
var loss = 0;
min = 12;
max = 120;
// when the document is ready or first opened, these objects will be given the values of the equations they are equal to.
$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#rngGenerator").text("The number to match is: " + randomNumber);
    var redCrystal = Math.floor(Math.random() * 12) + 1;
    var blueCrystal = Math.floor(Math.random() * 12) + 1;
    var greenCrystal = Math.floor(Math.random() * 12) + 1;
    var yellowCrystal = Math.floor(Math.random() * 12) + 1;
// function to reset var values on each round.
    function resetGame() {
        yellowCrystal = Math.floor(Math.random() * 12) + 1;
        blueCrystal = Math.floor(Math.random() * 12) + 1;
        greenCrystal = Math.floor(Math.random() * 12) + 1;
        redCrystal = Math.floor(Math.random() * 12) + 1;
        randomNumber = Math.floor(Math.random() * 102) + 19;
        score = 0;
        $("#rngGenerator").text("The number to match is: " + randomNumber);
        
    }



// on click function for the red crystal that adds the value of red crystal 
// to the score and then displays it on the total score display. Then if the score is equal to 
// the random Number generated, it will incriment a win and display a win message.
// if the player loses, the loss will be incrimented and a loss message will be displayed.
// repeat these instructions for each new crystal color.
    $("#redCrystal").on("click", function () {

        score = redCrystal + score
        $("#totalScoreDisplay").text(score)

        if (score == randomNumber) {
            win++
            $("#win").text("Wins: " + win)
            $("#totalScoreDisplay").text("YOU WIN!!! Click a crystal to play again!")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);
            }
        }
        if (score > randomNumber) {
            loss++
            $("#loss").text("Losses: " + loss)
            // write losses to page
            $("#totalScoreDisplay").text("YOU LOSE!!! Click a crystal to play again!")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);  
            }
        }


    })

    $("#blueCrystal").on("click", function () {

        score = blueCrystal + score
        $("#totalScoreDisplay").text(score)
        if (score == randomNumber) {
            win++
            $("#win").text("Wins: " + win)
            $("#totalScoreDisplay").text("YOU WIN!!! Click a crystal to play again!")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);  
            }
        }
        if (score > randomNumber) {
            loss++
            $("#loss").text("Losses: " + loss)
            $("#totalScoreDisplay").text("YOU LOSE!!! Click a crystal to play again!")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);  
            }
        }

    })

    $("#greenCrystal").on("click", function () {

        score = greenCrystal + score
        $("#totalScoreDisplay").text(score)

        if (score == randomNumber) {
            win++
            $("#win").text("Wins: " + win)
            $("#totalScoreDisplay").text("YOU WIN!!! Click a crystal to play again!")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);
            }
        }
        if (score > randomNumber) {
            loss++
            $("#loss").text("Losses: " + loss)
            $("#totalScoreDisplay").text("YOU LOSE!!! Click a crystal to play again!")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);
            }
        }

    })

    $("#yellowCrystal").on("click", function () {

        score = yellowCrystal + score
        $("#totalScoreDisplay").text(score)

        if (score == randomNumber) {
            win++
            $("#win").text("Wins: " + win)
            $("#totalScoreDisplay").text("YOU WIN!!! Click a crystal to play again!")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);
            }
        }
        if (score > randomNumber) {
            loss++
            $("#loss").text("Losses: " + loss)
            $("#totalScoreDisplay").text("YOU LOSE!!! Click a crystal to play again!")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);
            }
        }

    })

});