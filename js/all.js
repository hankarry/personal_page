// setTimeout (function() {
//     document.getElementById('message_warn').style.animationName = 'message_out';
//     setTimeout (function() {
//         document.getElementById('message_warn').style.display = 'none';
//     }, 1000)
// }, 10000)

// window.onload = 

function AddSheetFile(path) {
    var fileref = document.createElement("link")
    fileref.rel = "stylesheet";
    fileref.type = "text/css";
    fileref.href = path;
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(fileref, head.childNodes[4]);
    // appendChild()方法在最后插入
}
AddSheetFile("css/footer.css");
// AddSheetFile("css/all.css");

// 页脚信息
var footer = "<hr id='footer'><footer>Made by hankarry Version2.2</footer>";
var foot = document.createElement('div');
foot.id = 'foot';
document.getElementById("body").appendChild(foot);
document.getElementById('foot').innerHTML = footer

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
    // console.log(window_height * 0.5)
    // console.log(elements_top[1])
    // console.log(1)
    
    if (dis > 0.5 * window_height && scrollup_already_show == 0) {
        scroll_up.style.animationName = "show_from_right";
        // scroll_up.style.animationDirection = "normal";
        // scroll_up.style.animationPlayState = "running";
        scrollup_already_show = 1;
        // console.log(1)
    }

    if (dis < 0.5 * window_height && scrollup_already_show == 1) {
        scroll_up.style.animationName = "hide_from_right";
        setTimeout(function() {
            scrolltop_image.style.animationName = "none";
        }, 1000)
        // scrolltop_image.style.animationPlayState = "paused";
        // scroll_up.style.animationDirection = "alternate";
        // scroll_up.style.animationPlayState = "running";
        scrollup_already_show = 0;
    }
})

function scroll_to_top() {
    window.scrollTo(0,0);
    scrolltop_image.style.animationName = "scrolling";
    // scrolltop_image.style.animationPlayState = "running";
}

message = 1;
message_height = "20px";
message_height_2 = "40px";
message_height_add = "30px";

// message为0时不通知,1时通知
if (message == 1 ) {
    var newelement = document.createElement("div");
    newelement.id = "top_message";
    newelement.style.height = message_height
    document.getElementById("root").insertBefore(newelement, document.getElementById("root").firstChild);
    document.getElementById("top_message").innerHTML = "<section>这是一条置顶消息</section>";
    // setTimeout(function() {
    // height1 = document.getElementById("top_message").style.getPropertyValue("height");
        // height = height1.style.
        // console.log(height1);
    document.getElementById("header_mode2").style.setProperty("top", message_height);
    // document.getElementById("header_mode2").style.setProperty("bottom", message_height_2);
    // document.getElementById("body_right_content").style.paddingTop = message_height_add;
    
    // }, 1300)

}