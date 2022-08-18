// setTimeout (function() {
//     document.getElementById('message_warn').style.animationName = 'message_out';
//     setTimeout (function() {
//         document.getElementById('message_warn').style.display = 'none';
//     }, 1000)
// }, 10000)

// window.onload = 

var footer = "<hr id='footer'><footer>Made by hankarry Version2.1</footer>";
var foot = document.createElement('div');
foot.id = 'foot';
document.getElementById("body").appendChild(foot);
document.getElementById('foot').innerHTML = footer

// function AddSheetFile(path) {
//     var fileref = document.createElement("link")
//     fileref.rel = "stylesheet";
//     fileref.type = "text/css";
//     fileref.href = path;
//     var head = document.getElementsByTagName('head')[0];
//     head.insertBefore(fileref, head.childNodes[4]);
//     // appendChild()方法在最后插入
// }
// AddSheetFile("css/header.css");
// AddSheetFile("css/all.css");

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
message = 0;
message_height = "20px";

if (message == 1 ) {
    var newelement = document.createElement("div");
    newelement.id = "top_message";
    newelement.style.height = message_height
    document.getElementById("root").insertBefore(newelement, document.getElementById("root").firstChild);
    document.getElementById("top_message").innerHTML = "<section>qwq</section>";
    // setTimeout(function() {
    // height1 = document.getElementById("top_message").style.getPropertyValue("height");
        // height = height1.style.
        // console.log(height1);
    document.getElementById("header_mode2").style.setProperty("top", message_height);
    
    // }, 1300)

}

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
