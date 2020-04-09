// Back-end logic //

function Game() {
  this.roundScore = 0;
  this.playersScore = 0;
  this.compScore = 0;
  this.currentPlayer = true;
}

Game.prototype.addToScore = function () {
  currentRoll = this.roll();
  if (currentRoll != 1) {
    this.roundScore += currentRoll;
    // console.log(this.roundScore);
  } else if (currentRoll === 1) {
    console.log("rolled a 1");
  }
};

Game.prototype.switchPlayers = function () {
  // 
  this.currentPlayer = !this.currentPlayer;
if (currentPlayer === true) {
  $('#player-score').text('0');
  currentPlayer = false;
} else {
  $('#comp-score').text('0');
  currentPlayer = true;
  }
  this.roundScore = 0;
}
  // }  return this.currentPlayer;

console.log(this.currentPlayer)
// Game.prototype.switchPlayers2 = function () {
//   this.playerOneIsUp = !this.playerOneIsUp; // true / false
// }

// this.currentPlayerIndex = 1 - this.currentPlayerIndex;
  
  // this.currentPlayer = ???

  // for (var i = 0; i < this.players.length; i++) {
  //   if (i === this.players[0]) { // if (0 === 'comp') { // if (1 === 'comp') { 
  //     currentPlayer = this.players[1];
  //     $('#comp-score').text('0');
  //   } else {
  //     currentPlayer = this.players[1];
  //     $('#player-score').text('0');
  //   }
  // }
  // this.roundScore = 0;
//   this.currentPlayer === 1 ? 2 : 1;
// }
// this.currentPlayer = !this.currentPlayer

Game.prototype.roll = function () {
  let roll = Math.floor(Math.random() * 6 + 1);
  return roll;
};

// Front-end logic //

// game.roll();
// game.addToScore();

Game.prototype.clickToRoll = function () {
  // roll function
  var that = this;
  $('#img').click(function () {
    that.addToScore();
    if (currentPlayer === true) {
    $('#player-score').text(that.roundScore);
    } else {
      $('#comp-score').text(that.roundScore);
    }

    var buttons = $('#buttons');
    buttons.empty();
    buttons.append("<button id='holdButton'>HOLD</button>");
  });
};

$(document).ready(function () {
  let game = new Game(); // let game = new Game(0);
  game.clickToRoll();
  $('form#enter-name').submit(function (event) {
    event.preventDefault();
    var playerName = $('input#name').val();
    currentPlayer = true;
    // console.log(currentPlayer);
    // console.log(this.players);
    $('#enter-name').fadeOut(200);
    $('#player-name').html("<h3 class='tags'>" + playerName + '</h3>');
    $('.show-game').fadeIn(1700);
  });
  $('#buttons').on('click', '#holdButton', function (event) {
    event.preventDefault();
    game.switchPlayers();
    $('#holdButton').fadeOut(1000);
  //if(currentPlayer===""){
  //$(player-total).text(currentPlayer.roundScore + playersScore)
  //} else {
  //$(comp-total).text(currentPlayer.roundScore + compScore)
  //}
  });
});
