$(document).on("click", ".qw-card", function(){
    $(".qw-card.is-active .answer").slideUp(500);
    setTimeout(() => {
        $(".qw-card.is-active").removeClass("is-active");
        $(this).find(".answer").slideDown(500);
        $(this).addClass("is-active");
    }, 500);
})

$(document).on("click", ".burger-menu-btn *", function(){
    $(".mobile-top-menu").css("height", "260px");
    $(".mobile-top-menu-overlay").css("display", "block");
})
$(document).on("click", ".mobile-top-menu-overlay", function(){
    $(".mobile-top-menu").css("height", "0px");
    $(".mobile-top-menu-overlay").css("display", "none");
})