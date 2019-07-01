var randomNumber = 0;
var crystalNumber = 0;
var score = 0;
var redCrystal = 0;
var blueCrystal = 0;
var greenCrystal = 0;
var yellowCrystal = 0;

win = undefined;
loss = undefined;
min = 12;
max = 120;

$(document).ready(function(){
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#rngGenerator").text("The number to match is: " + randomNumber);
    var redCrystal = Math.floor(Math.random()*12)
    
   

    
    $("#redCrystal").on("click", function(){
        
        $('#totalScoreDisplay').text(redCrystal);
        
      })
      $("#blueCrystal").on("click", function(){
        var blueCrystal = Math.floor(Math.random()*12)
        $('#totalScoreDisplay').text(blueCrystal);
        
      })
    
});