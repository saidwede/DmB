<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { ref, watch } from 'vue';
    import router from '../router/index'
    import axios from '../lib/axiosInstance'
    import { useAuthUserStore } from '@/stores/authUser'
    import LoadingAnim from '../components/LoadingAnim.vue';
    import TostView from '../components/TostView.vue';
    import { useUiStore } from '@/stores/uiStore'
    
    const uiStore = useUiStore()
    const emailSent = ref(false)
    const email = ref("")
    const userState = useAuthUserStore()
    const loading = ref(false)

    async function submitForm(){
        //uiStore.displayToast("Email ou mot de passe incorrect!", "error")
        loading.value = true
        try {
            await axios.post('password-reset-request',{
                email: email.value
            });
            emailSent.value = true;
        } catch (error) {
            uiStore.displayToast("Oops, Une erreur est survenue! Veuillez reéssayer", "alert");
        } finally {
            loading.value = false
        }
    }
</script>
<template>
    <TostView></TostView>
    <main class="login-container">
        <RouterLink to="/" class="logo-img">
            <img src="/img/logo.png" alt="">
        </RouterLink>
        <h1 v-if="!emailSent" @click="test">Mot de passe oublié</h1>
        <form v-if="!emailSent" @submit.prevent="submitForm" class="login-form" >
            <label for="" class="login-input-label">
                <span class="login-input-cation">Adresse mail du parent</span>
                <input type="email" v-model="email" name="mail" id="mail" placeholder="kikirobet@gmail.com" required>
            </label>
            <button type="submit" class="std-btn btn-orange" :disabled="loading">
                <span v-if="!loading">Réinitialiser</span>
                <LoadingAnim v-if="loading"></LoadingAnim>
            </button>
        </form>
        <h2 v-else>
            Un e-mail de réinitialisation du mot de passe a été envoyé à {{email}}.
        </h2>
    </main>
</template>