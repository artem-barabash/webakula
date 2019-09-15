jQuery(document).ready(function(){
    let element = document.getElementById('element');

    $('.menuToggle').on('click', function() {
        $('body').addClass('stop-scrolling');
        $('body').bind('touchmove', function(e){e.preventDefault()});
        $(".bg-stratch ul.dotsSlider").css("z-index","0");

        $('#nav .menu').toggle(300, function(){
            if($(this).css('display') === "none"){
                $(this).removeAttr('style')
                $('body').removeClass('stop-scrolling');
                $('body').unbind('touchmove');
                $(".bg-stratch ul.dotsSlider").css("z-index","100");
            }
        });
    });
});