function jstoend(js_path) {
    var js = document.createElement('script');
    js.src = js_path
    js.type = "text/javascript"
    document.getElementsByTagName('html')[0].appendChild(js)
}

jstoend("/js/all.js")