$(function(){
    var flag=true;
    var clienth=document.documentElement.clientHeight;
    $(".menu").on("click",function(){
        if(flag){
            $(".menu>span:nth-child(1)").css("transform","translate(0,4px) rotate(45deg)");
            $(".menu>span:nth-child(2)").css("transform","translate(0,-8px) rotate(-45deg)");
            $(".lists").css("height",clienth+"px").toggle("slow");
            flag=false;
        }else {
            $(".menu>span:nth-child(1)").css("transform","translate(0,0) rotate(0)");
            $(".menu>span:nth-child(2)").css("transform","translate(0,0) rotate(0)");
            $(".lists").css("height",clienth+"px").toggle("slow");
            flag=true;
        }
    });
    //banner轮播
    var $banner=$("#banner");
    var $bannerbox=$(".banner-box>div");
    var $btn=$("#banner>.btn");
    var $btnLeft=$("#banner .btn-left");
    var $btnRight=$("#banner .btn-right");
    var $listxs=$("#banner .listxs");
    var now=0;
    var next=0;
    var flag1=true;
    var t=setInterval(moveLeft,2000);
    function moveLeft(){
        /*console.log(now)*/
        next++;
        if(next==$bannerbox.length){
            next=0;
        }
        $listxs.css("background","#666666").eq(next).css({background:"#fff",border:"1px solid blue"});
        $bannerbox.eq(now).css({display:"block"});
        $bannerbox.eq(next).css({display:"block",left:"100%"});
        $bannerbox.eq(next).animate({left:"0"});
        $bannerbox.eq(now).animate({left:"-100%"},function(){
            flag1=true;
        });
        now=next;
    }
    $banner.hover(function(){
        $btn.css("display","block");
        clearInterval(t);
    },function(){
        t=setInterval(moveLeft,2000);
        $btn.css("display","none");
    })
    $btnLeft.on("click",function(){
        if(flag1){
            flag1=false;
            moveRight();
        }
    })
    $btnRight.on("click",function(){
        if(flag1){
            flag1=false;
            moveLeft();
        }
    })
    function moveRight(){
        next--;
        if(next<0){
            next=$bannerbox.length-1;
        }
        $listxs.css("background","#666666").eq(next).css({background:"#fff",border:"1px solid blue"});
        $bannerbox.eq(now).css({display:"block"});
        $bannerbox.eq(next).css({display:"block",left:"-100%"});
        $bannerbox.eq(next).animate({left:"0"});
        $bannerbox.eq(now).animate({left:"100%"},function(){
            flag1=true;
        });
        now=next;
    }
    $listxs.on("click",function(){
        $listxs.css("background","#666666");
        $(this).css({background:"#fff",border:"1px solid blue"});
        /*alert($(this).index())*/
        var $index=$(this).index();
        if($index>now){
            $bannerbox.eq($index).css({display:"block",left:"100%"});
            $bannerbox.eq(now).animate({left:"-100%"});
            $bannerbox.eq($index).animate({left:"0"});
        }if($index<now){
            $bannerbox.eq($index).css({display:"block",left:"-100%"});
            $bannerbox.eq(now).animate({left:"100%"});
            $bannerbox.eq($index).animate({left:"0"});
        }
        now=$index;
        next=$index;
    })
    /*****************商品介绍小屏选项卡******************************/
    var flag2=true;
    $("h3").on("click",function(){
        $(this).next($("ul")).toggle("slow");
        if(flag2){
            $(this).next($("ul")).next($(".jia>span:first-child")).css("transform","rotate(45deg)");
            $(this).next($("ul")).next($(".jia>span:last-child")).css("transform","rotate(-45deg)");
            flag2=false;
        }else{
            $(this).next($("ul")).next($(".jia>span:first-child")).css("transform","rotate(0)");
            $(this).next($("ul")).next($(".jia>span:last-child")).css("transform","rotate(0)");
            flag2=true;
        }
    })


})