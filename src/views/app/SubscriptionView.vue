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
        <h1>Prendre un abonement</h1>
        <div class="pricing-cards">
            <div class="pricing-card green-card">
                <h3>Basique</h3>
                <p class="price">5000/Mois</p>
                <p>
                    Accédez à toutes nos histoires et aux mises à jour dans une période de 30 jours.
                    <br><br>
                    Et c'est tout!
                </p>
                <a href="#">
                    <button class="std-btn btn-orange">Je m'abonne !</button>
                </a>
                
            </div>
            <div class="pricing-card orange-card">
                <h3>King</h3>
                <p class="price">15000/Mois</p>
                <p>
                    Accédez à toutes nos histoires et aux mises à jour dans une période de 30 jours.
                    <br><br>
                    Intégrez notre communauté et permettez à votre enfant de participer à des évènements éducatifs
                </p>
                <a href="#">
                    <button class="std-btn btn-green">Je m'abonne !</button>
                </a>
            </div>
        </div>
    </div>
</template>