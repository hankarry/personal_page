setTimeout(function(){
    document.getElementById("card_1").style.animationPlayState = "running";
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

var my_goals_already_show = []
for (var i=0; i< my_goals.length; i++) {
    my_goals_already_show.push(0)
}

var my_friends_showstate = 0;
var my_goals_already_show_completely = 0;
var title_text_completely = 0;

window.onscroll = function() {
    var scroll_height = Html.scrollTop + window_height;
    // console.log(scroll_height);
    if (my_friends_showstate == 0) {
        if (scroll_height - 100 > my_friends.offsetTop) {
            for (var i=0; i<my_friends_div.length; i++) {
                // my_friends_div[i].style.visibility = "visible";
                my_friends_div[i].style.animationName = "my_friends_div_show";
                my_friends_div[i].style.animationDelay = 0.2 * i + "s";
            }
            my_friends_showstate = 1;
        }
    }

    if (scroll_bottom_sign == 0) {
        document.getElementById("sign_scroll_to_bottom_1").style.animationName = "sign_scroll_to_bottom_leave";
        document.getElementById("sign_scroll_to_bottom_1").style.animationIterationCount = "1";
        scroll_bottom_sign = 1;
    }

    if (title_text_completely == 0) {
        for (var i=0; i<title_text.length; i++) {
            if (scroll_height - 100 > title_text[i].offsetTop) {
                title_text[i].style.animationName = "title_text";
                if (i == title_text.length - 1) {
                    title_text_completely == 1;
                }
            }
        }
    }

    if (my_goals_already_show_completely == 0) {
        
        for (var i=0; i< my_goals.length; i++) {
            if (my_goals_already_show[i] == 0) {
                if (scroll_height - 100 > my_goals[i].offsetTop) {
                    my_goals[i].style.animationName = "my_goals";
                    my_goals_already_show[i] = 1;
                    if (i == my_goals.length - 1) {
                        my_goals_already_show_completely == 1;
                    }
                }
            }
        }
    }

    // console.log("HTML滚动高度: " + scroll_height);
    
}


var gaokao_date = new Date("2024-06-07 09:00:00");
var gaokao_time = parseInt(gaokao_date.getTime());
// console.log(gaokao_date.getTime())
var gaokao_countdown_ele = document.getElementById("gaokao_countdown");
function gaokao_countdown_time() {
    var now_date = new Date();

    var leftTime = gaokao_time - parseInt(now_date.getTime())
    // var years = Math.floor(leftTime / 1000 / 60 / 60 / 24 / 365);
    // var months = Math.floor((leftTime - years*31536000000) / 1000 / 60 / 60 / 24 / 30)
    // var days = Math.floor((leftTime - years*31536000000 - months*86400000)/ 1000 / 60 / 60 / 24);
    var days = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    var hours = Math.floor((leftTime - days * 86400000) / 1000 / 60 / 60);
    var minutes = Math.floor((leftTime - days * 86400000 - hours * 3600000) / 1000 / 60);
    var seconds = Math.floor((leftTime - days * 86400000 - hours * 3600000 - minutes * 60000) / 1000);
    // document.getElementById("gaokao_countdown").innerText = years + "年" + months + "月" + days + "日" + hours + "时" + minutes + "分" + seconds + "秒"; 
    gaokao_countdown_ele.innerHTML = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒"; 
    setTimeout(gaokao_countdown_time, 1000)
    // console.log(1)
    // setTimeout(gaokao_countdown, 1000)

}
gaokao_countdown_time()

function Add_Copy(ele, conetnt) {
    navigator.clipboard.writeText(conetnt);
    var copy_success = document.createElement("div");
    copy_success.className = "copy_success";
    copy_success.innerText = "Copied!";
    ele.appendChild(copy_success);
}