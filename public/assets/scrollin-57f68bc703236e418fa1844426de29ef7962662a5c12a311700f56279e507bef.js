$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 300){
                $(this).addClass('scrollin');
            }
        });
    });
});

$(function(){
    $(window).scroll(function (){
        $('.fadein_2').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
});
