// var alljs = document.createElement('script');
// alljs.src = 'js/all.js'
// document.getElementsByTagName('html')[0].appendChild(alljs);

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