$(document).ready(function() {
    let root =  document.documentElement;
    let header = $('#header');
    let scrollTop = $(window).scrollTop();

    headerFixed();

    $(window).on("scroll resize", function() {
        headerFixed();
        toTop();
    });

    $('#toTop').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    });

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
        }
    }

    function toTop() {

        let toTopBtn = $('#toTop');

        if($(this).scrollTop() != 0) {
            toTopBtn.fadeIn();
        }

        else {
            toTopBtn.fadeOut();
        }
    }

});