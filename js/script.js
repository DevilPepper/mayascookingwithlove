$(function () {
    new Share(".share-button", { ui: { flyout: 'bottom center' } });
    // Stick the #nav to the top of the window
    var nav = $('.navi');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function () {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
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
    });
});