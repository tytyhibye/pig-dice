// Back-end logic //
function randomDice(dice) {
  var roll = Math.floor(Math.random(dice)*6 + 1);
  console.log(roll);
}
thisRoll();
// Front-end logic //

$(document).ready(function() {
  $(".player-name").submit(function(event) {
    event.preventDefault();
  });
});