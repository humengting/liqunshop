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
adScroll("#navMiddleSelect","#navMiddle","headnav","selectActive",7,5000)
adScroll("#middleNav","#navButtom","adScroll","first",2,3000);
adScroll("#adScroll","#floorlfet-buttom","flool1scor","floorfirstli",2,3000);


//封装函数  点父亲，图片父亲,图片名称，激活的Class ，图片最大数，最小数
function adScroll(objUl,objImg,objImgName,activeClass,_max,_time){
   //一定要先清空phoIndex；这样才不会重复
    var phoIndex = 0;
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