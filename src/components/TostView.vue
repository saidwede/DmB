<script setup>
    import { useUiStore } from '@/stores/uiStore'

    const uiStore = useUiStore()

</script>
<template>
    <div class="top-container">
        <div :class="`container ${uiStore.toastType} ${uiStore.toastDisplayed} ${(uiStore.toastDisplayed ? 'is-active' : '')}`" >
            <span>{{uiStore.toastMessage}}</span>
        </div>
    </div>
</template>
<style scoped>
    .top-container{
        position: fixed;
        top: -100%;
        left: 0px;
        width: 100vw;
        z-index: 99;
    }
    .container{
        position: fixed;
        display: inline-flex;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 15px;
        border-radius: 50px;
        box-shadow: 4px 4px 0px #000000;
        transition: ease all 0.7s;
        width: 220px;
        text-align: center;
        z-index: 99;
    }
    .container span{
        text-align: center;
    }
    .alert{
        background-color:#FCB913;
        color: #000000;
    }
    .info{
        background-color: #0097B2;
        color: #ffffff;
    }
    .error{
        background-color: #C80000;
        color: #ffffff;
    }
    .is-active{
        top: 20px;
    }
</style>