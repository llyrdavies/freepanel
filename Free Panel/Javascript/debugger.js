let devtools = function() {};
devtools.toString = function() {
  this.opened = true;
}

console.debug(devtools);

window.setInterval(function() {
  if(devtools.opened) {
    debugger;
  }
}, 1000);

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });


window.onkeydown = function(e) {
if (e.keyCode == 123) { // F12 key code
    e.preventDefault();
    e.stopPropagation();
}
};