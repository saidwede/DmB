<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import axios from 'axios';
    import { useAuthUserStore } from '@/stores/authUser'
    import { ref } from 'vue';
    import LoadingAnim from '../../components/LoadingAnim.vue';
    import { useUiStore } from '@/stores/uiStore'
    
    const uiStore = useUiStore()



    const userState = useAuthUserStore()

    const firstName = ref(userState.user.first_name)
    const lastName = ref(userState.user.last_name)
    const dateOfBirrth = ref(userState.user.date_of_birth)
    const dataLoading = ref(false)

    axios.defaults.baseURL = "https://dahomey-api.000webhostapp.com/";

    function submitForm(){
        dataLoading.value = true
        axios.post(
            "update-user-info",
            {
                id: userState.user.id,
                jwt_token: localStorage.getItem("jwt_token"),
                "first_name": firstName.value,
                "last_name": lastName.value,
                "date_of_birth": dateOfBirrth.value
            },
            {withCredentials: true, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        ).then((response) => {
            userState.getUserInfos()
            uiStore.displayToast("Information mise à jour avec succès!")
        }).catch((error) => {
            uiStore.displayToast("Echec de la mise à jour! Veuillez reéssayer.", "alert")
        }).finally(() => {
            dataLoading.value = false
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
        <h1>Modifie ton profile</h1>
        <div class="profile-container">
            <h2 class="form-section-title">Photo de profile</h2>
            <img src="/img/person.png" alt="" srcset="">
            <button class="std-btn btn-green">Changer la photo de profile</button>
            <form @submit.prevent="submitForm" class="login-form" >
                <label for="" class="login-input-label">
                    <span class="login-input-cation">Nom</span>
                    <input type="text" v-model="lastName" name="last_name" id="last_name" placeholder="Exemple: kiki" required>
                </label>
                <label for="" class="login-input-label">
                    <span class="login-input-cation">Prénoms</span>
                    <input type="text" v-model="firstName" name="first_name" id="first_name" placeholder="Exemple: Banbou" required>
                </label>
                <label for="" class="login-input-label">
                    <span class="login-input-cation">Date de naissance</span>
                    <input type="date" v-model="dateOfBirrth" name="birth_date" id="birth_date" placeholder="Exemple: 09/12/2015" required>
                </label>
                <button type="submit" class="std-btn btn-orange" :disabled="dataLoading">
                    <span v-if="!dataLoading">Enregister les modifications</span>
                    <LoadingAnim v-if="dataLoading"></LoadingAnim>
                </button>
                
            </form>
        </div>
    </div>
</template>