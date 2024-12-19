var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function saws (x, y){
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = 
    game.createObstacle(
      hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      sawBladeHitZone.rotationalVelocity = 10

      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25
      obstacleImage.y = -25}

      saws(700, 180)
      saws(300, 280)
      saws( 900, 180)
function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "lime");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = groundY - y;
enemy.velocityX = -2
enemy.rotationalVelocity = 3
enemy.onPlayerCollision = function () {game.changeIntegrity(-10); startLevel()}
enemy.onProjectileCollision = function () {game.increaseScore(100);
  enemy.fadeOut(); startLevel()}
game.addGameItem(enemy)}
createEnemy(400, groundY - 280);
createEnemy(800, groundY - 180);
createEnemy(1200, groundY - 280)

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
