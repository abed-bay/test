//-----VARIABLES/NULL/EINSTEIN-----//

var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];


modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal)
window.addEventListener("click", outsideClick);
if( closeBtn ) closeBtn.addEventListener("click", closeModal);

			//-----Open-----//
function openModal() {
	modal.style.display = 'block';
}
  
			//-----Close-----//
function closeModal() {
	modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

window.addEventListener("header", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);