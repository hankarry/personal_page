// function AddSheetFile(path) {
//     var fileref = document.createElement("link")
//     fileref.rel = "stylesheet";
//     fileref.type = "text/css";
//     fileref.href = path;
//     var head = document.getElementsByTagName('body')[0];
//     head.insertBefore(fileref, head.childNodes[3]);
//     // appendChild()方法在最后插入
// }
// AddSheetFile("/css/loading.css");

var anim = document.createElement("style")
anim.innerHTML = "@keyframes loading_show {0% {opacity: 0;}100% {background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); opacity: 1;}}@keyframes loading_hide {0% {background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); opacity: 1;}100% {opacity: 0;}}@keyframes loading_font_show {0% {font-size: 8vw;}25% {font-size: 12vw;}50% {font-size: 9.75vw;}70% {font-size: 10.25vw;}100% {font-size: 10vw;}}@keyframes loading_font_hide {0% {font-size: 10vw;}25% {font-size: 10.25vw;}50% {font-size: 9.75vw;}70% {font-size: 12vw;}100% {font-size: 8vw;}}"
document.head.appendChild(anim)

var create = document.createElement("div");
create.id = "loading";
create.style = "position: fixed;z-index: 60;top: 0;width: 100vw;height: 100vh;animation-name: loading_show;animation-fill-mode: both;animation-duration: 1s;animation-delay: 0s;animation-timing-function: ease;"
document.body.insertBefore(create, document.body.childNodes[3]);
var create_child = document.createElement("section")
create_child.id = "loading_section"
create_child.style = "position: absolute;width: 90vw;color: rgb(80, 153, 198);margin: 40vh auto 40vh auto;font-size: 8vw;text-align: center;animation: loading_font_show 1s ease 0s 1 normal both; padding-left: 25px;"
document.getElementById("loading").appendChild(create_child)
document.getElementById("loading_section").innerHTML = "Loading..."

setTimeout (function(){
    var load = document.getElementById("loading").style;
    // load.animation = "loading_show 1s ease 0s 1 reverse both";
    load.animationName = "loading_hide";
    load.animationDelay = "0.5s";
    // load.animationDirection = "reverse"
    // load.animationDuration = "1s"
    var load_section = document.getElementById("loading").lastChild.style;
    load_section.animationName = "loading_font_hide";

    // document.getElementById("loading").lastChild.style.animation = "loading_font_show 1s ease 0s 1 reverse both";
    // document.getElementById("loading").lastChild.style.animationDirection = "reverse"
}, 2000)
setTimeout (function(){
    document.getElementById("body").style.display = "block";
    document.getElementById("body").style.animationName = "";
}, 2500)
setTimeout (function(){
    document.getElementById("loading").style.display = "none";
}, 3000)