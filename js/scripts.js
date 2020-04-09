// Back-end logic //

function Game() {
  this.roundScore = 0;
  this.playersScore = 0;
  this.compsScore = 0;
}

Game.prototype.addToScore = function () {
  currentRoll = this.roll();
  if (currentRoll != 1) {
    this.roundScore += currentRoll;
  } else if (currentRoll === 1) {
    totalRound = 0;
    console.log("rolled a 1");
  }
    totalRound = this.roundScore;       //**THIS IS NEW**/
    return totalRound;                  //**THIS IS NEW**/
};

Game.prototype.addTotal = function () {
  
  if (this.currentPlayer === true) {      //**THIS IS NEW**/
    parseInt(this.playersScore += totalRound);
    console.log(this.playersScore);
  } else {
    parseInt(this.compsScore += totalRound);
    console.log(this.compsScore);
  }
  // return this.totalScore;
}

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

Game.prototype.roll = function () {
  let roll = Math.floor(Math.random() * 6 + 1);
  return roll;
};

// Front-end logic //


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
  let game = new Game();
  game.clickToRoll();
  $('form#enter-name').submit(function (event) {
    event.preventDefault();
    var playerName = $('input#name').val();
    currentPlayer = true;
    totalScore = 0;
    playersScore = 0;
    $('#enter-name').fadeOut(200);
    $('#player-name').html("<h3 class='tags'>" + playerName + '</h3>');
    $('.show-game').fadeIn(1700);
  });
  $('#buttons').on('click', '#holdButton', function (event) {
    event.preventDefault();
    game.addTotal();           //**THIS IS NEW**/
    game.switchPlayers();
    $('#holdButton').fadeOut(1000);
    // console.log(game.totalScore)

  });
});
