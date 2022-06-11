// document.write("<div id='div_process'><div id='process'></div></div>")

var process = document.createElement('div');
process.id = 'div_process';
var body = document.getElementsByTagName('body')[0];
document.body.appendChild(process);
// document.body.insertBefore(process, document.body.firstElementChild)
document.getElementById('div_process').innerHTML = "<div id='process'>";

document.onreadystatechange = function() {
    // if (document.readyState == 'interactive' ) {
    //     document.getElementById('process').style.animationName = 'process50';
    // }
    if (document.readyState == 'loading') {
        document.getElementById('process').style.animationName = 'process75';
        document.getElementById('process').style.animationDuration = '1.5s';
        // document.getElementById('process').style.width = '50%';
    }
    // if (document.readyState == 3 ) {
    //     document.getElementById('process').style.animationName = 'process75';
    // }
    if (document.readyState == 'complete') {
        document.getElementById('process').style.animationName = 'process100';
        // document.getElementById('process').style.width = '100%'
        document.getElementById('div_process').style.animationName = 'process_leave'
        document.getElementById('process').style.animationDuration = '1.5s';
    }
}