setTimeout(function(){
    document.getElementById("body").style.display = "block";
}, 6000)

setTimeout(function(){
    document.getElementById("loading").style.display = "none";
}, 10000)

function pageleave() {
    document.getElementById("bodyleave").style.display = "block";
    document.getElementById("bodyleave").style.animationName = "body_leave";
    // document.getElementById("card_1").style.animationDuration = "2s";
    setTimeout(function() {
        // document.getElementById("body_right_content").style.display = "none";
        document.getElementById("bodyleave").style.width = "100vw";

        location.href = '/index_main.html';
    }, 1000)
}