var getcard = document.getElementsByClassName('card_small')
for (var i = 0; i < getcard.length; i++) {
    getcard[i].style.animationDelay = String(0.5 * i) + 's';
}
