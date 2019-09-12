jQuery(document).ready(function(){
    let element = document.getElementById('element');

    $('.menuToggle').on('click', function() {
        $('body').addClass('stop-scrolling');
        $('body').bind('touchmove', function(e){e.preventDefault()})
        element.style.position = 'i';
        $('#nav .menu').toggle(300, function(){
            if($(this).css('display') === "none"){
                $(this).removeAttr('style')
                element.style.position = 'relative';
                $('body').removeClass('stop-scrolling');
               $('body').unbind('touchmove');
            }
        });
    });
});