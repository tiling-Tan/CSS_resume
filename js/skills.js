import $ from 'jquery'

let description = {
    'HTML': '掌握 HTML 元素的使用，理解其语义化标签的作用并能够写出结构清晰的页面。掌握 HTML5 新元素如 canvas 、 nav 等的使用。',
    'CSS': '掌握 CSS 盒模型、媒体查询等的使用，此外熟练使用 CSS3 动画、转换、过渡、弹性盒子布局、盒阴影等，能够利用 CSS 布局网页及实现精美的效果。',
    'JavaScript': '掌握 JavaScript ，如作用域、闭包、 DOM 操作等。能够使用 ES6 语法，如 let 、 const 、 箭头函数、模板字面量、解构赋值、模块、类和 Promise 等。',
    'Vue': '熟悉 Vue 常用功能，理解生命周期、组件、数据响应式等概念，拥有使用 Vue 开发项目的经历,了解组件及组件间数据传递的使用、路由和 Vuex 等。',
    'JQuery': '熟悉 jQuery 常用 API 的使用，如 Ajax 、 DOM 操作相关、特效、事件等。',
    '移动端开发': '会使用 REM 、 vw / vh 、 媒体查询等技术制作适配手机设备的页面',
    'Node.js': '了解 Node.js，曾使用node.js开发简单的后台服务器。',
    '其他': '理解 MVC 、 MVVM 思想，掌握 HTTP 基础；了解 Webpack 的基本使用。',
}
let selected = $('.skills-inner li')
for (let i = 0; i < selected.length; i++) {
    $(selected[i]).mouseenter(showDetails)
}

function showDetails(e) {
    let name = e.currentTarget.dataset.name
    $('.description h3')[0].innerHTML = name
    $('.description p')[0].innerHTML = description[name]
}
$(selected[0]).mouseenter()