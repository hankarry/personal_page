var x = 0
function showhide() {
    if (x == 0) {

        document.getElementById('server_detail_mumble').style.display="block";
        // document.getElementById('server_detail_mumble').style.animationName = "hidefrom";
        document.getElementById('server_detail_mumble').style.animationName = "showfrom_top";
        x = x + 1;
    }

    if (x == 1) {
        
        document.getElementById('server_detail_mumble').style.display="none";
        document.getElementById('server_detail_mumble').style.animationName = "hidefrom";
        x = x - 1;
    }
}
document.getElementById('server_detail_mumble').addEventListener("click", showhide);
