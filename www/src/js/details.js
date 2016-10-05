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
//$("#carbtn").bind("click",function(){
//    console.log("加入购物车")
//});
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
    //console.log($("#searchdiv").css("display"))
    if($("#searchdiv").css("display") == "none"){
        $("#floatImgF").css("display","none");
    }else {
        $("#floatImgF").css("display","block");
    }
});
//var imgSrc = $(".groupPage .group1 dt img").attr("src");
//console.log(imgSrc);
//var imgSrc = $(".groupPage .group1 dt img").attr("src");

    var number ;
    var detailsDate = [

        {id:1001 , name :"可口可乐" ,"price":2.20,"imgsrc":"../images/detailsgroup1.jpg","number":$("#checkedPrint").html()},
        {id:1002 , name :"wengw乐蜂蜜" ,"price":2.20,"imgsrc":"../images/detailsgroup2.jpg","number":1},
        {id:1003 , name :"崂山矿泉水" ,"price":2.00,"imgsrc":"../images/detailsgroup3.jpg","number":1},
        {id:1004 , name :"哇哈哈营养快线" ,"price":3.90,"imgsrc":"../images/detailsgroup4.jpg","number":1},
        {id:1005 , name :"哇哈哈爽歪歪饮品" ,"price":1.80,"imgsrc":"../images/detailsgroup5.jpg","number":1}
    ]

//console.log($("div.addCarDate"));
$("div.addCarDate").each(function(i){
    $(this).css("cursor","pointer");
    if(i==0){
        $(this).click(function(){
            console.log($("#checkedPrint").html());
            number =$("#checkedPrint").html();
            $.cookie.setAll(detailsDate[i].id,{"pName":detailsDate[i].name, "price" :detailsDate[i].price,
                "imgsrc":detailsDate[i].imgsrc,"number":$("#checkedPrint").html()});
        })
    }
    if( i>0){
        $(this).click(function(){
            if( $(this).parent().find("p input").is(":checked") ){
                $.cookie.setAll(detailsDate[i].id,{"pName":detailsDate[i].name, "price" :detailsDate[i].price,
                    "imgsrc":detailsDate[i].imgsrc,"number":detailsDate[i].number});
            }
            //console.log(detailsDate[i].name)
            //console.log(22);
            //复选框是否被选中
            //console.log($(this).parent().find("p input").is(":checked"));

        })
    }

    comm.renderBtn(this);

});