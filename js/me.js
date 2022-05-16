document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        $(".loading_div").hide();
        $('body').css('overflow','scroll');
    }
}