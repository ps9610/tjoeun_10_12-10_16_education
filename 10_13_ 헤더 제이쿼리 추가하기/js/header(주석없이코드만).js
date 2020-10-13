(function($){

    $(".main-btn").on({
        mouseenter:function(){
            $(".main-btn").removeClass("addMainbtn"); 
            $(this).addClass("addMainbtn");
            $(".sub").stop().slideUp(0);
            $(this).next().slideDown(500);
        },
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
    
    //메인 버튼 클릭 링크 이동

     $(".main-btn").each(function(index){
        $(this).on({
            click:function(){

                if(index==0){
                    location.href="https://www.starbucks.co.kr/coffee/index.do";
                }
                else if(index==1){
                    location.href="https://www.starbucks.co.kr/menu/index.do";
                }
                else if(index==2){
                    location.href="https://www.starbucks.co.kr/store/index.do";
                }
                else if(index==3){
                    location.href="https://www.starbucks.co.kr/responsibility/index.do";
                }
                else if(index==4){
                    location.href="https://www.starbucks.co.kr/msr/index.do";
                }
                else if(index==5){
                    window.open("https://www.starbucks.co.kr/whats_new/index.do");
                }
            }
        });
    });
})(jQuery);

/*
    $(".main-btn").eq(0).on({
        click:function(){
   location.href="https://www.starbucks.co.kr/coffee/index.do"; //BOM 
        }
    });
