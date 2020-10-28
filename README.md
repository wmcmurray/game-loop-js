# game-loop-js :video_game: :repeat:

- Lightweight
- Built with speed in mind
- Ensure **consistent frame-rates** (based on the targeted FPS of your choosing)
- The targeted FPS is **tweakable on-the-fly** (while the game is running)
- This implementation **does not have a requestAnimationFrame loop**, it let you implement it yourself *or not* (because in some cases it's handled by the framework, ex: threejs in a WebXR project)
- "Normalize" the deltaTime at the source to make sure 1 equals 1 second (instead of 1 millisecond), because many calculations are expressed in seconds instead of milliseconds (ex: gravity force is -9.81 meters per seconds) so this prevents you from "/ 1000" everywhere in your actual code, it's done at the source, one time.


## Usage


### Three.js

```javascript
import { createGameLoop } from 'game-loop-js'

const gameLoop = createGameLoop(function(deltaTime) {
  // render code...
});

renderer.setAnimationLoop( gameLoop.loop );
```


### requestAnimationFrame()

```javascript
import { createGameLoop } from 'game-loop-js'

const gameLoop = createGameLoop(function(deltaTime) {
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
  const gameLoop = gameLoopJs.createGameLoop(function(deltaTime) {
    // render code...
  });

  function animate( time ) {
    gameLoop.loop( time );
    requestAnimationFrame( animate );
  }
  requestAnimationFrame( animate );
</script>
```
