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
    var redCrystal = Math.floor(Math.random()*12)+1;
    var blueCrystal = Math.floor(Math.random()*12)+1;
    var greenCrystal = Math.floor(Math.random()*12)+1;
    var yellowCrystal = Math.floor(Math.random()*12)+1;
    
   

    
    $("#redCrystal").on("click", function(){
        
        $('#totalScoreDisplay').text(redCrystal);
        if (score < randomNumber) {
            score = redCrystal + score 
            $("#totalScoreDisplay").text(score)

        } else if(score == randomNumber){
            $("#totalScoreDisplay").text("YOU WIN!!!")
        } else {
            $("#totalScoreDisplay").text("YOU LOSE SUCKER!!!")
        }
              
      })
      $("#blueCrystal").on("click", function(){
        
        $('#totalScoreDisplay').text(blueCrystal);
        if (score < randomNumber) {
            score = blueCrystal + score 
            $("#totalScoreDisplay").text(score)

        } else if(score == randomNumber){
            $("#totalScoreDisplay").text("YOU WIN!!!")
        } else {
            $("#totalScoreDisplay").text("YOU LOSE SUCKER!!!")
        }
        
      })
      $("#greenCrystal").on("click", function(){
        
        $('#totalScoreDisplay').text(greenCrystal);
        if (score < randomNumber) {
            score = greenCrystal + score 
            $("#totalScoreDisplay").text(score)

        } else if(score == randomNumber){
            $("#totalScoreDisplay").text("YOU WIN!!!")
        } else {
            $("#totalScoreDisplay").text("YOU LOSE SUCKER!!!")
        }
        
      })
      $("#yellowCrystal").on("click", function(){
        
        $('#totalScoreDisplay').text(yellowCrystal);
        if (score < randomNumber) {
            score = yellowCrystal + score 
            $("#totalScoreDisplay").text(score)

        } else if(score == randomNumber){
            $("#totalScoreDisplay").text("YOU WIN!!!")
        } else {
            $("#totalScoreDisplay").text("YOU LOSE SUCKER!!!")
        }
        
      })
    
});
