色号
警告#2bdae4
警告(圆)#45a4f6
error#fa0804
warn#f9e600

右下角警告

    <div class="message_warn">
        <div class="message_warn_div">
            <img src="/css/hud/warn.svg" height="25" width="25"><section></section>
        </div>
    </div>


CSS动画适配

    animation-name: message_into, message_out;
    -o-animation-name: message_into, message_out;
    -moz-animation-name: message_into, message_out;
    -webkit-animation-name: message_into, message_out;
    -ms-animation-name: message_into, message_out;

    animation-delay: 0s, 10s;
    -o-animation-delay: 0s, 10s;
    -moz-animation-delay: 0s, 10s;
    -webkit-animation-delay: 0s, 10s;
    -ms-animation-delay: 0s, 10s;

    animation-duration: 1s, 1s;
    -o-animation-duration: 1s, 1s;
    -moz-animation-duration: 1s, 1s;
    -webkit-animation-duration: 1s, 1s;
    -ms-animation-duration: 1s, 1s;

    animation-fill-mode: ;
    -o-animation-fill-mode: ;
    -webkit-animation-fill-mode: ;


error

    <div class="error">
        <div class="error_div">
            <img src="/css/hud/error.svg" width="25" height="25"><section></section>
        </div>
    </div>

Windows logo
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 128 128" enable-background="new 0 0 128 128">
        <rect fill="#FFFFFF" width="60.834" height="60.835"></rect>
        <rect x="67.165" fill="#FFFFFF" width="60.835" height="60.835"></rect>
        <rect y="67.164" fill="#FFFFFF" width="60.834" height="60.836"></rect>
        <rect x="67.165" y="67.164" fill="#FFFFFF" width="60.835" height="60.836"></rect>
    </svg>
apple logo
<svg version="1.1" id="base" xmlns="http://www.w3.org/2000/svg" class="SVGIcon_Button SVGIcon_AppleLogo" x="0px" y="0px" width="256px" height="256px" viewBox="0 0 256 256">
    <path d="M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z"></path>
    <path d="M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z"></path></svg>
steam logo
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" class="SVGIcon_Button SVGIcon_SteamLogo" x="0px" y="0px" viewBox="0 0 256 256">
    <path fill="#ffffff" d="M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355"></path>
    <path fill="#ffffff" d="M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387"></path>
    <path fill="#ffffff" d="M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306"></path>
</svg>

1.根据id获取元素

document.getElementById("id属性的值");

2.根据标签名字获取元素

document.getElementsByTagName("标签的名字");

3.根据name属性的值获取元素

document.getElementsByName("name属性的值");

4.根据类样式的名字获取元素

document.getElementsByClassName("类样式的名字");

5.根据选择器获取元素

1.document.querySelector("选择器");

2.document.querySelectorAll("选择器");

原生js实现页面滚动动画
https://www.jb51.net/article/234248.html

判断当前元素是第几个元素
https://www.bbsmax.com/A/ke5jEAXVJr/

大教训
不要 不要 不要太相信vscode的自动填充 offestTop就是个大栗子

https://www.nhooo.com/note/qa047f.html
如何从JavaScript中的变量值创建对象属性？
JS有2种用于创建对象属性的符号，即点符号和方括号符号。

要从变量创建对象属性，您需要通过以下方式使用方括号表示法-

示例
const obj = {a: 'foo'}
const prop = 'bar'
//设置属性栏
obj[prop] = 'baz'
console.log(obj);
输出结果

这将给出输出-

{
   a: 'foo',
   bar: 'baz'
}
ES6引入了计算属性名称，您可以执行以下操作：

示例
const prop = 'bar'
const obj = {
   //使用as键
   a: 'foo',
   //使用prop的值作为键
   [prop]: 'baz'
}
console.log(obj);
输出结果

这将给出输出-

{
   a: 'foo',
   bar: 'baz'
}

https://blog.csdn.net/peonyc/article/details/88752986

html 盒子水平居中和水平垂直居中的一些方法
https://blog.csdn.net/Suowi/article/details/123384501

为什么 :before 和 :after 伪元素需要 'content' 属性？
https://www.likecs.com/ask-523800.html

javascript - 我的网站如何检测浏览器是否使用暗色/浅色主题，而不是操作系统使用主题色？
https://www.nuomiphp.com/eplan/184298.html

JS中onclick事件四种传参方式
https://wenku.baidu.com/view/8a13f03117791711cc7931b765ce050876327579.html

怎么制作HTML5页面让它适应电脑和手机
https://blog.csdn.net/lyq2534480922/article/details/79697746
https://blog.csdn.net/violetjack0808/article/details/71405896/

https://www.zyglq.cn/