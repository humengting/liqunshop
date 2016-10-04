/**
 * Created by my on 2016/10/3.
 */
$("#groupTop1 li").bind("click",function(){
    //console.log($(this).index());
    $(this).siblings().removeClass()
    $(this).addClass("groupTopActive");
    if($(this).index()==1){
        $("#introduceTop").css("display","none");
    }else{
        $("#introduceTop").css("display","block");
    }

})
var sum = 1;
$("#Imgdetails .checked").bind("click",function(){
    //console.log($(this).index());
    $(this).css("cursor","pointer");
    if($(this).index()==10){
        sum -= 1;
        if(sum == 0){
            sum = 1;
        }
    }else{
        sum += 1;
    }
    $("#checkedPrint").html(sum);
})
$("#carbtn").bind("click",function(){
    console.log("加入购物车")
});
$("#topImg").bind("mouseenter mousemove",function(event){
    $("#searchdiv").css("display","block");
    var x = event.pageX - $(this).offset().left - ($("#searchdiv").width())/2;
    var y = event.pageY - $(this).offset().top -($("#searchdiv").height())/2
    if(x <= 0 ){
        x = 0;
        $("#searchdiv").css("display","none");
    }
    if(x>=$(this).width() - $("#searchdiv").width()){
        x = $(this).width() - $("#searchdiv").width();
        $("#searchdiv").css("display","none");
    }
    if(y<= 0){
        y=0;
        $("#searchdiv").css("display","none");
    }
    if(y>=$(this).height() - $("#searchdiv").height()){
        y = $(this).height() - $("#searchdiv").height();
        $("#searchdiv").css("display","none");
    }

    $("#searchdiv").css({
        "left": x,
        "top" : y
    });
    $("#floatTopImg").css({
        "left": x*-2,
        "top" : y*-2
    });
    console.log($("#searchdiv").css("display"))
    if($("#searchdiv").css("display") == "none"){
        $("#floatImgF").css("display","none");
    }else {
        $("#floatImgF").css("display","block");
    }
});