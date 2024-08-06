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
    <div class="story-container">
      <h1>Le Roi Behanzin</h1>
      <p>Il était une fois, dans un pays lointain d'Afrique, un roi très courageux appelé Behanzin. Il était le roi du Dahomey, un pays plein de soleil, de forêts et de guerriers.  Behanzin était un grand chef, il aimait beaucoup son peuple et il se battait pour les protéger des envahisseurs.</p>
      <p>Un jour, des hommes venus d'un pays très lointain sont arrivés dans le Dahomey. Ils voulaient prendre le contrôle du pays et de ses richesses. Behanzin, brave comme un lion, a refusé de se laisser faire ! Il a mené ses guerriers au combat et a lutté avec courage pour défendre son royaume.</p>
      <p>Même si les envahisseurs étaient nombreux, les guerriers du Dahomey se sont battus avec fierté. Ils étaient très forts et très habiles au combat, et ils portaient de belles tenues et des casques colorés. Mais malheureusement, les envahisseurs étaient plus puissants et Behanzin a été vaincu.</p>
      <p>Behanzin a été emprisonné loin de son pays. Mais même en prison, il restait un grand chef. Il n'a jamais abandonné l'espoir de revoir son peuple et de le rendre libre.  L'histoire de Behanzin nous rappelle qu'il faut toujours se battre pour ce qui est juste, même quand les choses sont difficiles. </p>
    </div>
  </div>
</template>
