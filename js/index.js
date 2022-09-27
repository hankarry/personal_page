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

var my_goals_already_show = []
for (var i=0; i< my_goals.length; i++) {
    my_goals_already_show.push(0)
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
        if (my_goals_already_show[i] == 0) {
            if (scroll_height - 50 > my_goals[i].offsetTop) {
                my_goals[i].style.animationName = "my_goals";
                my_goals_already_show[i] = 1;
            }
            
        }
    }

    // console.log("HTML滚动高度: " + scroll_height);
    
}

var now_date = new Date();
var gaokao_year = 2024;
var gaokao_month = 6;
var gaokao_day = 7;
gaokao_date = new Date("2024-6-7 00:00:00");
function leftTimer(year,month,day,hour,minute,second){ 
 var leftTime = (new Date(year,month-1,day,hour,minute,second)) - (new Date()); //计算剩余的毫秒数 
 var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数 
 var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
 var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
 var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
 days = checkTime(days); 
 hours = checkTime(hours); 
 minutes = checkTime(minutes); 
 seconds = checkTime(seconds); 
 setInterval("leftTimer(2016,11,11,11,11,11)",1000); 
 document.getElementById("timer").innerHTML = days+"天" + hours+"小时" + minutes+"分"+seconds+"秒"; 
} 
function checkTime(i){ //将0-9的数字前面加上0，例1变为01 
 if(i<10) 
 { 
 i = "0" + i; 
 } 
 return i; 
} 
// leftTimer("2024","06","07","00","00","00")
