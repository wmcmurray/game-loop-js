const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const cube = new THREE.Mesh( new THREE.BoxBufferGeometry( 1, 1, 1 ), new THREE.MeshNormalMaterial() );
cube.position.y = 0.2;
cube.rotation.x = 0.5;
scene.add( cube );

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 2;

// window resize listener
window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}, false);

// -----

let gameTimeElapsed = 0;
// let intervalTimeElapsed = 0;

const cubeRotationRadian = 90 * (Math.PI / 180); // 90 degrees
const cubeRotationPerSeconds = cubeRotationRadian;
const easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 };

let isFirst = true;
const gameLoop = createGameLoop(function(deltaTime) {
  gameTimeElapsed += deltaTime;
  cube.rotation.y = cubeRotationRadian * easing(gameTimeElapsed % 1);

  renderer.render( scene, camera );
  stats.update();

  if(Math.floor(gameTimeElapsed)) {
    resultTimeGame.innerHTML = Math.floor(gameTimeElapsed) + ' sec (game)';
  }

  if(isFirst) {
    isFirst = false;
    const firstA = Math.floor(gameTimeElapsed);

    // sync my interval with the game loop
    setTimeout(function() {
      const intervalStartedAt = Date.now();
      const displayIntervalTime = function() {
        // resultTimeInterval.innerHTML = Math.floor(++intervalTimeElapsed + firstA) + ' sec (interval)';
        resultTimeInterval.innerHTML = Math.floor( ((Date.now() - intervalStartedAt) * 0.001) + firstA + 1 ) + ' sec (interval)';
      };
      setInterval(displayIntervalTime, 1000);
      displayIntervalTime();
    }, 1000 * (1 - (gameTimeElapsed - firstA)));
  }
}, 60);

// start the demo at the exact start of a second
setTimeout(function() {
  renderer.setAnimationLoop( gameLoop.loop );
}, 1000 - (new Date()).getMilliseconds());
