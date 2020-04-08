// Back-end logic //
function Player() {
this.score = 0;



}

function Game() {
  this.playersScore = 0;
  this.currentPlayer = true;
  this.playerSwtich = false;
}

Game.prototype.addToScore = function() {
  currentRoll = this.roll();
  if (currentRoll != 1 || this.playerSwitch != true) {
    this.playersScore += currentRoll;
    
  }
}

Game.prototype.switchPlayers = function() {
  this.currentPlayer = !this.currentPlayer

}

//   this.currentPlayer === 1 ? 2 : 1;
// }


Game.prototype.roll = function() {
  let roll = Math.floor(Math.random()*6 + 1);
  return roll;
}

// function Player() {
//   this.playerScore = 0;
// }

// Front-end logic //
let game = new Game();
game.roll();
game.addToScore();

function clickToRoll() {   // roll function
  $("#img").click(function(){
    console.log(game.addToScore());
    var buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button id='holdButton'>Hold</button>");
  });
}
$("#buttons").on("click", "#holdButton", function(){
  // game.holdFunction(this.currentPlayer);
  $("#holdButton").hide();
});

// game.randomDice()
$(document).ready(function() {
  clickToRoll();
  $("form#enter-name").submit(function(event) {
    event.preventDefault();
    var playerName = $("input#name").val();
    $("#enter-name").fadeToggle();
    $("#player-name").html("<h3>" + playerName + "</h3>");
    $(".show-game").show();
  });
});