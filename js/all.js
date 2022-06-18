// setTimeout (function() {
//     document.getElementById('message_warn').style.animationName = 'message_out';
//     setTimeout (function() {
//         document.getElementById('message_warn').style.display = 'none';
//     }, 1000)
// }, 10000)

// window.onload = 

// var footer = "<hr id='foothr'><footer>Made by hankarry</footer>";
// var foot = document.createElement('div');
// foot.id = 'foot';
// document.getElementsByTagName('body')[0].appendChild(foot);
// document.getElementById('foot').innerHTML = footer

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

var d = new Date;
var birthday_count = 19 - d.getDate();
// var birthday = 19 - day;
// var birthday_count = 19 - day;
// console.log (day)
if (birthday_count == 0) {
    birthday_text = "今天是咱的生日!"
}
if (birthday_count > 0) {
    birthday_text = "还有" + String(birthday_count) + "天是咱生日哦~"
}
if (birthday_count < 0) {
    birthday_text = ""
}
// document.write = "<div id='top_message'><img src='/css/hud/cake.svg' width='25' height='25'><section>咱的生日快到啦</section></div>"
var newelement = document.createElement("div");
newelement.id = "top_message";
document.getElementById("body").insertBefore(newelement, document.getElementById("body").firstChild)
document.getElementById("top_message").innerHTML = "<img src='/css/hud/cake.svg' width='25' height='25'><section>" + birthday_text + "🎉</section>"