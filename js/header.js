// document.createElement('div').id = 'header'

function AddSheetFile(path) {
    var fileref = document.createElement("link")
    fileref.rel = "stylesheet";
    fileref.type = "text/css";
    fileref.href = path;
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(fileref, head.childNodes[4]);
    // appendChild()方法在最后插入
}
AddSheetFile("css/all.css");
AddSheetFile("css/header.css")

document.write("<div id='header'></div>")
var xhttp
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("header").innerHTML = this.responseText;
        // document.getElementsByTagName('body')[0].write = this.responseText
        // document.write = this.responseText
    }
};
xhttp.open("GET", "/header/header.html", false)
xhttp.send()
