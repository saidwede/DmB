<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import axios from '../../lib/axiosInstance'
import { useAuthUserStore } from '@/stores/authUser'
import LoadingAnim from '../../components/LoadingAnim.vue'
import { useUiStore } from '@/stores/uiStore'

const uiStore = useUiStore()

</script>
<template>
  <div class="card-contaner">
    <RouterLink to="/app">
      <button class="std-btn btn-green" id="bnt-back">
        <i class="fa-solid fa-chevron-left" style="margin-right: 10px"></i><span>Retour</span>
      </button>
    </RouterLink>
    <h1>Histoire II</h1>
    <div></div>
  </div>
</template>
