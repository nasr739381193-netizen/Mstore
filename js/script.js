$(function () {
    $(".card-store ul li").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active")
        if($(this).data("class") === "all"){
            $(".card-store .col-lg-3").css("display","block")
        
        }else{
            $(".card-store .col-lg-3").css("display","none")
             $($(this).data("class")).parent().css("display", "block");
        }
    });
    });