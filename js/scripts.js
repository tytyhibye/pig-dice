// Back-end logic //

function Game() {
  this.players = ["player", "comp"];
  this.roundScore = 0;
  this.playersScore = 0;
  this.playerSwtich = false;
}

Game.prototype.addToScore = function() {
  currentRoll = this.roll();
  if (currentRoll != 1 || this.playerSwitch != true) {
    this.roundScore += currentRoll;
    // console.log(this.roundScore);
  }
}

Game.prototype.switchPlayers = function() {
  for(var i= 0; i<this.players.length; i ++) {
    if(currentPlayers[i] === "player"){
      currentPlayer = 1;
      $("#player-score").text("0");
    } else currentPlayer = 0; {
      $("#comp-score").text("0");
    }
  }
  this.roundScore = 0;
}
//   this.currentPlayer === 1 ? 2 : 1;
// }
// this.currentPlayer = !this.currentPlayer


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
    $("#player-score").text(game.roundScore);
    console.log(game.roundScore);

    var buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button id='holdButton'>HOLD</button>");
    
  });
}

$(document).ready(function() {
  clickToRoll();
  let game = Game();
  $("form#enter-name").submit(function(event) {
    event.preventDefault();
    var playerName = $("input#name").val();
    this.players = [4, 5, 6];
    // console.log(players);
    // console.log(this.players);
    $("#enter-name").fadeOut(200);
    $("#player-name").html("<h3 class='tags'>" + playerName + "</h3>");
    $(".show-game").fadeIn(1700);
  }); 
  $("#buttons").on("click", "#holdButton", (function (event) {
    event.preventDefault();
    game.switchPlayers();
    $("#holdButton").fadeOut(1000);
  }));
});