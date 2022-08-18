// document.createElement('div').id = 'header'

function AddSheetFile(path) {
    var fileref = document.createElement("link")
    fileref.rel = "stylesheet";
    fileref.type = "text/css";
    fileref.href = path;
    var head = document.getElementsByTagName('head')[0];
    // var body_content = document.getElementById("body_right");
    // head.insertBefore(fileref, head.childNodes[4]);
    head.appendChild(fileref);
    // appendChild()方法在最后插入
}
AddSheetFile("/css/all.css");
AddSheetFile("/css/header_mode_2.css");

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

// // 导航栏数量,当前导航栏1的id,当前导航栏2的id,导航栏2的html
// function Header(number, now_page1, now_page2, header2_gui, transparent) {
//     header_number = number
//     // document.write("<div id='header'></div>")
//     var header = document.createElement("div");
//     header.id = "div_header";
//     // header.innerHTML = "<div id='header'></div>";
//     // document.getElementsByTagName('body')[0].insertBefore(header, document.body.childNodes[2]);
//     document.getElementById("body").insertBefore(header, document.getElementById("body").childNodes[2]);
//     var xhttp
//     xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("div_header").innerHTML = this.responseText;
//             // document.getElementsByTagName('body')[0].write = this.responseText
//             // document.write = this.responseText
//         }
//     };
//     xhttp.open("GET", "/header/header.html", false)
//     xhttp.send()

//     if (transparent == 'true') {
//         AddSheetFile("/css/header_transparent.css")
//     } else {
//         AddSheetFile("/css/header.css")
//     }

//     if (number == 2) {
//         // document.getElementsByTagName('body')[0].write = "<script src = 'js/header2.js'></script>";
//         // var script = document.createElement('script');
//         // script.src = 'js/header2.js';
//         // document.getElementsByTagName('body')[0].appendChild(script);
//         // script.innerHTML = 'getheader2(' + String(header2_gui) +');heade2_backgroundset(' + String(now_page2) + ')'

        
//             // if (header2_gui == "me") {
        
//             //     page_request("header2_me.html")
//             // }
//         AddSheetFile("/css/header2.css")
        
//         var xhttp
//         xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 document.getElementById("header2").innerHTML = this.responseText;
//                 // document.getElementsByTagName('body')[0].write = this.responseText
//                 // document.write = this.responseText
//             }
//         };
//         xhttp.open("GET", header2_gui, false)
//         xhttp.send()
//         document.getElementById(now_page2).style.backgroundColor = "var(--backgroundcolor)"
        
//         document.getElementById(now_page2).onclick = "unset"
//     }
    
//     document.getElementById(now_page1).onclick = "unset"

//     // document.getElementById(now_page1).style.backgroundColor = "var(--backgroundcolor)";
//     document.getElementById(now_page1).style.border = "1px solid black";

//     // document.getElementById(now_page1).style.borderBottom = "unset"

// }

header_loaded = 0;
// 导航栏数量,当前导航栏1的id,当前导航栏2的id,导航栏2的html
function Header(number, page1, page2) {
    if (header_loaded != 1 || header_loaded == undefined){

        header_number = number
        // document.write("<div id='header'></div>")
        var header = document.createElement("div");
        header.id = "div_header";
        // header.innerHTML = "<div id='header'></div>";
        // document.getElementsByTagName('body')[0].insertBefore(header, document.body.childNodes[2]);
        document.getElementById("body").insertBefore(header, document.getElementById("body").childNodes[2]);
        var xhttp
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("div_header").innerHTML = this.responseText;
                // document.getElementsByTagName('body')[0].write = this.responseText
                // document.write = this.responseText
            }
        };
        xhttp.open("GET", "/header/header.html", false)
        xhttp.send()

    }

    // 导航栏已载入
    header_loaded = 1;

    var header_page1 = document.getElementById(page1);
    header_page1.onclick = "";

    // document.getElementById(now_page1).style.backgroundColor = "var(--backgroundcolor)";
    header_page1.style.borderWidth = "2px";
    header_page1.style.borderRadius = "30px 0 0 30px"
    
    if (page2) {
        var header_page2 = document.getElementById(page2);
        header_page2.onclick = "";
        header_page2.style.borderWidth = "1px";
        header_page2.style.backgroundColor = "var(--maincolor_thin3)";
        header_page2.style.borderRadius = "20px 0 0 20px";

        now_page2 = page2;
        now_page2_onclick = document.getElementById(page2).getAttribute("onclick");
    }

    // document.getElementById(now_page1).style.borderBottom = "unset"
    now_page1 = page1;
    now_page1_onclick = document.getElementById(page1).getAttribute("onclick");
    // console.log(document.getElementById(page1).getAttribute("onclick"));
    
}


