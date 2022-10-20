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
var footer = "<hr id='footer_hr'><footer>Made by 寒karry<br>纯Html,css,js制作<br>Version3.1.0</footer>";
var foot = document.createElement('div');
foot.id = 'foot';
document.getElementById("body").appendChild(foot);
document.getElementById('foot').innerHTML = footer