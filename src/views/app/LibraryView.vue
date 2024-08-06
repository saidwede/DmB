<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <h1>Choisi une histoire</h1>
    <div class="griotte-img">
        <img src="/img/griotte.png" alt="">
    </div>
    <div class="history-container">
        <RouterLink to="/app/histoires/1" class="history">
            <img src="/img/book.png" alt="">
            <span class="title">Le roi Behanzin</span>
            <span class="sub-title">1808 - 1864</span>
        </RouterLink>
        <RouterLink to="/app/histoires/1" class="history">
            <img src="/img/book.png" alt="">
            <span class="title">Le roi Behanzin</span>
            <span class="sub-title">1808 - 1864</span>
        </RouterLink>
    </div>
</template>