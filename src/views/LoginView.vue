<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <main class="login-container">
        <RouterLink to="/" class="logo-img">
            <img src="/img/logo.png" alt="">
        </RouterLink>
        <h1>Connectez-vous à votre bibliothèque</h1>
        <form action="/app" class="login-form" >
            <label for="" class="login-input-label">
                <span class="login-input-cation">Adresse mail du parent</span>
                <input type="email" name="mail" id="mail" placeholder="kikirobet@gmail.com" required>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Mot de passe</span>
                <input type="password" name="password" id="password" placeholder="******" required>
            </label>
            <button type="submit" class="std-btn btn-orange">Je me connecte</button>
            <div>ou</div>
            <RouterLink to="/inscription"><button type="button" class="std-btn login-btn0">Je n’ai pas encore de compte</button></RouterLink>
            
        </form>
    </main>
</template>