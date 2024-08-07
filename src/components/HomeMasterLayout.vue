<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <div class="tool-bar">
      <div class="tool-bar-left-group">
        <a href="#about-section">
          <button class="top-btn btn-transparent btn-shadow">À propos</button>
        </a>
        <a href="#pricing-section">
          <button class="top-btn btn-transparent">Prix</button>
        </a>
      </div>
      <div class="logo-img">
        <img src="/img/logo_white.png" alt="" />
      </div>
      <div class="tool-bar-right-group">
        <RouterLink to="/connexion">
          <button class="top-btn btn-blue btn-shadow">Se connecter</button>
        </RouterLink>
        <RouterLink to="./inscription/">
          <button class="top-btn btn-white">S'inscrire</button>
        </RouterLink>
      </div>
      <div class="burger-menu-btn">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
    <div class="mobile-top-menu">
      <nav>
        <ul>
          <li class="mobile-top-link"><a href="#about-section">À propos</a></li>
          <li class="mobile-top-link"><a href="#pricing-section">Prix</a></li>
          <li class="menu-btn-link">
            <RouterLink to="/inscription" class="">
              <button class="std-btn btn-green">Commencer maintenant</button>
            </RouterLink>
          </li>
          <li class="menu-btn-link">
            <RouterLink to="/connexion" class="">
              <button class="std-btn btn-white">Se connecter</button>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="mobile-top-menu-overlay"></div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="footer-content">
      <img src="/img/logo_white.png" alt="" />
      <p>@fait avec amour par Dahomey Book , 2024</p>
    </div>
  </footer>
</template>
<style scoped></style>
