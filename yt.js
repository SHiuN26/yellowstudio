$(document).ready(function () {

    $(window).scroll(function() { 
        if ($(window).scrollTop()<=0)
            $(".explore,.navbar").addClass("at_top");
        else
            $(".explore,.navbar").removeClass("at_top");
    });

    $(document).on('click','a',function (event) {
        event.preventDefault();
        var target=$(this).attr("href");
        $('html,body').animate({
            scrollTop:$(target).offset().top},500);
    });
});