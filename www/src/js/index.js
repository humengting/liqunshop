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


//轮播图  调用函数
adScroll("#navMiddleSelect","#navMiddle","headnav","selectActive",7,5000,true)
adScroll("#middleNav","#navButtom","adScroll","first",2,3000,true);
adScroll("#adScroll","#floorlfet-buttom","flool1scor","floorfirstli",2,3000,true);
adScroll(".floorMiddleUl",".floorMiddle","floorMiddle","floorfirstli",2,3000,false);


//封装函数  点父亲，图片父亲,图片名称，激活的Class ，图片最大数，最小数，是否需要自动播放
function adScroll(objUl,objImg,objImgName,activeClass,_max,_time,isFlage){
   //一定要先清空phoIndex；这样才不会重复
    var phoIndex = 0;
    $(objUl+" li").css("cursor","pointer");
    $(objUl+" li").bind("click mouseover", function () {
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
//var pageIndex=0;
////console.log($("#navMarquee").children())
//$("#nav-right li").bind("click",function(){
//    clearInterval(Marqueetimer);
//    if($(this).hasClass("marqueeR")){
//        pageIndex++;
//        if(pageIndex==3){
//            pageIndex=0;
//        }
//    }else{
//        pageIndex--;
//        if(pageIndex==-1)
//            pageIndex=2;
//    }
//    console.log(pageIndex)
//    $("#navMarquee").stop().animate( { left:-pageIndex*1012} ,"slow");
//});
//
//Marqueetimer=setInterval( function(){
//    pageIndex++;
//    if(pageIndex==3){
//        pageIndex=0;
//    }
//    $("#navMarquee").stop().animate( { left:-pageIndex*1012} ,"slow");
//},4000);
////中间加倒计时滚
//var pagesIndex=0;
////console.log($("#navMarquee").children())
//$("#main-top-scroll li").bind("click",function(){
//    clearInterval(mainMarqueetimer);
//    if($(this).hasClass("mainMarqueeR")){
//        pagesIndex++;
//        if(pagesIndex==3){
//            pagesIndex=0;
//        }
//    }else{
//        pagesIndex--;
//        if(pagesIndex==-1)
//            pagesIndex=2;
//    }
//    console.log(pagesIndex)
//    $("#mainMarqueeScoll").stop().animate( { left:-pagesIndex*796} ,"slow");
//});
//
//mainMarqueetimer=setInterval( function(){
//    pagesIndex++;
//    if(pagesIndex==3){
//        pagesIndex=0;
//    }
//    $("#mainMarqueeScoll").stop().animate( { left:-pagesIndex*796} ,"slow");
//},5000);
var pagesIndex=0;
marqueeScroll("#nav-right","#navMarquee","marqueeR",1012,3000);
marqueeScroll("#main-top-scroll","#mainMarqueeScoll","mainMarqueeR",796,5000);
//objUL 指的是左右按钮 的父元素    objImg指的是要移动的元素
// _classR指的是向右的按钮  _length指的是长度要转一页的长度
function marqueeScroll( objUL,objImg, _classR,_length,_time){
    $(objUL+" li").css("cursor","pointer");
    $(objUL+" li").bind("click",function(){
        clearInterval(objULtimer);
        if($(this).hasClass(_classR)) {
            pagesIndex++;
            console.log(pagesIndex);
            if (pagesIndex == 3) {
                pagesIndex = 0;
                console.log("aaa");
            }
        }else{
            pagesIndex--;
                if(pagesIndex == -1){
                    pagesIndex  = 2 ;
                    console.log("hhhh");
                }
        }
        $(objImg).stop().animate( { left: parseInt(-pagesIndex*_length)},"slow" );

    });
    objULtimer=setInterval( function(){
        pagesIndex++;
        if(pagesIndex==3){
            pagesIndex=0;
        }
        $(objImg).stop().animate( { left: parseInt(-pagesIndex*_length)},"slow" );
    },_time);
}
var arr1 = ["福临门金粳稻5kg","长生特香花生油","2015中秋猪蹄","青岛啤酒经典礼盒装","波尼亚福运来礼盒","福记福月月饼礼盒640g"]
var prise1 = ["34.50","129.80","180.00","70.00","119.00","58.00"]
var prise2 = ["21.50","19.50","49.90","21.90","2.80","32.00"]
var prise3 = ["34.50","70.00","21.90","119.00","34.50","21.90"]
var prise4 = ["70.00","34.50","21.90","119.00","34.50","70.00"]
var prise5 = ["70.00","21.90","119.00","34.50","21.90","34.50"]
var arr2 = ["利麦特一粉5kg","欣和味达美1.3L","长生特香花生油1.8L","中盐低钠海藻盐400g",
    "【南纬三十七度】澳大利亚进口"];
var arr5 = ["利麦特一粉5kg","欣和味达美1.3L","长生特香花生油1.8L","中盐低钠海藻盐400g",
    "【南纬三十七度】澳大利亚进口"];
var arr3 = ["青食六联包钙奶饼干225g*6","乐事薯片无限104克三罐装组合包","有友泡凤爪山椒味180g",
    "青岛啤酒红冰醇10度330ml","德芙榛仁葡萄干巧克力碗装243g","久久丫微辣鸭脖118g"];
var arr4 = ["清风原木纯品3层240段卷筒纸","心相印优选1800g三层卷纸BT2310",
    "维达店庆装1800克三层无芯卷纸","顺清柔6连包抽纸","珍爱洁面湿巾B 10片装","清风漫威4层10包手帕纸B66ATTZV"]
var arr = [arr1,arr2,arr3,arr4,arr5];
var prise = [prise1,prise2,prise3,prise4,prise5];
var plans = ["plan1","plan2","plan3","plan4","plan5"]
//console.log(arr[1][0])
//面板切换
planChange();
function planChange(){
    $("#floorNavtop li").bind("click mouseover",function(){
        //$("#floorNavtop").children().removeClass("lihover");
        var liIndex = $(this).index();
        console.log(liIndex)
        $(this).siblings().removeClass("lihover");
        $(this).addClass("lihover");
        //console.log($(this).index());
        $("#plan1 p a").each( function(i){
            $("#plan1").removeClass();
            console.log(plans[liIndex]);
            $("#plan1").addClass(plans[liIndex]);
            //console.log(liIndex)
            //console.log(   $("#plan1 p a").eq(i).html(arr[liIndex][2]));
            //console.log( $("#plan1 p a").eq(i).html());
          $("#plan1 p a").eq(i).html(arr[liIndex][i]);
          $("#plan1 dd").eq(i).html("利群价：￥"+prise[liIndex][i]);
        })
    });
}
