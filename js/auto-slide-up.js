!function (){ 
    let specialTags = document.querySelectorAll('[data-x]');
    for(let i =0;i < specialTags.length;i++){
        specialTags[i].classList.add('offSet');
    }
    setTimeout(function(){
        findClosestAndRemoveOffset()
    }, 1500)
    window.addEventListener('scroll',function(){
        findClosestAndRemoveOffset();
    })


    function findClosestAndRemoveOffset(){
        let specialTags = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        for(let i =1;i < specialTags.length;i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
                minIndex = i;
            }
        }
        specialTags[minIndex].classList.remove('offSet');
        var id = specialTags[minIndex].id;
        let a = document.querySelector('a[href="#' + id + '"]');
        let li = a.parentNode;
        let brothers = li.parentNode.children;
        for(let i = 0;i< brothers.length;i++){
            brothers[i].classList.remove('highLight');
        }
        li.classList.add('highLight');
    }

    let liTags = document.querySelectorAll('nav > ul > li');
            // console.log(liTags);
            for(let i = 0;i<liTags.length;i++){
                liTags[i].onmouseenter = function(x){
                    li = x.currentTarget.classList.add('active');
                }
            }
            for(let i = 0;i<liTags.length;i++){
                liTags[i].onmouseleave = function(x){
                    li = x.currentTarget.classList.remove('active');
                }
            }
}.call()
