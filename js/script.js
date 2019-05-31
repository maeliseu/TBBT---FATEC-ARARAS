
function comeca() {
  var hoje = new Date();
  var h = hoje.getHours();
  var m = hoje.getMinutes();
  var s = hoje.getSeconds();
  h = checazero(h);
  m = checazero(m);
  s = checazero(s);
  document.getElementById('relogio').innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(comeca, 500);
}


function checazero(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
