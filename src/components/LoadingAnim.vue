<template>
    <div class="container">
        <div class="d1"></div>
        <div class="d2"></div>
        <div class="d1"></div>
    </div>
</template>
<style scoped>
    @keyframes pulse{
        0%   {
            width: 0.5rem;
            height: 0.5rem;
        }
        50%  {
            width: 1rem;
            height: 1rem;
        }
        100%   {
            width: 0.5rem;
            height: 0.5rem;
        }
    }
    .container{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        height: 1rem;
    }
    .d1, .d2, .d3{
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50px;
        background-color: #ffffff;
        animation: pulse 600ms infinite;
    }
    .d2{
        animation-delay: 200ms;
    }
    .d3{
        animation-delay: 400ms;
    }
</style>