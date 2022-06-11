// document.createElement('div').id = 'header'
// AddSheetFile("css/all.css");

function AddSheetFile(path) {
    var fileref = document.createElement("link")
    fileref.rel = "stylesheet";
    fileref.type = "text/css";
    fileref.href = path;
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(fileref, head.childNodes[4]);
    // appendChild()方法在最后插入
}
AddSheetFile("/css/header.css")


// 导航栏数量,当前导航栏1的id,当前导航栏2的id,导航栏2的html
function Headers(number, now_page1, now_page2, header2_gui) {
    
    // document.write("<div id='header'></div>")
    var header = document.createElement('div');
    header.id = "header";
    document.getElementsByTagName('body')[0].insertBefore(header, document.body.firstChild);
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

    document.getElementById(now_page1).style.backgroundColor = "var(--backgroundcolor)"
    if (number == 2) {
        // document.getElementsByTagName('body')[0].write = "<script src = 'js/header2.js'></script>";
        // var script = document.createElement('script');
        // script.src = 'js/header2.js';
        // document.getElementsByTagName('body')[0].appendChild(script);
        // script.innerHTML = 'getheader2(' + String(header2_gui) +');heade2_backgroundset(' + String(now_page2) + ')'

        
            // if (header2_gui == "me") {
        
            //     page_request("header2_me.html")
            // }
        
        
        
        
        // function page_request(page) {
        
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
        
        // }
    }
}
