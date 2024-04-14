<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import axios from 'axios';
    import { useAuthUserStore } from '@/stores/authUser'
    import { ref } from 'vue';
    import LoadingAnim from '../../components/LoadingAnim.vue';
    import { useUiStore } from '@/stores/uiStore'
    import { Cropper } from 'vue-advanced-cropper';
    import 'vue-advanced-cropper/dist/style.css';

    const uiStore = useUiStore()



    const userState = useAuthUserStore()

    const firstName = ref(userState.user.first_name)
    const lastName = ref(userState.user.last_name)
    const dateOfBirrth = ref(userState.user.date_of_birth)
    const dataLoading = ref(false)
    const showProfileModal = ref(false)
    const profilCanva = ref(null)
    const profilePic = ref(userState.user.img)
    const profilePicInput = ref(null)
    function hideModal(){
        showProfileModal.value = false
    }
    function showModal(){
        showProfileModal.value = true
    }
    const modalContentRef = ref(null)
    document.addEventListener("click", (event) => {
        if(!modalContentRef.value.contains(event.target)){
            hideModal()
        }
    })
    const img = ref("")

    axios.defaults.baseURL = "https://api.dahomeybook.com";

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
            {withCredentials: true}
        ).then((response) => {
            userState.getUserInfos()
            uiStore.displayToast("Information mise à jour avec succès!")
        }).catch((error) => {
            uiStore.displayToast("Echec de la mise à jour! Veuillez reéssayer.", "alert")
        }).finally(() => {
            dataLoading.value = false
        })
    }
    function change({ coordinates, canvas }) {
        profilCanva.value = canvas
		//console.log(coordinates, canvas);
	}
    function filechange(event){
        img.value = URL.createObjectURL(event.target.files[0])
        showModal()
    }
    function saveProfilePic(){
        if(profilCanva.value != null){
            profilePic.value = profilCanva.value.toDataURL()
            hideModal()
            const blob = dataURLtoBlob(profilePic.value);
            const formData = new FormData();
            formData.append('profile_pic', blob);

            // Make Axios POST request
            axios.post(`upload-profile-pic/${userState.user.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        }
    }
    function dataURLtoBlob(dataUrl) {
        const arr = dataUrl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
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
            <img :src="`${profilePic != '/img/person.png' ? axios.defaults.baseURL+'/' : ''}${profilePic}`" alt="" srcset="" class="profile-pic">
            <label >
                <input type="file" accept="image/png, image/jpeg" ref="profilePicInput" @change="filechange" style="display:none">
                <button class="std-btn btn-green" @click="() => {profilePicInput.click()}">Changer la photo de profile</button>
            </label>
            
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

    <div :class="`simple-modal ${showProfileModal ? 'is-active' : ''}`">
        <div class="modal-content" ref="modalContentRef">
            <cropper :src="img" @change="change"  :stencil-props="{ aspectRatio: 1/1 }" class="cropper"/>
            <button @click="saveProfilePic" class="std-btn rd-btn btn-green">
                Sauvegarder
            </button>
        </div>
    </div>
</template>

<style scoped>
    .modal-content{
        padding: 10px;
        max-height: calc(100vh - 200px);
        overflow: hidden;
    }
    .cropper{
        width: 100%;
        max-height: calc(100vh - 200px);
        border-radius: 22px;
        overflow: hidden;
    }
    .simple-modal{
        position: fixed;
        top: 0px;
        height: 0px;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        display: none;
        background-color: #0000004d;
    }
    .is-active{
        display: block;
    }
    .simple-modal button{
        height: 64px;
        width: 275px;
        padding: 0px;
        margin-top: 10px;
    }
    .profile-pic{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
</style>