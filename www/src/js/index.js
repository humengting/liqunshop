/**
 * Created by my on 2016/9/30.
 */

//  console.log()


// var lisIndex = 0;
// var phoIndex = 0;
// var timer;
// 单个的轮播图
// $("#navMiddleSelect li").bind("click",function(){
//     //li 的下标   数值型
//     //console.log("li 的下标--- "+$(this).index());
//     lisIndex =  $(this).index();
//     if(lisIndex==-1){
//         lisIndex =0;
//     }
//     $("#navMiddle img").get(0).src = "../images/headnav"+ (lisIndex+1)+".jpg";
//     $("#navMiddleSelect").children().removeClass("selectActive");
//     $(this).addClass("selectActive");
//     imgScroll();
// });
// imgScroll();
// function imgScroll(){
//     clearInterval(timer);
//     timer=setInterval(function(){
//         if(lisIndex == 7){
//             lisIndex = -1 ;
//         }
//         //console.log("lisIndex----"+lisIndex);
//         lisIndex++;
//         $("#navMiddle img").get(0).src = "../images/headnav"+ (lisIndex+1)+".jpg";
//         $("#navMiddleSelect").children().removeClass("selectActive");
//         $("#navMiddleSelect li").eq(lisIndex).addClass("selectActive");
//         //console.log("++lisIndex++++++"+lisIndex);
//     },5000);
// }
adScroll("#navMiddleSelect","#navMiddle","headnav","selectActive",7,5000,true)
adScroll("#middleNav","#navButtom","adScroll","first",2,3000,true);
adScroll("#adScroll","#floorlfet-buttom","flool1scor","floorfirstli",2,3000,true);
adScroll(".floorMiddleUl",".floorMiddle","floorMiddle","floorfirstli",2,3000,false);


//封装函数  点父亲，图片父亲,图片名称，激活的Class ，图片最大数，最小数，是否需要自动播放
function adScroll(objUl,objImg,objImgName,activeClass,_max,_time,isFlage){
   //一定要先清空phoIndex；这样才不会重复
    var phoIndex = 0;
    $(objUl+" li").css("cursor","pointer");
    $(objUl+" li").bind("click", function () {
        clearInterval(objUl.timer);
        phoIndex =  $(this).index();
        if(phoIndex==-1){
            phoIndex =0;
        }
        $(objImg+" img").get(0).src = "../images/" + objImgName+ (phoIndex+1)+".jpg";
        $(objUl).children().removeClass(activeClass);
        $(this).addClass(activeClass);
    })
    //自动播放
    if(isFlage){

        phoScroll();
        function phoScroll(){
            clearInterval(objUl.timer);
            objUl.timer=setInterval(function(){
                if(phoIndex == _max){
                    phoIndex = -1 ;
                }
                phoIndex++;
                $(objImg+" img").get(0).src = "../images/" + objImgName+ (phoIndex+1)+".jpg";
                $(objUl).children().removeClass(activeClass);
                $(objUl+" li").eq(phoIndex).addClass(activeClass);
            },_time);
        }
    }

}
//  导航栏滚动
var pageIndex=0;
//console.log($("#navMarquee").children())
$("#nav-right li").bind("click",function(){
    clearInterval(Marqueetimer);
    if($(this).hasClass("marqueeR")){
        pageIndex++;
        if(pageIndex==3){
            pageIndex=0;
        }
    }else{
        pageIndex--;
        if(pageIndex==-1)
            pageIndex=2;
    }
    console.log(pageIndex)
    $("#navMarquee").stop().animate( { left:-pageIndex*1012} ,"slow");
});

Marqueetimer=setInterval( function(){
    pageIndex++;
    if(pageIndex==3){
        pageIndex=0;
    }
    $("#navMarquee").stop().animate( { left:-pageIndex*1012} ,"slow");
},4000);
//marqueeScroll("#nav-right","#navMarquee","marqueeR",1012);
////objUL 指的是左右按钮 的父元素    objImg指的是要移动的元素
//// _classR指的是向右的按钮  _length指的是长度要转一页的长度
//function marqueeScroll( objUL,objImg, _classR,_length){
//    var pageIndex=0;
//    $(objUL+" li").bind("click",function(){
//        if($(this).hasClass(_classR)){
//            console.log(pageIndex);
//            pageIndex++;
//            if(pageIndex == 3){
//                pageIndex = 0;
//                console.log("aaa");
//            }else{
//                pageIndex--;
//                if(pageIndex == -1){
//                    pageIndex  = 2 ;
//                    console.log("hhhh");
//                }
//            }
//        }
//        $(objImg).animate( { left: parseInt(-pageIndex*_length)},"slow" )
//    })
//}
