/**
 * Created by my on 2016/10/4.
 */

//验证码  更换
function show( ){
    var str = ""
    for(var i = 0 ; i < 4; i++ ){
        var num = getRandom(90,65) || getRandom(57,48) || getRandom(122,97);
        //var num =  getRandom(57,48) ;
        //console.log(num);
        str += String.fromCharCode( num );
    }
    $("#change").html( str )
}
show(  );
$("#change,#changeToo").bind("click",function(){
    //console.log(222)
    show( $( this ) );
});
