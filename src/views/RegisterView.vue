<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <main class="login-container">
        <RouterLink to="/" class="logo-img">
            <img src="/img/logo.png" alt="">
        </RouterLink>
        <h1>Creer un compte</h1>
        <form action="/app"  class="login-form">
            <label for="" class="login-input-label">
                <span class="login-input-cation">Nom</span>
                <input type="text" name="last_name" id="last_name" placeholder="Exemple: kiki" required>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Prénoms</span>
                <input type="text" name="first_name" id="first_name" placeholder="Exemple: Banbou" required>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Date de naissance</span>
                <input type="date" name="birth_date" id="birth_date" placeholder="Exemple: 09/12/2015" required>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Sex</span>
                <select name="sex" id="sex" required>
                    <option disabled selected>Exemple: Fille</option>
                    <option value="f">Fille</option>
                    <option value="m">Garçon</option>
                </select>
            </label>
            <label for="" class="login-input-label">
                <span class="login-input-cation">Adresse mail du parent</span>
                <input type="email" name="mail" id="mail" placeholder="kikirobet@gmail.com" required>
            </label>
            <button type="submit" class="std-btn btn-orange">Je crée mon compte</button>
            <div>ou</div>
            <RouterLink to="/connexion"><button type="button" class="std-btn login-btn0">J'ai déjà un compte</button></RouterLink>
            
        </form>
    </main>
</template>