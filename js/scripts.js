// Back-end logic //
function Game() {
  this.playersScore = 0;
  this.compScore = 0;
  this.currentPlayer = 1;
  this.playerSwtich = false;
}

Game.prototype.addToScore = function(roll) {
  currentRoll = this.roll();
  if (currentRoll != 1) {
    this.playersScore = this.playersScore + currentRoll;
    console.log(this.playersScore);
  } else if (this.playerSwtich === true){
    
  }
  // if (roll === 1) {
  //   this.over =true;
  //   this.points = 0;
  // } else {
  //   this.points += roll;
  // }
  // return roll;
}


Game.prototype.roll = function(dice) {
  let roll = Math.floor(Math.random(dice)*6 + 1);
  return roll;
}

let game = new Game();
game.roll();
game.addToScore();

// Front-end logic //

// function clickToRoll() {   // roll function
//   $("#dice").on("click","img", function(){
//     roll(dice);
//     console.log(roll)
//   });
// }

// game.randomDice()
$(document).ready(function() {
  $("form#enter-name").submit(function(event) {
    event.preventDefault();
    var playerName = $("input#name").val();
    $("#enter-name").fadeToggle();
    $("#player-name").html("<h3>" + playerName + "</h3>");
    $(".show-game").show();
  });
});