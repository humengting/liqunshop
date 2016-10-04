/**
 * Created by my on 2016/10/4.
 */

//存储用户名  手机号
var Usercook;
var Pwdcook;
//验证码  更换
function show( ){
    var str = "";
    for(var i = 0 ; i < 4; i++ ){
        var num = getRandom(90,65) || getRandom(57,48) || getRandom(122,97);
        //var num =  getRandom(57,48) ;
        //console.log(num);
        str += String.fromCharCode( num );
    }
    $("#change").html( str )
}
show(  );
$("#change,#changeToo").bind("click",function(){
    //console.log(222)
    show( $( this ) );
});
//用户名验证
function userReg(){
    var _this = $("#main form  input").eq(0);
    var userReg = 	/^[a-z0-9_-]{3,16}$/;
    if($(_this).val()!= ""){
        if(!userReg.test( $(_this).val() )){
            $(_this).val("");
            $(_this).attr("placeholder","输入格式不正确");
            return false;
        }else {
            Usercook = $(_this).val();
            return true;
        }
    }else{
        $(_this).attr("placeholder","输入为空");
        return false;
    }
}
//密码验证
function pwdReg(){
    var _this = $("#main form  input").eq(1);
    var pwdReg = /^[a-z0-9_-]{6,18}$/;
    if($(_this).val()!= ""){
        if(!pwdReg.test( $(_this).val() )){
            $(_this).val("");
            $(_this).attr("placeholder","输入密码格式不正确");
            return false;
        }else if($(_this).val() ==Usercook ){
            $(_this).val("");
            $(_this).attr("placeholder","输入密码和用户名相等");
            return false
        }else{
            Pwdcook = $(_this).val();
            return true;
        }
    }else{
        $(_this).attr("placeholder","输入为空");
        return false;
    }
}
//再次验证密码
function pwdpd() {
    var _this = $("#main form  input").eq(2);
    if ($($(_this).val() != "")) {
        if ($(_this).val() != $("#main form  input").eq(1).val()) {
            $(_this).val("");
            $(_this).attr("placeholder", "两次输入密码不一致");
            return false;
            //$(_this).siblings("span").eq(1).html("输入密码格式不正确");
        } else {
            return true;
        }
    } else {
        $(_this).attr("placeholder", "输入为空");
        return false;
    }
}
    //验证   验证码是否正确
function validate(){
    var _this = $("#validateBox");
    if($(_this).val() != ""){
        //console.log( $("#change").html(  ).toLowerCase() )
        if($(_this).val() != $("#change").html() ){
            $(_this).val("");
            $(_this).attr("placeholder","输入错误,区分大小写");
            return false;
        }else{
            return true;
        }
    }else{
        $(_this).attr("placeholder","输入为空");
        return false;
    }
}
$("#main form  input").eq(0).on("focus",function(){
    //$("#prompt").remove();
    // $(this).after("<span id='prompt'>请输入您的手机号或者用户名</span>")
    //console.log($(this).siblings("span").html())
    $(this).attr("placeholder","输入手机号/由小写英文组成3-16位用户名");
    //$(this).siblings("span").eq(0).html("请输入您的手机号或者由英文数字组成3-16位用户名");
});
$("#main form  input").eq(0).on("blur",function(){
    //$(this).siblings("span").eq(0).html("");
    //console.log($(this).val())
    userReg();
})
//密码验证
$("#main form  input").eq(1).on("focus",function(){
    $(this).attr("placeholder","请输入由英文数字组成6-18位密码");
})
$("#main form  input").eq(1).on("blur",function(){
    pwdReg();
})
////验证密码是否相等
$("#main form  input").eq(2).on("focus",function(){
    //$(this).val()
    $(this).attr("placeholder","请再次输入密码");

})
$("#main form  input").eq(2).on("blur",function(){
    pwdpd();

})
////验证码是否相等
$("#validateBox").on("blur",function(){
    validate();
})
$("#loginBtn").on("click",function(){
    //console.log(123);
    ////console.log(  userReg() );
    if($("#checkbox").is(":checked")){
        if(!userReg() ||  !pwdpd() || !pwdReg() || !validate()){
            //console.log(123)
            return false;
        }else{
            //setcookie(Usercook,Pwdcook);
            //console.log("hhh ")
            //$.(cookie(Usercook,Pwdcook));
            //$.cookie.set(Usercook,Pwdcook);
            $.cookie.setAll(Usercook,{password : Pwdcook});
            //$.cookie.setAll($("#main form  input").eq(0).val(),{password : $("#main form  input").eq(1).val()});
            //$.cookie.setAll("user",{user : Usercook});
            if(confirm(Usercook+"用户注册成功，密码为："+Pwdcook+"，是否跳转到登录页面")){
                window.open("register.html","_self")
            }
        }
    }else{
        if(confirm("是否同意用户协议")){
            $("#checkbox").attr("checked",true);
        }
    }

})