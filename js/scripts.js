// Back-end logic //

function Game() {
  this.roundScore = 0;
  this.playersScore = 0;
  this.compsScore = 0;
}

Game.prototype.addToScore = function () {
  currentRoll = this.roll();
  //LL: Try to avoid global variables (any created without 'var' ahead)
  if (currentRoll != 1) {
    this.roundScore += currentRoll;
  } else if (currentRoll === 1) {
    this.roundScore = 0;
    // console.log("rolled a 1");
  }
    totalRound = this.roundScore;       //**THIS TRANSITION WORKS**/
    //LL: See note on 11
    return totalRound; 
    //LL: Could just say 'return this.roundScore' or even better, don't return anything and just access Game.roundScore afterward because it will have been modified                 
};

Game.prototype.addTotal = function () {
  
  if (this.currentPlayer === true) {      
    parseInt(this.playersScore += totalRound);
    return this.playersScore;
  } 
  else {
    parseInt(this.compsScore += totalRound);
    return this.compsScore;
  }
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
  if  (roll === 1){
    console.log("you rolled a 1");
    this.switchPlayers();
    // alert ("You've rolled a 1");
    // this.roundScore = 0;
    return 0;
    //LL: Added ^ This needs to return a number either way since its result is added to roundScore in line 10/13
  } else{
    return roll;
  }
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
      console.log("That roundscore inside clickToRoll: ", that.roundScore);
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
    // game.addTotal();          

    if (currentPlayer === true) {
      $("#player-total").text(game.addTotal(totalRound));
    } 
    
    if (currentPlayer === false) {
      $("#comp-total").text(game.addTotal(totalRound));
    }
    game.switchPlayers();
    $('#holdButton').fadeOut(1000);
    

  });
});
