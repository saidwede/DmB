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
        <h1>Modifie ton profile</h1>
        <div class="profile-container">
            <h2 class="form-section-title">Photo de profile</h2>
            <img src="/img/person.png" alt="" srcset="">
            <button class="std-btn btn-green">Changer la photo de profile</button>
            <form action="." class="login-form" >
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
                <button type="submit" class="std-btn btn-orange">Enregister les modifications</button>
                
            </form>
        </div>
    </div>
</template>