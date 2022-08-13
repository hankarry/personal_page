// document.getElementById('head2_littlepoet').onclick = ''

// var getcard = document.getElementsByClassName('card_small')
// for (i = 0; i < getcard.length; i++) {
//     getcard[i].style.animationDelay = String(0.5 * i) + 's';
// }

// IntersectionObserver对象 https://www.cnblogs.com/WindrunnerMax/p/15587653.html
console.log(1)
function see(a) {
    console.log(a)
}
var Observer = new IntersectionObserver(see)
Observer.thresholds = [1];
var target_class = document.getElementsByClassName("Scroll_Show");
for (var i = 0; i < target_class.length; i++) {
    Observer.observe(target_class[i]);
}
    // show_from_right 