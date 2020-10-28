# game-loop-js :video_game: :repeat:

Features :

- Lightweight
- Built with speed in mind
- Ensure consistent and **stable frame-rates** (based on the targeted FPS of your choosing)
- The targeted FPS is **tweakable on-the-fly** (while the game is running)
- This implementation **does not have a requestAnimationFrame loop**, it let you implement it yourself *or not* (because in some cases it's handled by the framework, ex: threejs in a WebXR project)

## Usage

### Three.js
```javascript
import gameLoopJs from 'game-loop-js'

const gameLoop = gameLoopJs(function(deltaTime) {
  // render code...
});

renderer.setAnimationLoop( gameLoop.loop );
```

### requestAnimationFrame()
```javascript
import gameLoopJs from 'game-loop-js'

const gameLoop = gameLoopJs(function(deltaTime) {
  // render code...
});

function animate( time ) {
  gameLoop.loop( time );
  requestAnimationFrame( animate );
}
requestAnimationFrame( animate );
```

### Browser
```html
<script type="text/javascript" src="/dist/bundle.umd.js"></script>

<script type="text/javascript">
  const gameLoop = createGameLoop(function(deltaTime) {
    // render code...
  });

  function animate( time ) {
    gameLoop.loop( time );
    requestAnimationFrame( animate );
  }
  requestAnimationFrame( animate );
</script>
```
