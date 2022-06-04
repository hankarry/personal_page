document.getElementById('head2_cp').onclick = ''

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

    // var head = ['header', 'div_header2', 'header2']
    // for (i = 0; i < head.length; i++) {
    //     var head_ = document.getElementById(document.getElementById(head[i]))
    //     head_.style.animationName = 'transparent_change1';
    // }

    setTimeout (function() {
        window.location.href = herf;
    }, 500)

}