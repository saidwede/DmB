<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
            <form action="." class="login-form" >
                <label for="" class="login-input-label">
                    <span class="login-input-cation">Adresse mail du parent</span>
                    <input type="email" name="mail" id="mail" placeholder="kikirobet@gmail.com" required>
                </label>
                <button type="submit" class="std-btn btn-orange">Changer l’email</button>
            </form>
            <h2 class="form-section-title" style="margin-top: 40px;">Changer le mot de passe</h2>
            <form action="." class="login-form" >
                <label for="" class="login-input-label">
                    <span class="login-input-cation">Ancien Mot de passe</span>
                    <input type="password" name="password" id="password" placeholder="******" required>
                </label>
                <label for="" class="login-input-label">
                    <span class="login-input-cation">Mot de passe</span>
                    <input type="password" name="password" id="password" placeholder="******" required>
                </label>
                <label for="" class="login-input-label">
                    <span class="login-input-cation">Reepétez le mot de passe</span>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="******" required>
                </label>
                <button type="submit" class="std-btn btn-orange">Changer l’email</button>
            </form>
        </div>
        
        
        
    </div>
</template>