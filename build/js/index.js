$(function(){
    var number=$('.banner ul li').size()-1;
    var cur=0;
    var timer=setInterval(slideNext,2000);

    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function(){
        timer=setInterval(slideNext,2000);
    });

    //点击左右箭头
    $('.banner .next').click(function(){
        slideNext();
    });
    $('.banner .prev').click(function(){
        slidePrev();
    });

    //小圆点
    $('.indicator em').mouseover(function(){
        var now=$(this).index();
        if(now!=cur){
            $('.banner ul li').eq(cur).stop().fadeOut();
            $('.banner ul li').eq(now).stop().fadeIn();
            $('.indicator em').removeClass().eq(now).addClass('active');
            cur=now;
        }
    });

    //下一张
    function slideNext(){
        if(cur<number){
            $('.banner ul li').eq(cur).stop().fadeOut();
            $('.banner ul li').eq(cur+1).stop().fadeIn();
            $('.indicator em').removeClass().eq(cur+1).addClass('active');
            cur++;
        }else{
            $('.banner ul li').eq(cur).stop().fadeOut();
            $('.banner ul li').eq(0).stop().fadeIn();
            $('.indicator em').removeClass().eq(0).addClass('active');
            cur=0;
        }
    }

    //上一张
    function slidePrev(){
        if(cur>0){//上一个
            $('.banner ul li').eq(cur).stop().fadeOut();
            $('.banner ul li').eq(cur-1).stop().fadeIn();
            $('.indicator em').removeClass().eq(cur-1).addClass('active');
            cur--;
        }else{//第一个
            $('.banner ul li').eq(cur).stop().fadeOut();
            $('.banner ul li').eq(number).stop().fadeIn();
            $('.indicator em').removeClass().eq(number).addClass('active');
            cur=number;
        }
    }
    //图片轮播结束
    //优化建议：1，将多次出现的dom对象遍历存到变量中；2，上一个下一个函数整合；3，将图片轮播封装为对象或函数；4，其他。


});









