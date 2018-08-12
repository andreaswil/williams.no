/*eslint-env browser*/
/*eslint-env jquery*/

var cards = document.getElementsByClassName("infobox");
var logos = document.getElementsByClassName("logos");

for (var i = 0; i < cards.length; ++i) {
	cards[i].number = i;
    logos[i].number = i;
}

var  cardsParent = document.querySelector("#hero-section-3");
cardsParent.addEventListener("mouseover", mouseOverCardEvent);
cardsParent.addEventListener("mouseout", mouseOutCardEvent);

$(".menu-button").mouseover(mouseOverMenuButtonUnderline);
$(".menu-button").mouseout(mouseOutMenuButtonUnderline);
$(".underline").mouseover(mouseOverMenuButtonUnderline2);
$(".underline").mouseout(mouseOutMenuButtonUnderline2);

function mouseOverMenuButtonUnderline(e) {
    var schmunderline = e.target.children;
    schmunderline[0].style.animationName = "borderWidth";
    schmunderline[0].style.animationDuration = "0.2s";
    schmunderline[0].style.height = "5px";
  
}

function mouseOutMenuButtonUnderline(e) {
    var schmunderline = e.target.children;
    schmunderline[0].style.animationName = "borderWidthOut";
    schmunderline[0].style.animationDuration = "0.2s";
    schmunderline[0].style.height = "0px";
  
}

function mouseOverMenuButtonUnderline2(e) {
    var schmunderline = e.currentTarget;
    schmunderline.style.animationName = "borderWidth";
    schmunderline.style.animationDuration = "0.2s";
    schmunderline.style.height = "5px";
  
}

function mouseOutMenuButtonUnderline2(e) {
    var schmunderline = e.currentTarget;
    schmunderline.style.animationName = "borderWidthOut";
    schmunderline.style.animationDuration = "0.2s";
    schmunderline.style.height = "0px";
  
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
