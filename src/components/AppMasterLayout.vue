<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class="lib">
        <div class="white-circle"></div>
        <header>
            <div class="lib-tool-bar">
                <RouterLink to="/app" class="logo-img">
                    <img src="/img/logo.png" alt="">
                </RouterLink>
                <div class="days-left">Encore 20 jours</div>
                <div class="lib-tool-bar-actions">
                    <div class="notif">
                        <i class="fa-solid fa-bell"></i>
                    </div>
                    <div class="profil-button drop-down-toggle">
                        <span class="profil-pc">kb</span>
                        <i class="fa-solid fa-caret-down"></i>
                        <div class="drop-down-menu">
                            <RouterLink to="/app/abonement" class="drop-down-item text-orange">Abonement</RouterLink>
                            <RouterLink to="/app/profile" class="drop-down-item">Modifier le profile</RouterLink>
                            <RouterLink to="/app/parametre-compte" class="drop-down-item">Parametre du compte</RouterLink>
                            <div class="drop-down-item" id="sm-signout">
                                <button class="std-btn btn-orange">Se déconnecter</button>
                            </div>
                        </div>
                    </div>
                    <div id="lg-signout">
                        <button class="std-btn btn-orange" >Se déconnecter</button>
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
            <h2>0 jour restant !</h2>
            <p class="modal-message">Vous n’avez plus accès aux histoires de Danhomey book</p>
            <p>Réabonnez-vous pour y accéder à nouveau</p>
            <RouterLink to="/app/abonement">
                <button class="std-btn btn-orange">Je me reabonne !</button>
            </RouterLink>
        </div>
    </div>
</template>
<style scoped></style>