// setTimeout(function(){
    document.getElementById("body").style.display = "block";
// }, 6000)

setTimeout(function(){
    document.getElementById("loading").style.display = "none";
}, 10000)

function pageleave() {
    document.getElementById("bodyleave").style.display = "block";
    document.getElementById("bodyleave").style.animationName = "body_leave";
    // document.getElementById("card_1").style.animationDuration = "2s";
    setTimeout(function() {
        // document.getElementById("body_right_content").style.display = "none";
        document.getElementById("bodyleave").style.width = "100vw";

        location.href = '/index_main.html';
    }, 1000)
}

var Html = document.getElementsByTagName("html")[0];
var scroll_target = document.getElementById("my_friends");
// var scroll_target = document.querySelectorAll(".my_friends_div");
var window_height = window.innerHeight;
var scroll_target_2 = document.getElementsByClassName("my_friends_div");


window.onscroll = function() {
    var scroll_height = Html.scrollTop + window_height;
    console.log(scroll_height)
    if (scroll_height - 100 > scroll_target.offsetTop) {
        for (var i=0; i<scroll_target_2.length; i++) {
            // scroll_target_2[i].style.visibility = "visible";
            scroll_target_2[i].style.animationName = "my_friends_div_show";
            scroll_target_2[i].style.animationDelay = 0.2 * i + "s";
        }
    }

}
