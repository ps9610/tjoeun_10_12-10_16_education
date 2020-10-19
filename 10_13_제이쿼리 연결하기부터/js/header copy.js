//마우스 이벤트
//메인버튼 이벤트 
//마우스 클릭 이벤트 동작
//마우스 오버시 동작
//키보드 접근 시 동작

/*
$("선택자").on({}); //on : poweron
$("선택자").off({}); // off : poweroff
$("선택자").one({}); //on : only one
*/

//

(function($){
    
    $(".main-btn").on({
        mouseenter:function(){
            $(".main-btn").removeClass("addMainbtn"); 
            $(this).addClass("addMainbtn");
            $(".sub").stop().slideUp(0);
            $(this).next().slideDown(500);
        }
        focusin:function(){
            $(".main-btn").removeClass("addMainbtn"); 
            $(this).addClass("addMainbtn");
        }
    });

    $("#nav").on({
        mouseleave:function(){
            $(".sub").stop().slideUp(500);
            $(".main-btn").removeClass("addMainbtn");
        },
    });

})(jQuery);