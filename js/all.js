// setTimeout (function() {
//     document.getElementById('message_warn').style.animationName = 'message_out';
//     setTimeout (function() {
//         document.getElementById('message_warn').style.display = 'none';
//     }, 1000)
// }, 10000)

// window.onload = 
function jumpto(herf) {
    
    var animation_card = document.getElementsByClassName('card');
    var animation_card_small = document.getElementsByClassName('card_small');
    for (var i = 0; i < animation_card.length; i++) {
        animation_card[i].style.animationName = 'goout';
    }
    for (var i = 0; i < animation_card_small.length; i++) {
        animation_card_small[i].style.animationName = 'hide_from_right';
        animation_card_small[i].style.animationDelay = '0s';
    }

    setTimeout (function() {
        window.location.href = herf;
    }, 500)
}
