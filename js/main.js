        /*rem的设置start*/
				changeDivHeight();
			 //当浏览器窗口大小改变时，设置显示内容的高度
			 window.onresize=function(){
			 changeDivHeight();
			 }
			 function changeDivHeight(){				
				       var w = window.innerWidth;
                w = (w>750)?w:w;
                w = (w<320)?320:w;
                document.documentElement.style.fontSize = (w/750)*100+"px"; 
        }
			 /*rem的设置end*/
  

  
$(document).ready(function(){
    $("#section li").addClass("noactive");
    $("#section li").click(function(){
        $(this).addClass("active").removeClass("noactive").siblings().removeClass("active").addClass("noactive");
    });
    
    $("#tab_content .watch").hide();
    $("#top_tab h3").click(function(){
       $(this).addClass("active").siblings().removeClass("active");
        $("#tab_content .mytab").hide().eq($(this).index()-1).show();
        });

    $("#tab_content .hot").first().css("border-top","0");

    $(".user_text input").click(function(){
    if($(this).val()=="+关注")
    {
        $(this).val('已关注').css({'color':'#c3c1c1','border-color':'#c3c1c1'});
    }
    else{
        $(this).val('+关注').css({'color':'#00dfb9','border-color':'#00dfb9'});
    }
    });

    /*div删除*/
    $(".watch .delete").click(function(){
        $(this).parent().remove();
    })
    
    /*评论的显示隐藏*/
       $("#tab_content ul").each(function(){
        $(this).children().eq(1).nextAll().hide();
       })
       $(".showall span").click(function(){
        var oli=$(this).parent().parent().children().eq(0).children();
        if($(this).text()=="查看全部评论"){
       oli.eq(1).nextAll().show(); 
       $(this).text("收起");
       }else{
        oli.eq(1).nextAll().hide(); 
       $(this).text("查看全部评论");
       }
    })

     /*进度条start*/
    function animate(){
	$(".charts").each(function(i,item){
		var a=parseInt($(item).attr("w"));
		$(item).animate({
			width: a+"%"
		},1000);
	});
    }
    animate();
    /*进度条end*/
})

