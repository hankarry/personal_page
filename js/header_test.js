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
AddSheetFile("./css/all.css");

// document.write("<div id='header'></div>")
// var xhttp
// xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("header").innerHTML = this.responseText;
//         // document.getElementsByTagName('body')[0].write = this.responseText
//         // document.write = this.responseText
//     }
// };
// xhttp.open("GET", "/header/header.html", false)
// xhttp.send()

// document.createElement('div').id = 'header'
// AddSheetFile("css/all.css");

// 导航栏数量,当前导航栏1的id,当前导航栏2的id,导航栏2的html
function Header(number, now_page1, now_page2, header2_gui, transparent) {
    
    // document.write("<div id='header'></div>")
    var header = document.createElement("div");
    header.id = "header";
    // document.getElementsByTagName('body')[0].insertBefore(header, document.body.childNodes[2]);
    document.getElementById("body").insertBefore(header, document.getElementById("body").childNodes[2]);
    var xhttp
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("header").innerHTML = this.responseText;
            // document.getElementsByTagName('body')[0].write = this.responseText
            // document.write = this.responseText
        }
    };
    xhttp.open("GET", "./header/header.html", false)
    xhttp.send()

    document.getElementById(now_page1).onclick = "unset"

    document.getElementById(now_page1).style.backgroundColor = "var(--backgroundcolor)"
    document.getElementById(now_page1).style.borderBottom = "unset"

    if (transparent == 'true') {
        AddSheetFile("./css/header_transparent.css")
    } else {
        AddSheetFile("./css/header.css")
    }

    if (number == 2) {
        // document.getElementsByTagName('body')[0].write = "<script src = 'js/header2.js'></script>";
        // var script = document.createElement('script');
        // script.src = 'js/header2.js';
        // document.getElementsByTagName('body')[0].appendChild(script);
        // script.innerHTML = 'getheader2(' + String(header2_gui) +');heade2_backgroundset(' + String(now_page2) + ')'

        
            // if (header2_gui == "me") {
        
            //     page_request("header2_me.html")
            // }
        AddSheetFile("./css/header2.css")
        
        var xhttp
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("header2").innerHTML = this.responseText;
                // document.getElementsByTagName('body')[0].write = this.responseText
                // document.write = this.responseText
            }
        };
        xhttp.open("GET", header2_gui, false)
        xhttp.send()
        document.getElementById(now_page2).style.backgroundColor = "var(--backgroundcolor)"
        
        document.getElementById(now_page2).onclick = "unset"
    }
}

function jumpto(href) {
    
    var animation_card = document.getElementsByClassName('card');
    var animation_card_small = document.getElementsByClassName('card_small');
    for (var i = 0; i < animation_card.length; i++) {
        animation_card[i].style.animationName = 'goout';
    }
    for (var i = 0; i < animation_card_small.length; i++) {
        animation_card_small[i].style.animationName = 'hide_from_right';
        animation_card_small[i].style.animationDelay = '0s';
    }

    setTimeout (function() {
        // window.location.href = href;
        var http = new XMLHttpRequest();
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("body").innerHTML = this.responseText
            }
        };
        http.open();
        http.send();
    }, 500)
}
