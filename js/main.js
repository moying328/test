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
             
             /*商品加减start*/
        function calculate(ob){
            var opera = ob.name;
            if(opera == '2'){
                // console.log(ob.previousSibling.previousSibling);
                var input = ob.previousSibling.previousSibling;
                input.value = parseInt(input.value) + 1;
            }else if(opera == '1'){
                var input = ob.nextSibling.nextSibling;
                input.value = parseInt(input.value) - 1;
                if( input.value < 1 ){
                    input.value = 1;
                }
            }
        }
        /*商品加减end*/
  

  
$(document).ready(function(){
    $("#section li").addClass("noactive");
    $("#section li").click(function(){
        $(this).addClass("active").removeClass("noactive").siblings().removeClass("active").addClass("noactive");
    });
    
    $("#tab_content .watch").hide();
    $("#top_tab h3").click(function(){
       $(this).addClass("active").siblings().removeClass("active");
        $("#tab_content .mytab").hide().eq($(this).index()-1).show();
        myswiper.update()
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


/*手机号码和短信验证码start*/
var code = ""; //接收验证码   
var reg_phone = /1\d{10}/;
function phonetest(){
    var phone=$("#phone").val();//手机号码 
    if(!reg_phone.test(phone)){   //验证手机是否符合格式
        $(".prompt1").show();
        return false;
    } 
}
var reg_password=/^[a-z0-9]{6,16}$/;
function passwordtest(){
    var password=$("#mypassword").val();
    if(!reg_password.test(password)){
        $(".prompt3").show();
    }
}

function radiotest1(){
    var list= $('input:radio[name="radio"]:checked').val();
            if(list==null){
                $(".prompt4").show();
                return false;
            }
            
}

function radiotest2(){
    $(".magic-radio").click(function(){
        var list= $('input:radio[name="radio"]:checked').val();
            if(list!=null){
                $(".prompt4").hide();
                return true;
            }
    })
    
            
}
radiotest2();

$('#code-btn').click(function(){
  var count = 5;
  phonetest();

    //开始计时  
    $("#code-btn").attr('disabled','disabled');  
    $("#code-btn").html("重新获取" +"("+ count + "秒"+")");  
    var timer = setInterval(function(){  
      count--;
      $("#code-btn").html("重新获取" +"("+ count + "秒"+")"); 
      if (count==0) {
        clearInterval(timer);
        $("#code-btn").attr("disabled",false);//启用按钮  
        $("#code-btn").html("获取短信验证码");
        code = "";//清除验证码。如果不清除，过时间后，输入收到的验证码依然有效 
      }
    },1000);

    //向后台发送处理数据  
    $.ajax({  
        type: "POST", //用POST方式传输  
        dataType: "text", //数据格式:JSON  
        url: '', //目标地址  
        data: "phone=" + phone + "&code=" + code,  
        error: function (XMLHttpRequest, textStatus, errorThrown) { },  
        success: function (msg){ }  
    });
});  

$("#phone").blur(function(){
var phone=$("#phone").val();//手机号码 
 if(reg_phone.test(phone)){   //验证手机是否符合格式
        $(".prompt1").hide();
        return true;
    } 
});
$("#checkCode").blur(function(){
var phone=$("#phone").val();//手机号码 
 if($("#checkCode").val()!=''){
        $(".prompt2").hide();
    }
});
$("#mypassword").blur(function(){
var password=$("#mypassword").val();
    if(reg_password.test(password)){
        $(".prompt3").hide();
    }
})
/*手机号码和短信验证码end*/

/*新用户注册start*/
$(".register_way .way").click(function(){
    phonetest();
    if($("#checkCode").val()==''){
        $(".prompt2").show();
    }
    passwordtest();
    radiotest1();
})
/*新用户注册end*/

/*radio的显示start*/
$('label').click(function(){
    var radioId = $(this).attr('name');
    $('label').removeClass('checked') && $(this).addClass('checked');
    $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
  });    
/*radio的显示end*/
})

