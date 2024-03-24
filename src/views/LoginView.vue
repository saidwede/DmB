<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { ref } from 'vue';
    import router from '../router/index'
    import axios from 'axios';
    import { useAuthUserStore } from '@/stores/authUser'

    axios.defaults.baseURL = "https://dahomey-api.000webhostapp.com/";
    const email = ref("")
    const password = ref("")
    const userState = useAuthUserStore()

    function submitForm(){
        axios.post(
            "login",
            {
                "email": email.value,
                "password": password.value,
            },
            {withCredentials: true}
        ).then((response) => {
            //console.log(response.data)
            localStorage.setItem("jwt_token", response.data.jwt)
            userState.setUser(response.data.user)
            router.push('/app')
        }).catch((erro) => {
            alert("Email ou mot de pass incorrect!")
        })
    }
</script>
<template>
    <main class="login-container">
        <RouterLink to="/" class="logo-img">
            <img src="/img/logo.png" alt="">
        </RouterLink>
        <h1>Connectez-vous à votre bibliothèque</h1>
        <form @submit.prevent="submitForm" class="login-form" >
            <label for="" class="login-input-label">
                <span class="login-input-cation">Adresse mail du parent</span>
                <input type="email" v-model="email" name="mail" id="mail" placeholder="kikirobet@gmail.com" required>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Mot de passe</span>
                <input type="password" v-model="password" name="password" id="password" placeholder="******" required>
            </label>
            <button type="submit" class="std-btn btn-orange">Je me connecte</button>
            <div>ou</div>
            <RouterLink to="/inscription"><button type="button" class="std-btn login-btn0">Je n’ai pas encore de compte</button></RouterLink>
            
        </form>
    </main>
</template>