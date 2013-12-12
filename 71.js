

window.addEventListener('load', function() {
  frmSignIn.style.display = 'block';
  Main();
  if (typeof(frmSignIn.onshow)=='function') frmSignIn.onshow();
  
}, false);

var NSBCurrentForm = frmSignIn;



