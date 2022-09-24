setTimeout(function(){
    document.getElementById("body").style.display = "block";
}, 2300)

setTimeout(function(){
    document.getElementById("loading").style.display = "none";
}, 4000)

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
var window_height = window.innerHeight;

var my_friends = document.getElementById("my_friends");
// var my_friends = document.querySelectorAll(".my_friends_div");
var my_friends_div = document.getElementsByClassName("my_friends_div");

var title_text = document.getElementsByClassName("title_text");

var scroll_bottom_sign = 0

window.onscroll = function() {
    var scroll_height = Html.scrollTop + window_height;
    // console.log(scroll_height);
    if (scroll_height - 150 > my_friends.offsetTop) {
        for (var i=0; i<my_friends_div.length; i++) {
            // my_friends_div[i].style.visibility = "visible";
            my_friends_div[i].style.animationName = "my_friends_div_show";
            my_friends_div[i].style.animationDelay = 0.2 * i + "s";
        }
    }

    if (scroll_bottom_sign == 0) {
        document.getElementById("sign_scroll_to_bottom_1").style.animationName = "sign_scroll_to_bottom_leave";
        document.getElementById("sign_scroll_to_bottom_1").style.animationIterationCount = "1";
        scroll_bottom_sign = 1;
    }

    for (var i=0; i<title_text.length; i++) {
        if (scroll_height - 150 > title_text[i].offsetTop) {
            title_text[i].style.animationName = "title_text";
        }
    }
}

for (var i=0; i<title_text.length; i++) {
    if (scroll_height - 150 > title_text[i].offsetTop) {
        title_text[i].style.animationName = "title_text";
    }
}