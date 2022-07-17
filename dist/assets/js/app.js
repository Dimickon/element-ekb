$(document).ready(function() {
    let scrollTop = $(window).scrollTop();
    let root =  document.documentElement;
    let body = $('#body');

    let header = $('#header');
    let burger = $('.header__burger');

    headerFixed();
    toTop();

    $(window).on("scroll resize", function() {
        headerFixed();
        createSpanForNavLi();
        toTop();
    });


    /*
    Навигация в header
    ===================================*/

    burger.click(function() {
        body.toggleClass('show-nav');

        let headerNav = $('#header__nav');
        headerNav.toggleClass('header__nav--show');
        burger.toggleClass('header__burger--active');
    });

    function createSpanForNavLi() {
        if ($(window).width() < 700) {
            let span = document.createElement('span');
            $('.menu-item-has-children').appendChild(span);
        }

        else {

        }
    }



    function headerFixed() {

        scrollTop = $(this).scrollTop();

        let headerNav = $(".header__nav");
        let headerInner = $(".header__inner");

        let headerH = header.innerHeight();
        let headerInnerH = headerInner.innerHeight();
        let headerNavH = headerNav.innerHeight();

        if (scrollTop >= headerInnerH) {
            header.addClass("header--fixed");

            root.style.setProperty('--header-inner', '-' + headerInnerH + 'px');
            root.style.setProperty('--main-top', headerNavH + 10 + 'px');
        }

        else {
            header.removeClass("header--fixed");
            root.style.setProperty('--main-top', headerH + 'px');
            root.style.setProperty('--mobile-nav', '-' + headerInnerH + 'px');
        }
    }


    /*
    Кнопка поднятия страницы к самому верху
    ===================================*/

    $('#toTop').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    });

    function toTop() {

        let toTopBtn = $('#toTop');

        if($(this).scrollTop() >= 250) {

            if($(window).width() > 700) {
                toTopBtn.fadeIn();
            }

            else {
                toTopBtn.fadeOut();
            }

        }

        else {
            toTopBtn.fadeOut();
        }
    }

});