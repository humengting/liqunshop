/**
 * Created by my on 2016/9/30.
 */
//  console.log()
var lisIndex = 0;
$("#navMiddleSelect li").bind("click",function(){
    //li 的下标   数值型
    console.log($(this).index());
    lisIndex =  $(this).index();
    if(lisIndex==-1){
        lisIndex =0;
    }
    $("#navMiddle img").get(0).src = "../images/headnav"+ (lisIndex+1)+".jpg";
    $("#navMiddleSelect").children().removeClass("selectActive");
    $(this).addClass("selectActive");
})
var headImgIndex = 0;
timer=setInterval(function(){
    if(lisIndex == 7){
        lisIndex = -1 ;
    }
    console.log(lisIndex)
    lisIndex++;
    $("#navMiddle img").get(0).src = "../images/headnav"+ (lisIndex+1)+".jpg";

    $("#navMiddleSelect").children().removeClass("selectActive");
    $("#navMiddleSelect li").eq(lisIndex).addClass("selectActive");


},3000)