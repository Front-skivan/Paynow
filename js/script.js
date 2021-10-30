$(document).ready(function() {
    $('.header__burger').click(function(event) {
            $('.header__burger,.header__link,body').toggleClass('active');




    });

    $('.main__link-acc').click(function(event) {
        $('.popup').addClass('active');
        $('.popup__blur').addClass('active');
        $('section,header').addClass('active');
        $('body').addClass('active');
        $('.header__link').removeClass('active');
        $('.header__burger').removeClass('active');
        $('.popup__btn').addClass('none');
        $('.popup-create').addClass('active');
        $('.popup-sign-up').removeClass('active');
        $('.popup__form-up').removeClass('active');
        $('.popup__form').removeClass('active');
        $('.popup__password').removeClass('active');
});




    $('.popup__blur').click(function(event) {
        $('.popup__blur').removeClass('active');
        $('section,header').removeClass('active');
        $('.popup').removeClass('active');
        $('.popup-sign-in').removeClass('active');
        $('.popup').removeClass('mini');
        $('body').removeClass('active');
        $('.popup__btn').removeClass('none');
        $('.popup-create').removeClass('active');



});

    $('.header__a-in').click(function(event) {
        $('.popup').addClass('active');
        $('.popup__in ').removeClass('active');
        $('.popup__up ').removeClass('active');
        $('.popup__blur').addClass('active');
        $('section,header').addClass('active');
        $('.popup__form').addClass('active');
        $('.popup__password').addClass('active');
        $('.popup-sign-up').removeClass('active');
        $('body').addClass('active');
        $('.header__link').removeClass('active');
        $('.header__burger').removeClass('active');
        $('.popup__form-up').removeClass('active');


});


$('.header__a-up').click(function(event) {
    $('.popup').addClass('active');
    $('.popup__in ').addClass('active');
    $('.popup__up ').addClass('active');
    $('.popup__blur').addClass('active');
    $('section,header').addClass('active');
    $('.popup__form').removeClass('active');
    $('.popup__password').removeClass('active');
    $('.popup-sign-up').addClass('active');
    $('.popup').addClass('mini');
    $('body').addClass('active');
    $('.header__link').removeClass('active');
    $('.header__burger').removeClass('active');
    $('.popup__form-up').addClass('active');



});

    $('.popup__up').click(function(event) {
        $('.popup__in ').addClass('active');
        $('.popup__up ').addClass('active');
        $('.popup').addClass('mini');
        $('.popup-sign-up').addClass('active');
        $('.popup__form').removeClass('active');
        $('.popup__password').removeClass('active');
        $('.popup__form-up').removeClass('active');
        




    });

    $('.popup__in').click(function(event) {
        $('.popup__in ').removeClass('active');
        $('.popup__up ').removeClass('active');
        $('.popup').removeClass('mini');
        $('.popup-sign-up').removeClass('active');
        
        setTimeout(function() {
            $('.popup__form').addClass('active');
            $('.popup__password').addClass('active');
        }, 130);
        $('.popup__form-up').addClass('active');
        



    });

    $('.header__a').click(function(event) {
        $('.header__burger,body').removeClass('active');
        setTimeout(function() {
            $('.header__link').removeClass('active');
        }, 300);
});
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});