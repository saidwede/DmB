$(document).on("click", ".qw-card", function(){
    $(".qw-card.is-active").removeClass("is-active");
    $(this).addClass("is-active");
})