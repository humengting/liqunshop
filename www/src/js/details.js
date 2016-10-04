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

$("#topImg").bind("mouseenter",function(){
    //console.log(222)

});