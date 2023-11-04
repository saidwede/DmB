import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')






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
$(document).on("click", ".drop-down-toggle", function(){
    $(this).toggleClass('is-active');
});
$(document).on("click", "*", function(event){
    if (!event.target.matches('.drop-down-toggle, .drop-down-toggle > *')){
        $(".drop-down-toggle").removeClass("is-active");
    }
});
$(document).on("click", ".notif", function(){
    $(".lib").css("filter","blur(10px)");
    $(".modal").css("display", "block");
});
$(document).on("click", ".modal", function(){
    $(".lib").css("filter","none");
    $(".modal").css("display", "none");
})