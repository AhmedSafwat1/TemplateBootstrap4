/*global $*/
$(function () {
    "use strict" ;
    /*adujst heigth of the slider*/
    var wh  = $(window).height(),
        uph = $('.upper-bar').innerHeight(),
        vbh = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(wh - (uph + vbh));
    /*shuffle*/
    $('.featurd-company .gallary-shuffle ul li').on('click',function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        if($(this).data('class') == 'all')
            {
                $('.gllary-shuffle-image .col-sm').css('opacity',1);
            }
        else {
            $('.gllary-shuffle-image .col-sm').css('opacity',.08)
            $($(this).data('class')).css('opacity',1);
        }
    })
});