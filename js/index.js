setTimeout(function(){
    document.getElementById("body").style.display = "block";
}, 3000)

setTimeout(function(){
    document.getElementById("loading").style.display = "none";
}, 5000)

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
var my_goals = document.getElementsByClassName("my_goals");

var scroll_bottom_sign = 0

var scroll_height = Html.scrollTop + window_height;
for (var i=0; i<title_text.length; i++) {
    if (scroll_height - 100 > title_text[i].offsetTop) {
        // title_text[i].style.animationName = "title_text";
    }
}

for (var i=0; i< my_goals.length; i++) {
    my_goals[i].style.animationDelay = 0.2*i +"s";
}

window.onscroll = function() {
    var scroll_height = Html.scrollTop + window_height;
    // console.log(scroll_height);
    if (scroll_height - 100 > my_friends.offsetTop) {
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
        if (scroll_height - 50 > title_text[i].offsetTop) {
            title_text[i].style.animationName = "title_text";
        }
    }

    for (var i=0; i< my_goals.length; i++) {
        if (scroll_height - 50 > my_goals[i].offsetTop) {
            my_goals[i].style.animationName = "my_goals";
            // var eleHeight = my_goals[i].scrollHeight;
            // var ele_Hover = window.getComputedStyle(my_goals[i], "::hover");
            // ele_Hover.setProperty("height", toString(eleHeight));
            // console.log(ele_Hover.height)
        }
    }

    // console.log("HTML滚动高度: " + scroll_height);
    
}