/*eslint-env browser*/

var cards = document.getElementsByClassName("infobox");
var logos = document.getElementsByClassName("logos");

for (var i = 0; i < cards.length; ++i) {
	cards[i].number = i;
    logos[i].number = i;
}

var  cardsParent = document.querySelector("#hero-section-3");
cardsParent.addEventListener("mouseover", mouseOverCardEvent);
cardsParent.addEventListener("mouseout", mouseOutCardEvent);

var  menubuttonsParent = document.querySelector("#menu-buttons");
menubuttonsParent.addEventListener("mouseover", mouseOverMenuButtonEvent);
menubuttonsParent.addEventListener("mouseout", mouseOutMenuButtonEvent);

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

function mouseOverMenuButtonEvent(e) {
    if (e.target !== e.currentTarget) {
       var schmunderline = e.target.children;
       ButtonHover(schmunderline[0]);
    }
    e.stopPropagation();
}

function mouseOutMenuButtonEvent(e) {
    if (e.target !== e.currentTarget) {
        var schmunderline = e.target.children;
        ButtonHoverOut(schmunderline[0]); 
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

function ButtonHover(object) {
	object.style.animationName = "borderWidth";
	object.style.animationDuration = "0.2s";
	object.style.height = "5px";


}

function ButtonHoverOut(object) {
	object.style.animationName = "borderWidthOut";
	object.style.animationDuration = "0.2s";
	object.style.height = "0px";
}