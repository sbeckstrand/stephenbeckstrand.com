const grid = document.getElementsByClassName('grid')[0];

for (var i = 0; i < 3600; i += 1) {
  let newBlock = document.createElement('div');
  grid.appendChild(newBlock)
  .className = 'block';
}

window.currentColor = "rgb(0, 0, 0)"
var listItems = document.getElementsByClassName('palette')[0].querySelectorAll('li');
for (var i = 0; i < listItems.length; i += 1) {
  listItems[i].onclick = function() {
    var current = this;
    var style = window.getComputedStyle(current);
    window.currentColor = style.getPropertyValue('background-color');
    document.styleSheets[0].addRule('.block:hover', "background-color: " + currentColor + "!important");
  }
}

var blocks = document.getElementsByClassName('block');
for (var i = 0; i < blocks.length; i += 1) {
  blocks[i].onclick = function() {
    this.style['background-color'] = window.currentColor;
  }
}
