# game-loop-js

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
