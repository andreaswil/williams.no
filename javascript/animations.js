/*eslint-env browser*/
/*eslint-env jquery*/

/* Gets a list of the cards in main-section-3 */ 
var cards = document.getElementsByClassName("card-box");

/*Goes through the cards list and sets the opacity to 100 in their corresponding css code*/
/*eslint-disable*/
function CardPopin() {
	for (var i = 0; i < cards.length; ++i) {
		var card = cards [i];
		card.style.opacity = "100";
	}
}
/*eslint-enable*/

/* Event listeners for mouse hovering over menu buttons and cards */
$(".card-box").mouseover(mouseOverCardEvent);
$(".card-box").mouseout(mouseOutCardEvent);
$(".menu-button").mouseover(mouseOverMenuButton);
$(".menu-button").mouseout(mouseOutMenuButton);
$(".underline").mouseover(mouseOverMenuButtonUnderline);
$(".underline").mouseout(mouseOutMenuButtonUnderline);


function mouseOverMenuButton(e) {
    e.target.children[0].style.animationName = "underlineVisible";
    e.target.children[0].style.animationDuration = "0.2s";
    e.target.children[0].style.height = "5px";
}

function mouseOutMenuButton(e) {
    e.target.children[0].style.animationName = "underlineHide";
    e.target.children[0].style.animationDuration = "0.2s";
    e.target.children[0].style.height = "0px";
  
}

function mouseOverMenuButtonUnderline(e) {
    var underline = e.currentTarget;
    underline.style.animationName = "underlineVisible";
    underline.style.animationDuration = "0.2s";
    underline.style.height = "5px";
  
}

function mouseOutMenuButtonUnderline(e) {
    var underline = e.currentTarget;
    underline.style.animationName = "underlineHide";
    underline.style.animationDuration = "0.2s";
    underline.style.height = "0px";
  
}
   
function mouseOverCardEvent(e) {
    e.currentTarget.style.transform = "scale(1.2)";   
}

function mouseOutCardEvent(e) {
    e.currentTarget.style.transform = "scale(1)";
}