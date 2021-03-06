!function () {
    var view = document.querySelector('nav.menu')

    var controller = {
        view: null,
        aTags: null,
        init: function (view) {
            this.view = view
            this.initAnimation()
            this.bindEvents()
        
        },
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
                }
            requestAnimationFrame(animate);
        },
        scrollToElement: function (element) { 
            let top = element.offsetTop;
    
            //滚动开始
            let currentTop = window.scrollY;
            let targetTop = top - 65;
            let S = targetTop - currentTop;  //路程
            let t = Math.abs((S/100)*300);  //时间
            if(t > 500){
                t = 500;
            }
            const coords = { y: currentTop };   //起始位置
            const tween = new TWEEN.Tween(coords)   //起始位置
                .to({ y: targetTop }, t)    //结束位置和时间
                .easing(TWEEN.Easing.Quadratic.InOut)  //缓动类型
                .onUpdate(function() { 
                   window.scrollTo(0,coords.y);  //更新界面
                })
                .start();   //开始缓动
        },
        bindEvents: function () {
            let aTags = this.view.querySelectorAll('nav.menu > ul > li > a');
            for(var i = 0;i < aTags.length;i++){
                aTags[i].onclick = (x) => {
                    x.preventDefault();
                    let a = x.currentTarget;
                    let href = a.getAttribute('href'); //'#siteAbout'
                    if(href[0] === '#'){
                        let element = document.querySelector(href);
                        this.scrollToElement(element)
                    }else{
                        window.open(href)
                    }
                }
            }
        }
        
    }

    controller.init(view)
}.call()
