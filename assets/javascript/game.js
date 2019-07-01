var randomNumber = 0;
var crystalNumber = 0;
var score = 0;
var redCrystal = 0;
var blueCrystal = 0;
var greenCrystal = 0;
var yellowCrystal = 0;
var operatorSelected = false;
win = undefined;
loss = undefined;

$(document).ready(function(){
    
    $("#rngGenerator").ready(function() {
        var randomNumber = Math.floor(Math.random() * 100) + 12;
        $("#rngGenerator").text("The number to match is: " + randomNumber);
        
        console.log(randomNumber)

    });
    $('#redCrystal').on("click", function(){
        operatorSelected = true;
        var redCrystal = Math.floor(Math.random()*12)
        $('#totalScoreDisplay').text(redCrystal);
        
      })
    
})