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

(function($){
    
    $(".main-btn").on({
        click:function(){ //키보드 엔터

        },
    // 마우스가 #nav를 올라가면 (mouseenter = mouseover)
        mouseenter:function(){
            // 버튼에 색상,글자,배경색 등 효과준거
            $(".main-btn").removeClass("addMainbtn"); //모든 main-btn 추가된 클래스 삭제
            $(this).addClass("addMainbtn"); // 현재 (this) current만 추가 클래스(addClass());
            // 서브메뉴의 슬라이드 다운 업 효과(애니메이션)
            $(".sub").stop().slideUp(0); //애니메이션이나 효과는 무조건 stop()(=그 이전껀 다 삭제하고 마지막 효과만 남아라) : 버블링 방지
            $(this).next().slideDown(500);
        },
        mouseout:function(){
            
        },
        focusin:function(){ //접근성
            // 버튼에 색상,글자,배경색 등 효과준거
            $(".main-btn").removeClass("addMainbtn"); 
            $(this).addClass("addMainbtn");
        },
        focusout:function(){ //접근성
        
        }
    });

    // 마우스가 #nav를 떠나면(mouseleave = mouseout)
    $("#nav").on({
        mouseleave:function(){
            $(".sub").stop().slideUp(500);
            $(".main-btn").removeClass("addMainbtn"); // removeClass(".addMainbtn")이 아닌 이유 : JQuery가 html에 들어가있는거라서 CSS처럼 쓰지않음
        },
    });

})(jQuery);