$(document).ready(function(){


// Gloubal game variables:
var targetScore = Math.floor(Math.random()*(120-19+1)) + 19;
var wins = 0;
var losses = 0;
var currentScore = 0;
var redCrystal = Math.floor(Math.random()*(12-1+1)) + 1;
var diamondCrystal = Math.floor(Math.random()*(12-1+1)) + 1;
var purpleCrystal = Math.floor(Math.random()*(12-1+1)) + 1;
var yellowCrystal = Math.floor(Math.random()*(12-1+1)) + 1;

var crystalArray = [redCrystal, diamondCrystal, purpleCrystal, yellowCrystal];


        $(".currentScore").html("Score: " + currentScore);
        $(".targetScore").html("Target: " + targetScore);
        $(".wins").html("Wins: " + wins);
        $(".losses").html("Losses: " + losses);
  
$(".targetScore").html("Target: " + targetScore);

$(".crystal-button").on("click", function() {

console.log($(this).attr("id"));
  
  if (currentScore < targetScore){
     //keep playing
     currentScore = currentScore + eval($(this).attr("id"));
     $(".currentScore").html("Srore: " + currentScore);

   }
    //winning scores 
    else if (currentScore === targetScore) {
      
      currentScore = 0;
      wins ++;
      resetGame();

    } 

     else if (currentScore > targetScore) {
      
      currentScore = 0;
     losses++;
      resetGame();

    }

});

     var resetGame = function (){
      $(".wins").html("Wins: " + wins);
      $(".losses").html("Losses: " + losses);
      $(".currentScore").html("Score: " + currentScore);
      targetScore = Math.floor(Math.random()*(120-19+1)) + 19;
      
     }


});