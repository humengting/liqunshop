/**
 * Created by my on 2016/10/4.
 */
$(function(){
    //$(".main .printInfo input").eq(0).val();
    function user(){

        var _this  =  $(".main .printInfo input").eq(0) ;
        var _value = _this.val();
        if(_value==""){
            $(_this).attr("placeholder","输入为空");
            return false;
        }else{
            if(!$.cookie.getAll(_value).password){
                $(_this).val("");
                $(_this).attr("placeholder","该用户不存在");
                return false;
            }else {
                return true;
            }
        }
    }
    function paw(){
        var _this  =  $(".main .printInfo input").eq(1) ;
        var _value = _this.val();
        if(_value==""){
            $(_this).attr("placeholder","输入为空");
            return false;
        }else{
            if( _value != $.cookie.getAll( $(".main .printInfo input").eq(0).val() ).password){
                $(_this).val("");
                $(_this).attr("placeholder","密码不正确");
                return false;
            }else{
                return true;
            }
        }
    }
    $(".main .printInfo input").eq(0).on("focus",function(){
        $(this).attr("placeholder","请输入用户名/手机号");
    })
    $(".main .printInfo input").eq(0).on("blur",function(){
        user();
    })

    $(".main .printInfo input").eq(1).on("focus",function(){
        $(this).attr("placeholder","请输入密码");
    })
    $(".main .printInfo input").eq(1).on("blur",function() {
        paw();
    })
    $("#btn").on("click",function(){
        if(!paw() || !user() ){
           return false;
        }else {
            var _value = $(".main .printInfo input").eq(0).val();
            $.cookie.setAll("user",{user : _value});
            if(confirm( _value +"用户登录成功，是否跳转到首页面")){
                window.open("index.html","_self")
            }
        }
    })
})


