//-----VARIABLES/NULL-----//

var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

			//-----VARIABLES/NULL-----//

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