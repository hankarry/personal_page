// setTimeout (function() {
//     document.getElementById('message_warn').style.animationName = 'message_out';
//     setTimeout (function() {
//         document.getElementById('message_warn').style.display = 'none';
//     }, 1000)
// }, 10000)
window.onbeforeunload = function() {
}
// window.onload = 
function jumpto(herf) {
    
    var animation = document.getElementsByClassName('card');
    for (var i = 0; i < animation.length; i++)
    animation[i].style.animationName = 'goout';
    // animation[i].style.animationDuration = '0.7s';

    setTimeout (function() {
        window.location.href = herf;
    }, 800)
}
