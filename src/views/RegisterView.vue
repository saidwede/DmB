<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import router from '../router/index'
    import { ref } from 'vue';
    import axios from 'axios';
    import { useAuthUserStore } from '@/stores/authUser'
    const userState = useAuthUserStore()

    const firstName = ref("")
    const lastName = ref("")
    const email = ref("")
    const password = ref("")
    const confirmPassword = ref("") 
    const dateOfBirrth = ref("")
    const sex = ref("")

    

    axios.defaults.baseURL = "https://dahomey-api.000webhostapp.com/";
    function submitForm(){
        axios.post(
            "register",
            {
                "first_name": firstName.value,
                "last_name": lastName.value,
                "email": email.value,
                "password": password.value,
                "date_of_birth": dateOfBirrth.value,
                "sex": sex.value
            },
            {withCredentials: true, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        ).then((response) => {
            localStorage.setItem("jwt_token", response.data.jwt)
            userState.setUser(response.data.user)
            router.push('/app')
        })
    }
</script>
<template>
    <main class="login-container">
        <RouterLink to="/" class="logo-img">
            <img src="/img/logo.png" alt="">
        </RouterLink>
        <h1>Creer un compte</h1>
        <form @submit.prevent="submitForm"  class="login-form">
            <label for="" class="login-input-label">
                <span class="login-input-cation">Nom</span>
                <input type="text" v-model="firstName" name="last_name" id="last_name" placeholder="Exemple: kiki" required>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Prénoms</span>
                <input type="text" v-model="lastName" name="first_name" id="first_name" placeholder="Exemple: Banbou" required>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Date de naissance</span>
                <input type="date" v-model="dateOfBirrth" name="birth_date" id="birth_date" placeholder="Exemple: 09/12/2015" required>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Sex</span>
                <select name="sex" v-model="sex" id="sex" required>
                    <option disabled selected>Exemple: Fille</option>
                    <option value="f">Fille</option>
                    <option value="m">Garçon</option>
                </select>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Adresse mail du parent</span>
                <input type="email" v-model="email" name="mail" id="mail" placeholder="kikirobet@gmail.com" required>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Créer un mot de passe</span>
                <input type="password" v-model="password" name="password" id="password" placeholder="Mot de passe" required>
            </label>
            <button type="submit" class="std-btn btn-orange">Je crée mon compte</button>
            <div>ou</div>
            <RouterLink to="/connexion"><button type="button" class="std-btn login-btn0">J'ai déjà un compte</button></RouterLink>
            
        </form>
    </main>
</template>