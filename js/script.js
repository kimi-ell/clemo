$('.icon_menu').click(function (event) {
    $('.icon_menu, .nav_menu-body').toggleClass('active');
    $('body').toggleClass('lock');
});
$('.nav_menu-list').click(function (event) {
    $('.icon_menu,.nav_menu-body').removeClass('active');
    $('body').removeClass('lock')
});

$(document).ready(function(){
    $('.slider_body').slick({
        arrows:false,
        dots:true
    });
});

$(document).ready(function(){
    $('.team_row').slick({
        arrows:true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
              }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
});


$(document).ready(function(){
    $('.clients_slier').slick({
        arrows:false,
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
});


;
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    };
    testWebP(function (support) {
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

;
function ibg() {
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0) {
            $(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();;

