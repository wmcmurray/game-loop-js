const resultDomElem = document.getElementById('result');
const resultTimeGame = document.createElement('div');
const resultTimeInterval = document.createElement('div');
resultDomElem.appendChild(resultTimeGame);
resultDomElem.appendChild(resultTimeInterval);

function selectProperItemInPanel() {
  document.querySelectorAll('.panel-item').forEach(function(item) {
    if(Number(item.attributes['data-fps'].value) === gameLoop.fps) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  });
}
selectProperItemInPanel();

// panel click listener
document.addEventListener('click', function (evt) {
  if(evt.target.matches('.panel-item')) {
    gameLoop.fps = Number(evt.target.attributes['data-fps'].value);
    selectProperItemInPanel();
  }
}, false);
