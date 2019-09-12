jQuery(document).ready(function(){
    sliderPlayer("#tab-1");
    $('ul.tabs li').click(function(){
        let tab = $(this).attr('data-tab');
 
        $('ul.tabs li').removeClass('current');
        $('.offer-slider').removeClass('current');

        $(this).addClass('current');
        $('#'+ tab).addClass('current');
        sliderPlayer('#'+ tab);
    });



    function sliderPlayer(n){
        $(n).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: '<button class="prev-btn"><img src="image/prev-btn.png"></button>',
            nextArrow: '<button class="next-btn"><img src="image/next-btn.png"></button>',
            responsive: [{
                breakpoint: 1221,
                settings: {
                  slidesToShow: 2,
                  infinite: true
                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1,
                  infinite: true
                }
              }
            ]
        });
    }
});