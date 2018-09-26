/* 等页面加载完后执行的函数
        等页面资源都加载完毕才执行js代码 */
window.addEventListener('load',function(){
        //1获取header顶部元素
        var header = document.querySelector('#header')
        //2获取滚动条滚动的距离 需要添加一个滚动条滚动事件在事件里去获取
        window.addEventListener('scroll',function(){
                //3在滚动条事件里获取滚动的距离
                var scrollTop = document.documentElement.scrollTop;
                // console.log(scrollTop);
                //4获取轮播图的高度来计算
                var section = document.querySelector('#section').offsetHeight;
                // console.log(section);
                //5计算当前滚动里面的透明度值 距离/轮播图高度
                var  opacity = scrollTop/section;
                // console.log(opacity);
                //6判断当前透明度是否大于1
                if(opacity>1){
                        //7如果透明度大于1就设置为1
                        header.style.backgroundColor = 'rgb(222, 24, 27, 1)';
                }else{
                        //8如果透明度小于1 就设置为当前计算的透明度
                        header.style.backgroundColor = 'rgb(222, 24, 27, '+opacity+')';
                }        
        });
                
        //倒计时js
        //获取未来的时间 new Date()参数
        //比如今天下午6点的时间 月份是从0-11 月份减少1月 按照年月日 时分秒 每个数字用逗号隔开
        // getTime()方法是获取一个时间的毫秒数
        // var futureTime = new Date(2018,8,22,18,00,00).getTime();
        // 转换成秒需要/1000
        // 需要向下取整
        var futureTime = Math.floor(new Date(2018,8,22,24,00,00).getTime()/1000);
        // 这是未来时间 现在是写死的
        console.log(futureTime);
        var nowTime = Math.floor(new Date().getTime()/1000);
        // 这是当前事件
        console.log(nowTime);

        //未来时间和当前时间的差=futureTime-nowTime
        var time = futureTime-nowTime;
        console.log(time);
        // 计时器的容器
        var spans = document.documentElement.querySelectorAll('.count-down span');

        // 定义一个定时器  让总时间每隔1秒--
        setInterval(function(){
                time-- ;
                if(time <= 0){
                        //写死的一个时间  真正开发使用重新请求后台的时间
                        time = 7200;
                }
                //求出当前秒数的小时 分钟 秒数 
                //小时 因为1小时是3600秒 总秒数/3600就是小时数
                //向下去整得到小时
                var hour = Math.floor(time/3600);
                // console.log(hour);
                //分钟 一分钟60秒 去掉小时的部分 总时间%3600 剩下的秒/60 得出分钟
                var minute = Math.floor(time%3600/60);
                // console.log(minute);
                // 秒数 总时间% 60 只要%不尽60 都是秒部分
                var second = Math.floor(time%60);
                // console.log(second);
                // 把对应的事件放到时间容器里面  十进制
                spans[0].innerHTML = Math.floor(hour/10);
                // 小时的个位数就是%10 取模10  
                spans[1].innerHTML = Math.floor(hour%10);
                //分钟
                spans[3].innerHTML = Math.floor(minute/10);
                spans[4].innerHTML = Math.floor(minute%10);
                //秒
                spans[6].innerHTML = Math.floor(second/10);
                spans[7].innerHTML = Math.floor(second%10);

        },1000)


        /* 轮播图区域 */
        var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                
                // autoplay: true,//可选选项 自动滑动
                autoplay: {
                        delay: 3000,
                        stopOnLastSlide: true,
                        disableOnInteraction: true,
                        },
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                
                // 如果需要滚动条
               
              })        




})