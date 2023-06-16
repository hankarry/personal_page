// setTimeout (function() {
//     document.getElementById('message_warn').style.animationName = 'message_out';
//     setTimeout (function() {
//         document.getElementById('message_warn').style.display = 'none';
//     }, 1000)
// }, 10000)

// window.onload = 

// var d = new Date;
// var birthday_count = 19 - d.getDate();
// var birthday = 19 - day;
// var birthday_count = 19 - day;
// console.log (day)
// if (birthday_count == 0) {
//     birthday_text = "今天是咱的生日!"
// }
// if (birthday_count > 0) {
//     birthday_text = "还有" + String(birthday_count) + "天是咱生日哦~"
// }
// if (birthday_count < 0) {
//     birthday_text = ""
// }
// document.write = "<div id='top_message'><img src='/css/hud/cake.svg' width='25' height='25'><section>咱的生日快到啦</section></div>"

var head_process = document.getElementById('head_process');
head_process.style.width = "80%";

// function couldsee() {
    // console.log(q)
// }

// 在进入视口时加载动画
// window.onscroll = function() {
//     if (document.getElementById("Scroll_Show")) {
//         var tagret_number = document.getElementsByClassName("Scro")
//         // console.log(1)
//         var wHeight = document.documentElement.clientHeight;
//         var target_class = document.getElementById("Scroll_Show");
//         for (var i = 0; i < target_class.length; i++) {
//             console.log(target_class.top)
//             if (document.documentElement.scrollTop > target_class[i].offsetTop - wHeight * (3/4)) {
//                 // target_class[i]
//                 console.log(1)
//             }
//         }

//     }
    
// }

var Html = document.getElementsByTagName("html")[0];
var window_height = window.innerHeight;
var scroll_up = document.getElementById("scroll_up");
var scrolltop_image = document.getElementById("scroll_up_content")
var scrollup_already_show = 0;
window.addEventListener("scroll", function() {
    var dis = Html.scrollTop;
    // var scroll_height = dis + window_height;
    // console.log("HTML滚动高度: " + dis);
    
    if (dis > 0.5 * window_height && scrollup_already_show == 0) {
        scroll_up.style.animationName = "show_from_right";
        // scroll_up.style.animationDirection = "normal";
        // scroll_up.style.animationPlayState = "running";
        scrollup_already_show = 1;
    }
})

function scroll_to_top() {
    window.scrollTo(0,0);
    scrolltop_image.style.animationName = "scrolling";
    setTimeout(function() {
        scrolltop_image.style.animationName = "none";
        scroll_up.style.animationName = "hide_from_right";
        scrollup_already_show = 0;
    }, 800)
    // scrolltop_image.style.animationPlayState = "running";
}
