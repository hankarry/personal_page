document.getElementById('head2_littlepoet').onclick = ''

var getcard = document.getElementsByClassName('card_small')
for (i = 0; i < getcard.length; i++) {
    getcard[i].style.animationDelay = String(0.5 * i) + 's';
}