/**
 * Created by 000 on 2017/10/31.
 */
window.onload=function(){
    (function(){
        var index= 0,k= 0,timer=null;
        $(".banner ol li").hover(function(){
            $(this).addClass("col");
            $(this).siblings().removeClass("col");
            index=$(this).index();
            k=index;
            $(".banner ul li").eq(index).fadeIn().siblings().fadeOut();
        },function(){
            $(this).addClass("col");
            $(".banner ul li").eq(index).fadeIn().siblings().fadeOut();
        });

        function next(){
            index++;
            if(index>$(".banner ol li").length){
                index=0;
            }
            $(".banner ul li").eq(index).fadeIn().siblings().fadeOut();
            k++;
            if(k>$(".banner ol li").length){
                k=0;
            }
            $(".banner ol li").eq(k).addClass("col").siblings().removeClass("col");
        }
        function prev(){
            index--;
            if(index<0){
                index=$(".banner ol li").length-1;
            }
            $(".banner ul li").eq(index).fadeIn().siblings().fadeOut();
            k--;
            if(k<0){
                k=$(".banner ol li").length-1;
            }
            $(".banner ol li").eq(k).addClass("col").siblings().removeClass("col");
        }
        $(".banner .click .prev").click(function(){
            prev();
        });
        $(".banner .click .next").click(function(){
            next();
        });
        timer=setInterval(function(){
            next();
        },1500);
        $(".banner .inner").hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(next,1500);
        });
    })();
    (function(){
        setInterval(function(){
            timer(20)
        },1000);

        function timer(number){
            var time=new Date();
//        console.log(time);
            /*获取系统的时间*/

            var h=time.getHours();
            var m=time.getMinutes();
            var s=time.getSeconds();
            /*从中把时分秒提取出来*/
            var end=number*60*60;
            /*知道要结束的时间并换算成秒*/
            var start=h*60*60+m*60+s;
            /*把系统提取的当前时间转换成秒*/
            var cha=end-start;
            /*拿未来的时间减去现在的时间，剩下的就是剩余的时间*/
            var  hh=parseInt(cha/3600);
            var  mm=parseInt(cha%3600/60);
            var  ss=parseInt(cha%3600%60);
            var spans=document.getElementsByClassName("span1");
            spans[0].innerHTML=parseInt(hh/10);
            spans[1].innerHTML=hh%10;
            spans[3].innerHTML=parseInt(mm/10);
            spans[4].innerHTML=mm%10;
            spans[6].innerHTML=parseInt(ss/10);
            spans[7].innerHTML=ss%10;
        }
    })();
    (function(){
        var m= 0,index= 0;
        $(".today .ms .tab .na1").click(function(){
            m=$(this).index();
            $(this).addClass("cli").siblings().removeClass("cli");
            $(".cons").eq(m).show().siblings().hide();
            index=0;
        });

        $(".cons .click .next").click(function(){
            index++;
            if(index==0){
                $(".cons .click .prev").hide();
            }else if(index==3){
                $(".cons .click .next").hide();
            }else{
                $(".cons .click div").show();
            }
            $(this).parent().siblings().eq(index).show().siblings().hide();
            $(this).parent().show();
        });
        $(".cons .click .prev").click(function(){
             if(index==0){
                $(".cons .click .prev").hide();
            }else if(index==3){
                $(".cons .click .next").hide();
            }else{
                $(".cons .click div").show();
            }
            index--;
            $(this).parent().siblings().eq(index).show().siblings().hide();
            $(this).parent().show();
        })
    })();
};