Ajax_script = 1;
function pageload(herf) {

    var animation_card = document.getElementsByClassName('card');
    var animation_card_small = document.getElementsByClassName('card_small');
    for (var i = 0; i < animation_card.length; i++) {
        animation_card[i].style.animationName = 'goout';
    }
    for (var i = 0; i < animation_card_small.length; i++) {
        animation_card_small[i].style.animationName = 'hide_from_right';
        animation_card_small[i].style.animationDelay = '0s';
    }

    var body_content = document.getElementById("body_right");

    var head_process = document.getElementById('head_process');
    var div_head_process = document.getElementById('div_head_process');

    head_process.style.transitionDuration = "0s"
    head_process.style.width = "0%";

    // 等待动画完成
    setTimeout(function() {
        body_content.innerHTML = "<div class='loadings_style_2'><div class='loading_style_2_1'></div><div class='loading_style_2_2'></div></div>";
        // body_content.style.display = "none";
        // setTimeout(function() {
        //     body_content.innerHTML = "";
        // }, 1000)
        // setTimeout(function() {

        var page1 = document.getElementById(now_page1);
        // console.log(now_page1_onclick);
        page1.setAttribute("onclick", now_page1_onclick);

        // document.getElementById(now_page1).style.backgroundColor = "var(--backgroundcolor)";
        page1.style.borderWidth = "0px";
        page1.style.borderRadius = "30px"
        
        if (now_page2) {
            var page2 = document.getElementById(now_page2);
            // console.log(now_page2_onclick);
            page2.setAttribute("onclick", now_page2_onclick);
            page2.style.borderWidth = "0px";
            page2.style.backgroundColor = "transparent"
            page2.style.borderRadius = "20px 0 0 20px"    
        }

        head_process.style.transitionDuration = "1s"

        var http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (this.readyState == 1) {
                head_process.style.width = "30%";
                div_head_process.style.animationDelay = '0s';
                div_head_process.style.animationName = 'process_in';
            }
            if (this.readyState == 2) {
                head_process.style.width = "60%";
            }
            if (this.readyState == 3) {
                head_process.style.width = "90%";
            }
            if (this.status == 404) {
                head_process.style.backgroundColor = "red";
            }
            if (this.readyState == 4 && this.status == 200) {
                // setTimeout(function() {
                    // body_content.innerHTML = http.responseText;
            
                    var content = http.responseText;
                    
                    // var body_right = content.match("<div id='body_right'[^>]*>[^<]*</div>");
                    // console.log(body_right);
                    body_content.style.display = "none";
                    document.getElementById("body_right").innerHTML = content;

                    // 查找传入的script元素
                    var match_content = /<script[^>]*>[^<]*<\/script>/gmi;
                    var script = content.match(match_content);
                    if (script != null)
                    {
                        // 判断id为script的div元素是否存在
                        if (document.getElementById("script")) {}
                        else {
                            
                            var create_script_div = document.createElement("div");
                            create_script_div.id = "script";
                            document.getElementById("body_right").appendChild(create_script_div);
                        }
                        // console.log(script)
                        // script = script.slice()

                        // 处理传入的script,除去里面带着的<script></script>标签并创建新script元素放入id为script的div
                        for (var i=0; i < script.length; i++) {
                            var scripti = script[i].toString()
                            var scripti = scripti.replace(/<script>/gmi, '');
                            var scripti = scripti.replace(/<\/script>/gmi, '');

                            var newscript_div = document.getElementById("script");
                            var newscript = document.createElement("script");
                            var script_id = "Ajax_script" + String(Ajax_script)
                            newscript.id = script_id;

                            // 判断是否有通过路径指向的script
                            var script_src = scripti.match(/src=\"[^$\"]*\"/gmi)
                            if (script_src != null) {
                                var script_src_replace = script_src.toString();
                                var script_src_replace = script_src_replace.replace(/src=/gmi, "");
                                var script_src_replace = script_src_replace.replace(/\"/gmi, "");
                                newscript.src = script_src_replace
                            }

                            // console.log(script_src_replace);
                            // eval(scripti);
                            
                            newscript_div.appendChild(newscript);
                            
                            document.getElementById(script_id).innerHTML = scripti;
                            
                            head_process.style.width = "100%";
                            div_head_process.style.animationDelay = '1.5s';
                            div_head_process.style.animationName = 'process_leave';
                            Ajax_script += 1;
                        }
                        // document.getElementById("script").innerHTML = script
                    }
                    // console.log(2)
                setTimeout(function() {
                    body_content.style.display = "block";
                }, 500)


                    
                // }, 2000)
                // document.getElementsByTagName('body')[0].write = this.responseText
                // document.write = this.responseText
            }
            
        };
        http.open("GET", herf, true)
        http.send()
        
    // }, 5000)
    }, 1000)

}

function jumpto(herf) {
    // var body_content = document.getElementById("body_right");
    // body_content.innerHTML = "";

    // var http = new XMLHttpRequest();
    // http.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         body_content.innerHTML = this.responseText;
    //         // document.getElementsByTagName('body')[0].write = this.responseText
    //         // document.write = this.responseText
    //     }
    // };
    // http.open("GET", herf, false)
    // http.send()

    var animation_card = document.getElementsByClassName('card');
    var animation_card_small = document.getElementsByClassName('card_small');
    for (var i = 0; i < animation_card.length; i++) {
        animation_card[i].style.animationName = 'goout';
    }
    for (var i = 0; i < animation_card_small.length; i++) {
        animation_card_small[i].style.animationName = 'hide_from_right';
        animation_card_small[i].style.animationDelay = '0s';
    }

    setTimeout(function() {
        window.location.href = herf;
    }, 500)
}

// function header_changemode() {
    
//     var header = document.getElementById("header");
//     // var header2 = document.getElementById("div_header2")
//     header.style.animation = "header1_mode1_hide 1.5s ease 0.3s 1 normal both";
//     // header2.style.animation = "header2_mode1_hide 1.5s ease 0s 1 normal both";
//     setTimeout(function() {
//         // header.style.display = "none"
//         // header2.style.display = "none"
//     }, 2000)

//     if (header_number == 2) {
//         var header2 = document.getElementById("div_header2")
//         // header.style.animation = "header1_mode1_hide 1s ease 1s 1 normal both";
//         header2.style.animation = "header2_mode1_hide 0.5s ease 0s 1 normal both";
//         setTimeout(function() {
//             // header.style.display = "none"
//             header2.style.display = "none";

//         }, 500)
//     }

//     setTimeout(function() {
        
//         document.getElementById("header_mode2").style.display = "block";
//         document.getElementById("body_right").style.animation = "card_move_right 1s ease 0s 1 normal both";
//     }, 2000)

//     document.cookie = "header_mode=2; path=/"
// }

// if (document.cookie == "header_mode=2") {
//     setTimeout(function() {
//         header_changemode()

//     }, 1000)
// }

function ChangeHeaderWidth() {
    var header = document.getElementById("header_mode2")
    var root = document.documentElement
    var button = document.getElementById("flex")
    // console.log(getComputedStyle(document.documentElement).getPropertyValue('--header_mode2_width'))
    var headerw = getComputedStyle(document.documentElement).getPropertyValue('--header_mode2_width')
    // console.log(headerw)

    var header_width_short = "40px";
    var header_width_long = "110px";

    if (headerw == header_width_long) {
        // console.log("y")
        header.style.width = header_width_short
        root.style.setProperty('--header_mode2_width', header_width_short)
        // button.onclick = "ChangeHeaderWidth('60px')"
        button.style.animationName = "button_180"

        var header_main_content = document.getElementsByClassName("header_main_content");
        for (i = 0; i < header_main_content.length; i++) {
            header_main_content[i].style.display = "none"
        }

        var header2 = document.getElementsByClassName("header2_mode2")
        for (i = 0; i < header2.length; i++) {
            header2[i].style.maxHeight = "0px"
        }
    }
    else
    if (headerw == header_width_short) {
        header.style.width = "110px"
        root.style.setProperty('--header_mode2_width', header_width_long)
        // button.onclick = "ChangeHeaderWidth('110px')"
        button.style.animationName = "button_360"
        
        var header_main_content = document.getElementsByClassName("header_main_content");
        for (i = 0; i < header_main_content.length; i++) {
            header_main_content[i].style.display = "block"
        }

        var header2 = document.getElementsByClassName("header2_mode2")
        for (i = 0; i < header2.length; i++) {
            header2[i].style.maxHeight = "200px"
        }
    }
}

// 通过函数放入script(弃用)
// Ajax_script = 1;
// function AddScript(path, content, defer) {
//     var script_div = document.getElementById("script");
//     var script = document.createElement("script");
//     var script_id = "Ajax_script" + String(Ajax_script)
//     script.id = script_id;
//     if (content) {
//         document.getElementById(script_id).innerHTML = content;
//     }
//     if (path) {
//         script.src = path;
//     }
//     // if (defer == "true") {
//         // script.defer = defer;
//     // }
//     script_div.appendChild(script);
//     Ajax_script += 1;
// }