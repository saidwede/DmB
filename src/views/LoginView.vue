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

    const email = ref("")
    const password = ref("")
    const userState = useAuthUserStore()
    const loading = ref(false)
    
    watch(() => userState.user, (newValue) => {
            if (newValue) {
                router.push('/app');
            } 
        }, { immediate: true }
    );

    async function submitForm(){
        //uiStore.displayToast("Email ou mot de passe incorrect!", "error")
        loading.value = true
        try {
            await userState.login({
                email: email.value,
                password: password.value,
            });
            router.push('/app')
        } catch (error) {
            if(error.response?.status == 401){
                uiStore.displayToast("Email ou mot de passe incorrect!", "error");
            }else{
                uiStore.displayToast("Oops, connexion impossible! Veuillez reéssayer", "alert");
            }
        } finally {
            loading.value = false
        }
    }
    function test(){
        axios.post("test", {data: "data"})
        .then((res) => {
            console.log(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }
</script>
<template>
    <TostView></TostView>
    <main class="login-container">
        <RouterLink to="/" class="logo-img">
            <img src="/img/logo.png" alt="">
        </RouterLink>
        <h1 @click="test">Connectez-vous à votre bibliothèque</h1>
        <form @submit.prevent="submitForm" class="login-form" >
            <label for="" class="login-input-label">
                <span class="login-input-cation">Adresse mail du parent</span>
                <input type="email" v-model="email" name="mail" id="mail" placeholder="kikirobet@gmail.com" required>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Mot de passe</span>
                <input type="password" v-model="password" name="password" id="password" placeholder="******" required>
            </label>
            <button type="submit" class="std-btn btn-orange" :disabled="loading">
                <span v-if="!loading">Je me connecte</span>
                <LoadingAnim v-if="loading"></LoadingAnim>
            </button>
            <div>ou</div>
            <RouterLink to="/inscription"><button type="button" class="std-btn login-btn0">Je n’ai pas encore de compte</button></RouterLink>
            
        </form>
    </main>
</template>