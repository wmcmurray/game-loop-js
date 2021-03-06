# game-loop-js :video_game: :repeat:

[![npm](https://img.shields.io/npm/v/@wmcmurray/game-loop-js)](https://www.npmjs.com/package/@wmcmurray/game-loop-js)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/wmcmurray/game-loop-js.svg?logo=lgtm&logoWidth=18&label=JS%20code%20quality)](https://lgtm.com/projects/g/wmcmurray/game-loop-js/context:javascript)

[![live demo](https://img.shields.io/badge/-live%20demo%20!-springgreen?style=for-the-badge)](https://wmcmurray.github.io/game-loop-js/)

- Lightweight
- Built with speed in mind
- Ensure **consistent frame-rates** (based on the targeted FPS of your choosing)
- The targeted FPS is **tweakable on-the-fly** (while the game is running)
- This implementation **does not have a requestAnimationFrame loop**, it let you implement it yourself *or not* (because in some cases it's handled by the framework, ex: threejs in a WebXR project)
- "Normalize" the deltaTime at the source to make sure 1 equals 1 second (instead of 1 millisecond), because many calculations are expressed in seconds instead of milliseconds (ex: gravity force is -9.81 meters per seconds) so this prevents you from "/ 1000" everywhere in your actual code, it's done at the source, one time.


## Usage

```
npm install @wmcmurray/game-loop-js
```

### Three.js / requestAnimationFrame()

```javascript
import { createGameLoop } from '@wmcmurray/game-loop-js'

const myGameLoop = function(deltaTime) {
  // ...
};

// how to create a game loop with a targeted 60 FPS :
const gameLoop = createGameLoop(myGameLoop, 60);

// how to change the targeted FPS :
gameLoop.fps = 144;

// how to get the targeted FPS :
const targetFps = gameLoop.fps;


// how to register the loop :

// using three.js
renderer.setAnimationLoop( gameLoop.loop );

// -- or --

// using requestAnimationFrame
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
  const myGameLoop = function(deltaTime) {
    // ...
  };

  const gameLoop = gameLoopJs.createGameLoop(myGameLoop);

  function animate( time ) {
    gameLoop.loop( time );
    requestAnimationFrame( animate );
  }
  requestAnimationFrame( animate );
</script>
```
