let timeElapsed = 0;

const gameLoop = gameLoopJs.createGameLoop(function(deltaTime) {
  timeElapsed += deltaTime;

  document.getElementById('result').innerHTML = Math.round(timeElapsed * 1000) / 1000;

  stats.update();
}, 60);

// start the demo
function onAnimationFrame( time ) {
  gameLoop.loop( time );
  requestAnimationFrame( onAnimationFrame );
}
requestAnimationFrame( onAnimationFrame );
