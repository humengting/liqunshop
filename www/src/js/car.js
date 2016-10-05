/**
 * Created by my on 2016/10/5.
 */

$(function(){


    var ids =  [
        {id :1001 },
        {id :1002 },
        {id :1003 },
        {id :1004 },
        {id :1005 }
    ]
    //console.log(ids[0].id)
    //console.log($.cookie.getAll(1002).price);
    var sumPrice = 0;
    var sum1 = 0;
    var mod = 0;
    //console.log( 3  * (2.20)*100);
    for(i=0;i < 5; i++){
        //console.log(ids[i].id);
        //console.log($.cookie.getAll(ids[i].id));

        if(  $.cookie.getAll(ids[i].id)!=""){
            //console.log($.cookie.getSub(ids[i].id,name));
            //console.log( $.cookie.getAll(ids[i].id).pName );
            var pName = $.cookie.getAll(ids[i].id).pName;
            var price = (parseFloat($.cookie.getAll(ids[i].id).price)).toFixed(2);
            var imgsrc = $.cookie.getAll(ids[i].id).imgsrc;
            var number = $.cookie.getAll(ids[i].id).number;
            var sum = (number * price).toFixed(2);
            //console.log( sum )
            //扩大100倍
            sum1 = sum * 100 ;
            sumPrice += sum1 ;
            //  回来
            //console.log( sumPrice );

            var name = $.cookie.getAll(ids[i].id).pName;
            var details = "<li class='mainMiddleli1' id='"+ids[i].id+"'>"
                +"<span class='mainMiddlespan1'><img src='"+imgsrc+"'><span>"+pName+"</span></span>"
                +"    <span class='money'>￥"+price+"</span>"
                +"    <span class='count'>"
                +"    <div class='count1' >-</div>"
                +"    <input value='"+number+"'  />"
                +"    <div class='count2'>+</div>"
                +"    </span>"
                +"    <span class='sumMoney'>￥"+sum+"</span>"
                +"    <span>79</span>"
                +"    <span class='redspan delbtn'><u>清除</u></span>"
                +"    <span class='redspan'>满赠活动</span>"
                +"    </li>";

            $(".mainMiddle li:first").append( details );
            mod += 1;
        }

    }


    sumPrice = sumPrice  / 100;
        //console.log( sumPrice );
    addSum();
    function addSum(){
        $(".main .mainMiddleli3  .sumPrice").html("￥"+sumPrice);
        $(".main .mainMiddleli2  .sumPrice2").html("￥"+sumPrice);
        $(".mainMiddle .mainMiddleli3 .select").html(mod);
    }
//购物车封装函数
    function carChange(_this){
        var id = parseInt($(_this).parents(".mainMiddleli1").attr("id"));
        var pName = $(_this).parents(".mainMiddleli1").find(".mainMiddlespan1 span").html();
        //截取   掉 ￥
        var price = $(_this).parents(".mainMiddleli1").find(".money").html().substring(1);
        var imgsrc = $(_this).parents(".mainMiddleli1").find(".mainMiddlespan1 img").attr("src");
        var number = parseInt($(_this).parent().find("input").val());
        if($(_this).hasClass("count1")){
            //console.log( id );
            number -= 1;
            number = number <=0 ? 1 :number ;
            console.log( number );
            $(_this).parent().find("input").val(number);
        }
        if($(_this).hasClass("count2")){
            console.log( number );
            number += 1;
            $(_this).parent().find("input").val(number);
        }
        if($(this).)
        $.cookie.setAll(id,{"pName":pName　, "price" : price , "imgsrc" : imgsrc ,"number": number });
        window.location.reload();
    }
    $(".mainMiddleli1 input").change( function(){
        carChange($(this));
    })
    $(".mainMiddleli1 .delbtn").each( function(i){
        $(this).css("cursor","pointer");
        $(this).click(function(){
            var id = parseInt($(this).parent().attr("id"));
            //console.log( id );
            $.cookie.unsetAll( id );
            window.location.reload();
        })
    });
    $(".mainMiddleli1 div").each( function(i){
        $(this).css("cursor","pointer");
        //$(this).click( function(){
        //    console.log(i)
        //})
        $(this).click(function(){
            ////console.log($(this).hasClass( "count1"));
            //var id = parseInt($(this).parents(".mainMiddleli1").attr("id"));
            //var pName = $(this).parents(".mainMiddleli1").find(".mainMiddlespan1 span").html();
            ////截取   掉 ￥
            //var price = $(this).parents(".mainMiddleli1").find(".money").html().substring(1);
            //var imgsrc = $(this).parents(".mainMiddleli1").find(".mainMiddlespan1 img").attr("src");
            //var number = parseInt($(this).parent().find("input").val());
            ////console.log( id );
            //if($(this).hasClass("count1")){
            //    //console.log( id );
            //    number -= 1;
            //    number = number <=0 ? 1 :number ;
            //    console.log( number );
            //    $(this).parent().find("input").val(number);
            //}
            //if($(this).hasClass("count2")){
            //    console.log( number );
            //    number += 1;
            //    $(this).parent().find("input").val(number);
            //}
            ////$(this).parent().find("input").val(number);
            //$.cookie.setAll(id,{"pName":pName　, "price" : price , "imgsrc" : imgsrc ,"number": number });
            //window.location.reload();
            ////addSum();
            carChange($(this));

        })

        //if($(this).hasClass("count1")){
        //
        //   $(this).click(function(){
        //       var id = parseInt($(this).parents(".mainMiddleli1").attr("id"));
        //       var pName = $(this).parents(".mainMiddleli1").find(".mainMiddlespan1 span").html();
        //       //截取   掉 ￥
        //       var price = $(this).parents(".mainMiddleli1").find(".money").html().substring(1);
        //       var imgsrc = $(this).parents(".mainMiddleli1").find(".mainMiddlespan1 img").attr("src");
        //       console.log( imgsrc );
        //       //console.log( id );
        //       var sum = parseInt($(this).parent().find("input").val());
        //       sum -= 1;
        //       sum <= 0  ? 1 : sum;
        //       $(this).parent().find("input").val(sum);
        //       $.cookie.setAll(id,{"pName":pName　, "price" : price , "imgsrc" : imgsrc ,"number":sum });
        //       addSum();
        //   })
        //
        //}
        //
        //if($(this).hasClass("count2")){
        //
        //    $(this).click(function(){
        //        var id = parseInt($(this).parents(".mainMiddleli1").attr("id"));
        //        var pName = $(this).parents(".mainMiddleli1").find(".mainMiddlespan1 span").html();
        //        //截取   掉 ￥
        //        var price = $(this).parents(".mainMiddleli1").find(".money").html().substring(1);
        //        var imgsrc = $(this).parents(".mainMiddleli1").find(".mainMiddlespan1 img").attr("src");
        //
        //        var sum = parseInt($(this).parent().find("input").val());
        //        sum += 1;
        //        $(this).parent().find("input").val(sum);
        //        $.cookie.setAll(id,{"pName":pName　, "price" : price , "imgsrc" : imgsrc ,"number":sum });
        //        addSum();
        //    })
        //
        //}

    });

})