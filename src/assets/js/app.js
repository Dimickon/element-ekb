$(document).ready(function() {
    let root =  document.documentElement
    let header = $('#header');
    let scrollTop = $(window).scrollTop();

    $(window).on("scroll resize", function() {
        scrollTop = $(this).scrollTop();

        let headerNav = $(".header__nav");
        let headerInner = $(".header__inner");

        let headerInnerH = headerInner.innerHeight();
        let headerNavH = headerNav.innerHeight();

        if (scrollTop >= headerInnerH) {
            headerFixed(headerInnerH);
        }

        else {
            header.removeClass("header--fixed");
        }
    });

    function headerFixed(headerInnerH) {

        header.addClass("header--fixed");

        root.style.setProperty('--header-inner', '-' + headerInnerH + 'px');
        console.log(headerInnerH);
    }

});
