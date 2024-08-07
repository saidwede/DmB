<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import axios from '../../lib/axiosInstance'
import { useAuthUserStore } from '@/stores/authUser'
import { openKkiapayWidget, addKkiapayListener, removeKkiapayListener } from 'kkiapay'
import LoadingAnim from '../../components/LoadingAnim.vue'
import { useUiStore } from '@/stores/uiStore'

const uiStore = useUiStore()

let fedaPayPublicKey = 'pk_sandbox_4LYKqW0RSMGWORj5cRQtiQWt'
let fedaPayEnvironment = 'sandbox'
let kkiaPayPublicKey = '978e22b0ad6911eeb08c1b8cbd760182'
let isKkiaSandBox = true

const loading = ref(false)

const userState = useAuthUserStore()
function subscribe(plan_id = 1, price = 1000) {
  loading.value = true
  let widget = FedaPay.init({
    environment: fedaPayEnvironment,
    transaction: {
      amount: price,
      description: 'plan' + plan_id
    },
    customer: {
      email: userState.user.email,
      firstname: userState.user.first_name,
      lastname: userState.user.last_name
    },
    public_key: fedaPayPublicKey,
    onComplete: (response) => {
      if (response.reason == FedaPay.CHECKOUT_COMPLETED) {
        axios
          .post(
            'subscribe',
            {
              user_id: userState.user.id,
              plan_id: plan_id,
              payment_reference: response.transaction.transaction_key
            }
          )
          .then((response) => {
            console.log(response.data)
            uiStore.displayToast('Abonnement Activé!')
            userState.checkSubscription()
          })
          .catch((error) => {
            uiStore.displayToast('Echec!', 'error')
            console.log(error)
          })
          .finally(() => {
            loading.value = false
          })
      } else {
        uiStore.displayToast('Echec du paiement!', 'error')
        loading.value = false
      }
    }
  })
  widget.open()
}
</script>
<template>
  <div class="card-contaner">
    <RouterLink to="/app">
      <button class="std-btn btn-green" id="bnt-back">
        <i class="fa-solid fa-chevron-left" style="margin-right: 10px"></i><span>Retour</span>
      </button>
    </RouterLink>
    <h1>Prendre un abonement</h1>
    <div class="pricing-cards">
      <div class="pricing-card green-card">
        <h3>Basique</h3>
        <p class="price">3000/Mois</p>
        <p>
            Accès complet à toutes les histoires disponibles.
            <br><br>Mises à jour régulières avec de nouveaux contenus.
            <br><br>Possibilité de participer à des événements éducatifs organisés par Dahomey Book.
            <br><br>Support client prioritaire.
        </p>
        <button class="std-btn btn-orange" @click="subscribe(2, 3000)" :disabled="loading">
          <span v-if="!loading">Je m'abonne !</span>
          <LoadingAnim v-if="loading"></LoadingAnim>
        </button>
      </div>
      <div class="pricing-card orange-card">
        <h3>Plan Famille</h3>
        <p class="price">8000/Mois</p>
        <p>
            Accès à des ressources supplémentaires pour les parents, y compris des guides pédagogiques et des activités ludiques.
            <br><br>Invitations exclusives à des événements communautaires et culturels.
            <br><br>Support client premium.
        </p>
        <button class="std-btn btn-green" @click="subscribe(2, 8000)" :disabled="loading">
          <span v-if="!loading">Je m'abonne !</span>
          <LoadingAnim v-if="loading"></LoadingAnim>
        </button>
      </div>
    </div>
  </div>
</template>
