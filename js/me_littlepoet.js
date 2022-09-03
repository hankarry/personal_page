// // document.getElementById('head2_littlepoet').onclick = ''

// // var getcard = document.getElementsByClassName('card_small')
// // for (i = 0; i < getcard.length; i++) {
// //     getcard[i].style.animationDelay = String(0.5 * i) + 's';
// // }

// // IntersectionObserver对象 https://www.cnblogs.com/WindrunnerMax/p/15587653.html
// // console.log(1)
// function see(IntersectionObserverEntry) {
//     // if (IntersectionObserverEntry["0"].isIntersecting == true) {
//         // console.log(IntersectionObserverEntry)
//         console.log(IntersectionObserverEntry["0"])
//         IntersectionObserverEntry["0"].target.visibility = "visible";
//         IntersectionObserverEntry["0"].target.animationName = "show_from_right";
//     // }
// }

// // 参数callback，创建一个新的IntersectionObserver对象后，当其监听到目标元素的可见部分穿过了一个或多个阈thresholds时，会执行指定的回调函数。
// // 参数option，IntersectionObserver构造函数的第二个参数是一个配置对象，其可以设置以下属性:
// // threshold属性决定了什么时候触发回调函数，它是一个数组，每个成员都是一个门槛值，默认为[0]，即交叉比例intersectionRatio达到0时触发回调函数，用户可以自定义这个数组，比如[0, 0.25, 0.5, 0.75, 1]就表示当目标元素0%、25%、50%、75%、100%可见时，会触发回调函数。
// // root属性指定了目标元素所在的容器节点即根元素，目标元素不仅会随着窗口滚动，还会在容器里面滚动，比如在iframe窗口里滚动，这样就需要设置root属性，注意，容器元素必须是目标元素的祖先节点。
// // rootMargin属性定义根元素的margin，用来扩展或缩小rootBounds这个矩形的大小，从而影响intersectionRect交叉区域的大小，它使用CSS的定义方法，比如10px 20px 30px 40px，表示top、right、bottom和left四个方向的值。
// var ObserverOption = {
//     threshold: [0.5]
// }
// var Observer = new IntersectionObserver(see, ObserverOption)
// // Object.defineProperty
// // Observer.thresholds = [1];
// // Observer.
// var target_class = document.getElementsByClassName("Scroll_Show");
// // var target_id = document.getElementById("Scroll_Show");
// for (var i = 0; i < target_class.length; i++) {
//     Observer.observe(target_class[i]);
// }
// // Observer.observe(target_class)
//     // show_from_right 

var Html = document.getElementsByTagName("html")[0];
var scroll_target = document.querySelectorAll(".Scroll_Show");
var window_height = window.innerHeight;
scroll_target_num = scroll_target.length;

var already_show = []
var elements_top = []
setTimeout(function() {
    for (var i=0; i<scroll_target.length; i++) {
        already_show.push("false");
        var eleheight = scroll_target.item(i).offsetTop - scroll_target.item(i).clientHeight;
        elements_top.push(eleheight);
        // offsetHeight	元素在页面中占据的高度总和，包括 height、padding、border 以及滚动条的宽度
        // clientHeight	获取元素可视部分的高度，即 CSS 的 height 和 padding 属性值之和，元素边框和滚动条不包括在内，也不包含任何可能的滚动区域
        
        // console.log(already_show)
        // console.log(eleheight)
        
    //     // var dis = scroll_target[2].
    }

    for (var i=0; i<scroll_target.length;i++) {
        var dis = Html.scrollTop;
        var scroll_height = dis + window_height
        // console.log(already_show)

        if (scroll_height > elements_top[i] && already_show[i] == "false") {
            
            scroll_target[i].style.visibility = "visible";
            // scroll_target[i].style.display = "block";
            scroll_target[i].style.animationName = "show_from_right";
            already_show[i] = "true";

        }
    }

    // var scroll_target = document.getElementsByClassName("card_small");
    window.onscroll = function() {
        var dis = Html.scrollTop;
        var scroll_height = dis + window_height
        // console.log("HTML滚动高度: " + scroll_height);
        // console.log(elements_top[1])

        // var scroll_top
        for (var i=0; i<scroll_target.length; i++) {
            // console.log("元素" + i + "高度: " + elements_top[i])
            
            // 以i的值作为输入
            if (scroll_height > elements_top[i] + 100 && already_show[i] == "false") {
                // console.log(ele_top)
                scroll_target[i].style.visibility = "visible";
                // scroll_target[i].style.display = "block";
                scroll_target[i].style.animationName = "show_from_right";
                already_show[i] = "true";
            }

        }
    }
}, 1000)

