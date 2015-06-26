$(function () {
    new Share(".share-button", { ui: { flyout: 'bottom center' } });
    // Stick the #nav to the top of the window
    var nav = $('#navigation-toggle');
    var navHomeY = nav.offset().top;
    var isFixed = false;

    var nav2 = $('#navi');
    var navY = nav2.offset().top;
    var isFixed2 = false;
    var $w = $(window);
    $w.scroll(function () {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        var shouldBeFixed2 = scrollTop > navY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width(),
                zIndex: 2
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed) {
            nav.css({
                position: 'static',
                zIndex: 'auto'
            });
            isFixed = false;
        }
        if (shouldBeFixed2 && !isFixed2) {
            nav2.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width(),
                zIndex: 2
            });
            isFixed2 = true;
        }
        else if (!shouldBeFixed2 && isFixed2) {
            nav2.css({
                position: 'static',
                zIndex: 'auto'
            });
            isFixed2 = false;
        }
    });
});