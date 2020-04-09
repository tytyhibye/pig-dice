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
    // console.log(this.playersScore);
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


// Front-end logic //

// game.roll();
// game.addToScore();

function clickToRoll() { 
  let game = new Game();
    // roll function
  $("#img").click(function(){
    game.addToScore();
    $("#player-score").text(game.playersScore);
    console.log(game.playersScore);

    var buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button id='holdButton'>HOLD</button>");
    
  });
}
$("#buttons").on("click", "#holdButton", function(){
  // game.holdFunction(this.currentPlayer);
  $("#holdButton").fadeOut(1000);
});

$(document).ready(function() {
  clickToRoll();
  $("form#enter-name").submit(function(event) {
    event.preventDefault();
    var playerName = $("input#name").val();
    $("#enter-name").fadeOut(200);
    $("#player-name").html("<h3 class='tags'>" + playerName + "</h3>");
    $(".show-game").fadeIn(1700);
  
  });
});