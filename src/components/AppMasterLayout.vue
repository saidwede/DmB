<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { useAuthUserStore } from '@/stores/authUser'
    import { ref } from 'vue';
    import axios from 'axios';

    axios.defaults.baseURL = "https://dahomey-api.000webhostapp.com/";
    const userState = useAuthUserStore()
    userState.checkSubscription()
    



function logout(){
    userState.logout()
}
</script>
<template>
    <div class="lib">
        <div class="white-circle"></div>
        <header>
            <div class="lib-tool-bar">
                <RouterLink to="/app" class="logo-img">
                    <img src="/img/logo.png" alt="">
                </RouterLink>
                <div class="days-left">Encore {{userState.dayLeft}} jours</div>
                <div class="lib-tool-bar-actions">
                    <div class="notif">
                        <i class="fa-solid fa-bell"></i>
                    </div>
                    <div class="profil-button drop-down-toggle">
                        <span class="profil-pc">{{userState.user.first_name.substring(0,1)+userState.user.last_name.substring(0,1)}}</span>
                        <i class="fa-solid fa-caret-down"></i>
                        <div class="drop-down-menu">
                            <RouterLink to="/app/abonement" class="drop-down-item text-orange">Abonement</RouterLink>
                            <RouterLink to="/app/profile" class="drop-down-item">Modifier le profile</RouterLink>
                            <RouterLink to="/app/parametre-compte" class="drop-down-item">Parametre du compte</RouterLink>
                            <div @click="logout" class="drop-down-item" id="sm-signout">
                                <button class="std-btn btn-orange">Se déconnecter</button>
                            </div>
                        </div>
                    </div>
                    <div id="lg-signout">
                        <button @click="logout" class="std-btn btn-orange" >Se déconnecter</button>
                    </div>
                    
                </div>
            </div>
        </header>
        <main class="lib-container">
            <RouterView />
        </main>
    </div>
    <div class="modal">
        <div class="modal-content">
            <h2>{{userState.dayLeft}} jour restant !</h2>
            <p v-if="userState.dayLeft < 1" class="modal-message">Vous n’avez plus accès aux histoires de Danhomey book</p>
            <p v-if="userState.dayLeft > 0" class="modal-message">Vous avez toujours accès aux histoires de Danhomey book</p>
            <p>Réabonnez-vous pour y accéder à nouveau</p>
            <RouterLink to="/app/abonement">
                <button class="std-btn btn-orange">Je me reabonne !</button>
            </RouterLink>
        </div>
    </div>
</template>
<style scoped></style>