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
    const password = ref("")
    const userState = useAuthUserStore()
    const loading = ref(false)

    async function submitForm(){
        loading.value = true
        try {
            await axios.post('reset-password',{
                new_password: password.value,
                token: router.currentRoute.value.query.token
          });
            router.push('/connexion');
            uiStore.displayToast("Mot de passe réinitialisé avec succès!", "info");
        } catch (error) {
            if(error.response){
                switch (error.response.data.error_code) {
                    case "INCOMPLETE_DATA":
                    uiStore.displayToast("Le lien de réinitialisation incorrect!.", "error");
                    break;
                    case "WEAK_PASSWORD":
                    uiStore.displayToast("Mot de passe faible!", "error");
                    break;
                    case "INVALID_TOKEN":
                    uiStore.displayToast("Le lien de réinitialisation a expiré ou est incorrect!", "error");
                    break;
                    case "TOKEN_EXPIRED":
                    uiStore.displayToast("Le lien de réinitialisation a expiré!", "error");
                    break;
                    default:
                    uiStore.displayToast("Oops, réinitialisation impossible! Veuillez reéssayer", "alert");
                    break;
                }
            }else{
                uiStore.displayToast("Oops, réinitialisation impossible! Veuillez reéssayer", "alert");
            }
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
        <h1 @click="test">Créer un nouveau mot de passe</h1>
        <form @submit.prevent="submitForm" class="login-form" >
            <label for="" class="login-input-label">
                <span class="login-input-cation">nouveau mot de passe</span>
                <input
                type="password"
                v-model="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                required
                />
            </label>
            <button type="submit" class="std-btn btn-orange" :disabled="loading">
                <span v-if="!loading">Réinitialiser</span>
                <LoadingAnim v-if="loading"></LoadingAnim>
            </button>
        </form>
    </main>
</template>