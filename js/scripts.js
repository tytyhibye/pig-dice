// Back-end logic //

function Game(currentPlayer) {
  this.players = ['player', 'comp'];
  this.roundScore = 0;
  this.playersScore = 0;
  this.currentPlayer = currentPlayer;
}

Game.prototype.addToScore = function () {
  currentRoll = this.roll();
  if (currentRoll != 1 || this.playerSwitch != true) {
    this.roundScore += currentRoll;
    // console.log(this.roundScore);
  } else if (currentRoll === 1) {
  }
};

Game.prototype.switchPlayers = function () {
  for (var i = 0; i < this.players.length; i++) {
    if (i === this.players[0]) {
      currentPlayer = this.players[1];
      $('#player-score').text('0');
    } else {
      currentPlayer = this.players[0];
      $('#comp-score').text('0');
    }
  }
  this.roundScore = 0;
};
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
    if (currentPlayer === that.players[0]) {
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
  let game = new Game();
  game.clickToRoll();
  $('form#enter-name').submit(function (event) {
    event.preventDefault();
    var playerName = $('input#name').val();
    currentPlayer = game.players[0];
    console.log(currentPlayer);
    // console.log(this.players);
    $('#enter-name').fadeOut(200);
    $('#player-name').html("<h3 class='tags'>" + playerName + '</h3>');
    $('.show-game').fadeIn(1700);
  });
  $('#buttons').on('click', '#holdButton', function (event) {
    event.preventDefault();
    game.switchPlayers();
    $('#holdButton').fadeOut(1000);
  });
});
