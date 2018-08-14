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

/* Scales the card when hovering */
function mouseOverCardEvent(e) {
    e.currentTarget.style.transform = "scale(1.1)";   
}

/* Scales the card back to original scale when hovering */
function mouseOutCardEvent(e) {
    e.currentTarget.style.transform = "scale(1)";
}

/* Gets the children of the menu button (the underline), and activates the animation which makes it visible, when the cursor is hovering the menu button */
function mouseOverMenuButton(e) {
    e.target.children[0].style.animationName = "underlineVisible";
    e.target.children[0].style.animationDuration = "0.2s";
    e.target.children[0].style.height = "5px";
}

/* Gets the children of the menu button (the underline), and activates the animation which makes it hidden, when the cursor leaves the menu button */
function mouseOutMenuButton(e) {
    e.target.children[0].style.animationName = "underlineHide";
    e.target.children[0].style.animationDuration = "0.2s";
    e.target.children[0].style.height = "0px";
  
}

/* Makes the underline seem like a part of the button, preventing the underline from hiding when the cursor moves from the menu button to the underline */
function mouseOverMenuButtonUnderline(e) {
    e.currentTarget.style.animationName = "underlineVisible";
    e.currentTarget.style.animationDuration = "0.2s";
    e.currentTarget.style.height = "5px";
}

/* Makes the underline hide when the cursor leaves the underline */
function mouseOutMenuButtonUnderline(e) {
    e.currentTarget.style.animationName = "underlineHide";
    e.currentTarget.style.animationDuration = "0.2s";
    e.currentTarget.style.height = "0px"; 
}

$(document).ready(function() {
    var children = $(".cover");
    for (var i = 0; i < children.length; ++i) {
        children[i].style.animationName = "whenLoadedFadeIn";
        children[i].style.animationDuration = "2s";
        children[i].style.opacity = "100";
        
    }
});