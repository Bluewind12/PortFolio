$(function() {
    $(".fa-bars").click(function() {
        if ($(this).hasClass("open")) {
            $(".header-menus").slideUp();
            $(this).removeClass("open");
        } else {
            $(".header-menus").slideDown();
            $(this).addClass("open");
        }
    });
})