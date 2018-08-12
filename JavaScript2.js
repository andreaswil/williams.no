var cards = document.getElementsByClassName("infobox");

for (var i = 0; i < cards.length; ++i) {
		var card = cards [i];
		card.addEventListener("mouseover", CardHover);
	}


function CardHover()  {
	for (var i = 0; i < cards.length; ++i) {
		var card = cards [i];
		card.style.transform = "scale(1.2)";
	}

}