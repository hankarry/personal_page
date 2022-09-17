function showhide(button, detail, text) {
    if (document.getElementById(detail).style.display == "block") {

        document.getElementById(detail).style.animationName = "max_height_backward";
        // document.getElementById(text).style.animationName = "hidefrom_text";
        // document.getElementById(text).style.animationDelay = "0s";
        

        document.getElementById(button).style.animationName = "button_360";

        //setTimeout的第一个参数必须是需要编译的代码或者是一个函数方法，而如果直接传入一行可执行代码，那么抱歉，这里会立即执行，没有延迟效果。
        setTimeout (function() {document.getElementById(detail).style.display='none'}, 510)
        
    }
    else {
    // document.getElementById(text).style.animationName = "show_top_text";
    // document.getElementById(text).style.animationDelay = "0.5s";
    document.getElementById(detail).style.display = "block";
    document.getElementById(detail).style.animationName = "max_height_forward";
    
    document.getElementById(button).style.animationName = "button_180";
    }
}

var servers_state = ['server_state_minecraft', 'server_state_Unturned', 'server_state_mumble'];
// window.onload = function () {
    for (var i = 0; i < servers_state.length; i++) {
        if (document.getElementById(servers_state[i]).innerText == '关闭') {
            document.getElementById(servers_state[i]).style.color = 'red';
        }
        else {
            if (document.getElementById(servers_state[i]).innerText == '开启') {
                document.getElementById(servers_state[i]).style.color = 'green';
            }
        }
    }
// }

function address_copy(ele) {
    // console.log(ele.parentNode.innerText);
    navigator.clipboard.writeText(ele.parentNode.innerText);
}

function show_copybutton(ele) {
    for (i=0; i<ele.children.length; i++) {
        if (ele.children[i].className == "copy_div") {
            console.log(ele.children[i].style.display);
            ele.children[i].style.visibility = "visible";
        }
    }
}

function hide_copybutton(ele) {
    for (i=0; i<ele.children.length; i++) {
        if (ele.children[i].className == "copy_div") {
            console.log(ele.children[i].style.display);
            ele.children[i].style.visibility = "hidden";
        }
    }
}