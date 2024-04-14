<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { ref } from 'vue';
    import axios from 'axios';
    import { useAuthUserStore } from '@/stores/authUser'
    import LoadingAnim from '../../components/LoadingAnim.vue';
    import { useUiStore } from '@/stores/uiStore'
    
    const uiStore = useUiStore()

    axios.defaults.baseURL = "http://localhost:8888";


    const userState = useAuthUserStore()
    const email = ref(userState.user.email)
    const password = ref("")
    const confirmPassword = ref("")
    const oldPassword = ref("")

    const loadingPassword = ref(false);
    const loadingEmail = ref(false);

    function submitPasswordForm(){
        loadingPassword.value = true
        axios.post(
            "update-password",
            {
                id: userState.user.id,
                jwt_token: localStorage.getItem("jwt_token"),
                "new_password": password.value,
                "old_password": oldPassword.value
            },
            {withCredentials: true}
        ).then((response) => {
            uiStore.displayToast("Mot de passe mise à jour avec succès!")
        }).catch((erro) => {
            uiStore.displayToast(erro.response.data, "error")
        }).finally(() => {
            loadingPassword.value = false;
        })
    }
    function submitEmailForm(){
        loadingEmail.value = true
        axios.post(
            "update-email",
            {
                id: userState.user.id,
                jwt_token: localStorage.getItem("jwt_token"),
                email: email.value,
            },
            {withCredentials: true}
        ).then((response) => {
            uiStore.displayToast("Email mise à jour avec succès!")
            userState.getUserInfos()
            console.log(response.data)
        }).catch((erro) => {
            uiStore.displayToast("Une erreur s'est produite!", "error")
        }).finally(() => {
            loadingEmail.value = false
        })
    }
</script>
<template>
    <div class="card-contaner">
        <RouterLink to="/app">
            <button class="std-btn btn-green" id="bnt-back">
                <i class="fa-solid fa-chevron-left" style="margin-right: 10px;"></i><span>Retour</span>
            </button>
        </RouterLink>
        <h1>Change tes informations de connexion</h1>
        <div class="profile-container">
            <h2 class="form-section-title">Changer l’adresse email</h2>
            <form @submit.prevent="submitEmailForm" class="login-form" >
                <label for="" class="login-input-label">
                    <span class="login-input-cation">Adresse mail du parent</span>
                    <input type="email" v-model="email" name="mail" id="mail" placeholder="kikirobet@gmail.com" required>
                </label>
                <button type="submit" class="std-btn btn-orange" :disabled="loadingEmail">
                    <span v-if="!loadingEmail">Changer l’email</span>
                    <LoadingAnim v-if="loadingEmail"></LoadingAnim>
                </button>
            </form>
            <h2 class="form-section-title" style="margin-top: 40px;">Changer le mot de passe</h2>
            <form @submit.prevent="submitPasswordForm" class="login-form" >
                <label for="" class="login-input-label">
                    <span class="login-input-cation">Ancien Mot de passe</span>
                    <input type="password" v-model="oldPassword" name="password" id="password" placeholder="******" required>
                </label>
                <label for="" class="login-input-label">
                    <span class="login-input-cation">Mot de passe</span>
                    <input type="password" v-model="password" name="password" id="password" placeholder="******" required>
                </label>
                <label for="" class="login-input-label">
                    <span class="login-input-cation">Reepétez le mot de passe</span>
                    <input type="password" v-model="confirmPassword" name="confirm_password" id="confirm_password" placeholder="******" required>
                </label>
                <button type="submit" class="std-btn btn-orange" :disabled="loadingPassword">
                    <span v-if="!loadingPassword">Changer le mot de passe</span>
                    <LoadingAnim v-if="loadingPassword"></LoadingAnim>
                </button>
            </form>
        </div>
        
        
        
    </div>
</template>