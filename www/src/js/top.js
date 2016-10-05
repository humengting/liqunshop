/**
 * Created by my on 2016/9/30.
 * console.log()
 */
//
//$("#navMiddle").bind("mouseover click",function(){
//    console.log("hh")
//})
$(function(){
    if($.cookie.getAll("user").user){
        //console.log(23)
        //$(".head .headInfo span:first").html("Hi");
        var user = $.cookie.getAll("user").user;
        //console.log(user)
        $(".head .headInfo span:first").html("Hi,<span style='color: #0770C1'>"+user+"</span>欢迎来到利群商城！");
    }
    //console.log( $.cookie.getAll("user").user);

    //console.log(  $(" .headInfo span:first").html() );
})