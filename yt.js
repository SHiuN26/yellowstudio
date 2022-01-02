

$(document).ready(function () {

    var vm =new Vue({
        el: "#app",
        data: {
            works: []
        },
        mounted: function(){
            var vobj=this;
            $.ajax({
                url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
                success: function (res) {
                    vobj.works=JSON.parse(res);
                }
            });
        }
    });

    $(window).mousemove(function (evt) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        var pagex=evt.pageX;
        var pagey=evt.pageY;

        var x=pagex-$("#section_about").offset().left;
        var y=pagey-$("#section_about").offset().top;
        // console.log(x+","+y);
        console.log(pagey);
        // console.log(pagey,y);
        // console.log($("#section_about").offset().top);
        // console.log($("#section_about").offset().left);
        if(y>0||y>$("section_about").outerHeight())
            $("#cross").css(opacity,0)
        else
            $("#cross").css(opacity,0)


        $("#cross").css("left",x+"px");
        $("#cross").css("top",y+"px");


        $(".mountain").css("transform","translateX("+(pagex/-20+50)+"px)")
        $(".r1text").css("transform","translateX("+(y/-5)+"px)")
        $(".r2text").css("transform","translateX("+(y/-5)+"px)")
        $(".r3text").css("transform","translateX("+(y/-5)+"px)")
        $(".tri1").css("transform","translateX("+(x/-5)+"px)")
        $(".tri2").css("transform","translateX("+(x/-10)+"px)")
        $(".tri3").css("transform","translateX("+(x/-12)+"px)")
        $(".tri4").css("transform","translateX("+(x/-14)+"px)")
        $(".tri5").css("transform","translateX("+(x/-16)+"px)")

    });

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