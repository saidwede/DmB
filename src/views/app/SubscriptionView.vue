<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { ref } from 'vue';
    import axios from 'axios';
    import { useAuthUserStore } from '@/stores/authUser'
    import {
        openKkiapayWidget,
        addKkiapayListener,
        removeKkiapayListener,
    } from "kkiapay";

    axios.defaults.baseURL = "https://dahomey-api.000webhostapp.com/";
    let kkiaPayPublicKey = '978e22b0ad6911eeb08c1b8cbd760182'; let isKkiaSandBox = true;


    const userState = useAuthUserStore()
    function subscribe(plan_id = 1, price = 1000){
        openKkiapayWidget({
            sandbox: isKkiaSandBox,
            amount:price,
            position:"center",
            theme:"#0097B2",
            email: userState.user.email,
            phone: "",
            name: userState.user.first_name+" "+userState.user.last_name,
            key:kkiaPayPublicKey
        });
        addKkiapayListener('success', (response) => {
            console.log(userState.user.id)
            axios.post(
                "subscribe",
                {
                    user_id: userState.user.id,
                    plan_id: plan_id,
                    payment_reference: response.transactionId
                },
                {withCredentials: true, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then((response) => {
                console.log(response.data)
                alert("Abonnement Activé!");
                userState.checkSubscription()
            }).catch((error) => {
                alert("Echec!")
                console.log(error)
            })
        });
        addKkiapayListener('failed', () => {
            alert("Echec du paiement!")
        });
        addKkiapayListener('insufficient_fund', () => {
            alert("Echec du paiement!")
        });
        addKkiapayListener('processing_error', () => {
            alert("Echec du paiement!")
        });
        addKkiapayListener('payment_declined', () => {
            alert("Echec du paiement!")
        });
    }
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
                <button class="std-btn btn-orange" @click="subscribe(2, 5000)">Je m'abonne !</button>
                
            </div>
            <div class="pricing-card orange-card">
                <h3>King</h3>
                <p class="price">15000/Mois</p>
                <p>
                    Accédez à toutes nos histoires et aux mises à jour dans une période de 30 jours.
                    <br><br>
                    Intégrez notre communauté et permettez à votre enfant de participer à des évènements éducatifs
                </p>
                <button class="std-btn btn-green" @click="subscribe(1, 15000)">Je m'abonne !</button>
            </div>
        </div>
    </div>
</template>