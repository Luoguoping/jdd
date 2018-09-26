window.addEventListener('load', function () {
        /* 创建对象  */
        var jdCategory = new JdCategory();

        /* 调用初始化分类左侧滑动 */
        jdCategory.initLeftSlidee();
        
        /* 调用初始化右侧滑动 */
        jdCategory.initRightSlidee();

        /* 调用左侧吸顶效果 */
        jdCategory.leftCeiling();

})


var JdCategory = function () {
        /* 声明一个函数 */
}

/* 这个函数的原型 */
JdCategory.prototype = {
        /* 左侧触摸滚动事件 */
        initLeftSlidee:function(){
                var swiper = new Swiper('.category-left .swiper-container', {
                        direction: 'vertical',
                        slidesPerView: 'auto',
                        freeMode: true,
                        scrollbar: {
                                el: '.swiper-scrollbar',
                        },
                        mousewheel: true,
                });
        },
      
        /* 右侧触摸滚动事件 */
        initRightSlidee:function(){
                var swiper = new Swiper('.category-right .swiper-container', {
                        direction: 'vertical',
                        slidesPerView: 'auto',
                        freeMode: true,
                        scrollbar: {
                                el: '.swiper-scrollbar',
                        },
                        mousewheel: true,
                });
        },

        /* 左侧点击吸顶效果 */
        leftCeiling:function(){
                //给所有的li添加点击事件
                //当需要给很多子元素添加重复的 事件的时候可以给父元素添加 使用事件捕获 捕获到子元素
                var ul = document.querySelector('.category-left ul');
                //给ul添加的点击事件
                //获取到所有的li
                lis = ul.children;
                // console.log(lis);
                //给li标签添加index
                for (var i = 0; i <lis.length; i++) {
                        lis[i].index=i;
                }
                ul.addEventListener('click',function(e){
                        //真正触发的是子元素
                        var li = e.target.parentNode;
                        console.log(li.index);
                        //获取当前点击li的索引
                        var index = li.index;
                        // console.log(index);
                        //获取当前点击li的高度
                        var liHeight = li.offsetHeight;
                        // console.log(liHeight);
                        //计算当前需要位移的距离
                        var distanceY = -index*liHeight;
                        console.log(distanceY);
                        //判断当前位移的距离是否大于最大的 位移的距离,
                        // 如果大于就使用当前计算的  如果小于使用最大位移距离
                        //因为是往上移动  距离是负值
                        var maxDistanceY = document.querySelector('.category-left').offsetHeight-ul.offsetHeight
                        console.log(maxDistanceY);
                         //判断当前位移的距离是否大于最大的 位移的距离,
                        // 如果大于就使用当前计算的  如果小于使用最大位移距离
                        if(distanceY>maxDistanceY){
                                //给当前swiper滑动的 所有图片的容器元素设置位移
                                ul.parentNode.parentNode.style.transform = 'translate3d(0px,'+distanceY+'px,0px)';
                        }else{
                                ul.parentNode.parentNode.style.transform = 'translate3d(0px,'+maxDistanceY+'px,0px)';
                        }
                        //给当前的位移的元素添加一个过渡效果让它慢慢位移
                        ul.parentNode.parentNode.style.transitionDuration = '300ms';
                        //给所有的li删除active 给当前的li添加active
                        for (let i = 0; i < lis.length; i++) {
                                lis[i].classList.remove('active');
                                
                        }
                        li.classList.add('active');
                });
                

        }
       
}