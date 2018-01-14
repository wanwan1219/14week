/**
 * Created by 000 on 2017/11/1.
 */
window.onload=function(){
    function cla(a){
        return document.getElementsByClassName(a);
    }
    (function(){
        var resizeEvt='orientationchange' in window ? 'orientationchange':'resize',
            banner=cla("banner")[0],
            ul=banner.children[0],
            lis=ul.children,
            hh=lis[0].offsetHeight,
            len=lis.length,
            index= 1;
        window.addEventListener(resizeEvt,function(){
            hh=lis[0].offsetHeight;
        });
        var timer=setInterval(next,1000);
        banner.addEventListener("touchstart",function(e){
            clearInterval(timer);
        });
        banner.addEventListener("touchend",function(e){
            timer=setInterval(next,1000);
        });
        ul.addEventListener("transitionend",function(){
            if(index>=len-2){
                index=1;
            }
            ul.style.transition='none';
            ul.style.top=-index*hh+'px';
        });
        function next(){
            index++;
            ul.style.transition="top 0.5s linear 0s";
            ul.style.top=-index*hh+'px';
        }
    })();

    (function(){
        var resizeEvt='orientationchange' in window ? 'orientationchange':'resize',
            banner1=cla("banner1")[0],
            ul=banner1.children[0],
            lis=ul.children,
            ww=lis[0].offsetWidth,
            len=lis.length,
            index= 1;
        var start= 0,end= 0,cha= 0,step= 0,move= 0,fa=true;
        console.log(ww);
        window.addEventListener(resizeEvt,function(){
            ww=lis[0].offsetWidth;
        });
        var timer=setInterval(next,1000);
        banner1.addEventListener("touchstart",function(e){
            start= e.touches[0].pageX;
            clearInterval(timer);
        });
        banner1.addEventListener("touchend",function(e){
            end=e.changedTouches[0].pageX;
            cha=end-start;
            if(cha>1/3*ww&&fa==true){
                fa=false;
                prev();
            }else if(cha<-1/3*ww&&fa==true){
                fa=false;
                next();
            }else{
                ul.style.transition="left .5s linear 0s";
                ul.style.left=-index*ww+"px";
            }
            timer=setInterval(next,1000);
        });
        banner1.addEventListener("touchmove",function(e){
            move= e.touches[0].pageX;
            step=move-start;
            ul.style.left=-index*ww+step+"px";
        });
        ul.addEventListener("transitionend",function(){
            if(index<=0){
                index=len-2;
            }
            if(index>=len-1){
                index=1;
            }
            ul.style.transition="none";
            ul.style.left=-index*ww+"px";
            fa=true;
        });
        function next(){
            index++;
            ul.style.transition="left 0.5s linear 0s";
            ul.style.left=-index*ww+'px';
        }
        function prev(){
            index--;
            ul.style.transition="left .5s linear 0s";
            ul.style.left=-index*ww+"px";
        }
    })();
    (function(){
        var banner2=cla("banner2")[0],
            ul=banner2.children[0],
            maxWw=ul.offsetWidth-banner2.offsetWidth,
            left=0, start= 0,move= 0,step= 0,end=0;
        banner2.addEventListener("touchstart",function(e){
            start=e.touches[0].pageX;
            left=ul.offsetLeft;
        });
        banner2.addEventListener("touchmove",function(e){
            move= e.touches[0].pageX;
            step=move-start;
            ul.style.left=left+step+"px";
            if( parseInt(ul.style.left)>0){
                ul.style.left=0+"px";
            }
            if( parseInt(ul.style.left)<-maxWw){
                ul.style.left=-maxWw+"px"
            }
        });
    })();
};