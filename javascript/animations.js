/*eslint-env browser*/
/*eslint-env jquery*/

var cards = document.getElementsByClassName("card-box");
var icons = document.getElementsByClassName("icons");

for (var i = 0; i < cards.length; ++i) {
	cards[i].number = i;
    icons[i].number = i;
}

var  cardsParent = document.querySelector("#main-section-3");
cardsParent.addEventListener("mouseover", mouseOverCardEvent);
cardsParent.addEventListener("mouseout", mouseOutCardEvent);

$(".menu-button").mouseover(mouseOverMenuButton);
$(".menu-button").mouseout(mouseOutMenuButton);
$(".underline").mouseover(mouseOverMenuButtonUnderline);
$(".underline").mouseout(mouseOutMenuButtonUnderline);

function mouseOverMenuButton(e) {
    var children = e.target.children;
    children[0].style.animationName = "underlineVisible";
    children[0].style.animationDuration = "0.2s";
    children[0].style.height = "5px";
  
}

function mouseOutMenuButton(e) {
    var children = e.target.children;
    children[0].style.animationName = "underlineHide";
    children[0].style.animationDuration = "0.2s";
    children[0].style.height = "0px";
  
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
    if (e.target !== e.currentTarget) {
       cards[e.target.number].style.transform = "scale(1.2)";   
    }
    e.stopPropagation();
}

function mouseOutCardEvent(e) {
    if (e.target !== e.currentTarget) {
        cards[e.target.number].style.transform = "scale(1)"
        
    }
    e.stopPropagation();
}

/*eslint-disable*/
function CardPopin() {
	for (var i = 0; i < cards.length; ++i) {
		var card = cards [i];
		card.style.opacity = "100";
	}
}
/*eslint-enable*/
