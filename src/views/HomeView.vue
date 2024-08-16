<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
const faqArray = [
    {
        question: "Comment puis-je accéder à Dahomey Book ?",
        answer: "Pour accéder à Dahomey Book, il vous suffit de vous inscrire sur notre site web en créant un compte. Une fois inscrit, vous pourrez vous connecter à notre plateforme et commencer à explorer nos histoires captivantes."
    },
    {
        question: "Quels types d'histoires sont disponibles sur Dahomey Book ?",
        answer: "Dahomey Book propose une variété d'histoires qui célèbrent la richesse culturelle de l'Afrique. Vous trouverez des contes traditionnels, des récits historiques, des légendes folkloriques et bien plus encore, adaptés à différents âges et intérêts."
    },
    {
        question: "À partir de quel âge mes enfants peuvent-ils lire les histoires sur Dahomey Book ?",
        answer: "Nos histoires sont conçues pour être accessibles à un large éventail d'âges, allant des tout-petits aux adolescents. Nous recommandons généralement nos histoires aux enfants à partir de 10 ans, mais chaque enfant est différent, alors n'hésitez pas à explorer nos contenus pour trouver ce qui convient le mieux à votre enfant."
    },
    {
        question: "Puis-je partager mon compte Dahomey Book avec d'autres personnes ?",
        answer: "Oui, vous pouvez partager votre compte Dahomey Book avec d'autres membres de votre famille ou amis. Cependant, veuillez noter que l'accès à certaines fonctionnalités ou contenus peut varier en fonction du type d'abonnement que vous avez."
    },
    {
        question: "Comment puis-je annuler mon abonnement à Dahomey Book ?",
        answer: "Pour annuler votre abonnement à Dahomey Book, veuillez vous rendre dans la section \"Paramètres\" de votre compte et sélectionner l'option d'annulation d'abonnement. Vous pouvez également nous contacter directement via notre formulaire de contact pour obtenir de l'aide supplémentaire."
    },
    {
        question: "Comment puis-je obtenir de l'aide si j'ai des questions ou des problèmes avec mon compte ?",
        answer: "Si vous avez des questions ou des problèmes avec votre compte Dahomey Book, n'hésitez pas à nous contacter via notre formulaire de contact sur notre site web. Notre équipe d'assistance se fera un plaisir de vous aider et de répondre à toutes vos préoccupations dans les plus brefs délais."
    },
    {
        question: "Comment puis-je payer mon abonnement à Dahomey Book ?",
        answer: "Vous pouvez payer votre abonnement à Dahomey Book en utilisant différentes méthodes de paiement disponibles sur notre site web, y compris les paiement mobiles money et les cartes bancaires."
    }
];
const faq = ref();
</script>

<template>
  <div class="banner">
    <img src="/img/cases_paysage.png" class="bg-img" alt="" />
    <div class="banner-content">
      <p class="welcome-text">Découvre l’histoire de ton pays en t’amusant !</p>
      <RouterLink to="/inscription"
        ><button class="std-btn btn-green">Commencer maintenant</button></RouterLink
      >
    </div>
  </div>
  <section class="home-section green-section" id="about-section">
    <h2 class="section-title">C’est quoi Dahomey Book ?</h2>
    <p class="section-content">
        L'histoire, lorsqu'elle n'est pas partagée, se perd dans les brumes du temps. C'est pourquoi Dahomey Book est né. 
      <br /><br />
        Notre mission est simple : rendre l'histoire de nos peuples accessible à tous, tout en stimulant le désir de voyage chez les enfants, en compagnie de notre mascotte vibrante de vie
    </p>
    <RouterLink to="/inscription">
      <button class="std-btn btn-orange">Je crée mon compte maintenant</button>
    </RouterLink>
  </section>
  <section class="white-section pricing-section" id="pricing-section">
    <h2 class="section-title">Nos offres</h2>
    <div class="pricing-cards-container">
        <div class="pricing-cards">
            <div class="pricing-card orange-card">
                <h3>Plan Découverte</h3>
                <p class="price">Gratuit pendant 3 mois</p>
                <p>
                    Accès limité à une sélection d'histoires représentatives de la culture béninoise.
                    <br><br>Mises à jour mensuelles avec de nouvelles histoires.
                    <br><br>Support client de base.

                </p>
                <RouterLink to="/inscription">
                <button class="std-btn btn-green">Je m'abonne !</button>
                </RouterLink>
            </div>
        <div class="pricing-card green-card">
            <h3>Basique</h3>
            <p class="price">3000/Mois</p>
            <p>
                Accès complet à toutes les histoires disponibles.
                <br><br>Mises à jour régulières avec de nouveaux contenus.
                <br><br>Possibilité de participer à des événements éducatifs organisés par Dahomey Book.
                <br><br>Support client prioritaire.
            </p>
            <RouterLink to="/inscription">
            <button class="std-btn btn-orange">Je m'abonne !</button>
            </RouterLink>
        </div>
        <div class="pricing-card orange-card">
            <h3>Plan Famille</h3>
            <p class="price">8000/Mois</p>
            <p>
                Accès à des ressources supplémentaires pour les parents, y compris des guides pédagogiques et des activités ludiques.
                <br><br>Invitations exclusives à des événements communautaires et culturels.
                <br><br>Support client premium.
            </p>
            <RouterLink to="/inscription">
            <button class="std-btn btn-green">Je m'abonne !</button>
            </RouterLink>
        </div>
        </div>
    </div>
  </section>
  <section class="home-section orange-section team-section">
    <h2 class="section-title">L'équipe</h2>
    <div class="team-members">
      <div class="team-member">
        <img src="/img/members/vincent.png" alt="Vincent photo" />
        <span class="team-member_name">Vincent</span>
        <span class="team-member_role">Product Designer</span>
      </div>
      <div class="team-member">
        <img src="/img/members/loic.png" alt="Loïc photo" />
        <span class="team-member_name">Loïc</span>
        <span class="team-member_role">Brand Designer</span>
      </div>
      <div class="team-member">
        <img src="/img/members/olive.png" alt="Xavier photo" />
        <span class="team-member_name">Xavier</span>
        <span class="team-member_role">Head of Content</span>
      </div>
      <div class="team-member">
        <img src="/img/members/moses.png" alt="Vincent photo" />
        <span class="team-member_name">Moses</span>
        <span class="team-member_role">Illustrateur</span>
      </div>
      <div class="team-member">
        <img src="/img/members/said.png" alt="Saïd photo" />
        <span class="team-member_name">Saïd</span>
        <span class="team-member_role">Développeur</span>
      </div>
    </div>
  </section>
  <section class="home-section white-section faq-section">
    <h2 class="section-title">FAQ - Dahomey Book</h2>
    <div v-for="QA in faqArray" class="qw-card">
      <p>
        <span class="question"
          >{{ QA.question }}<span class="caret-down">&#9660;</span></span
        >
        <span class="answer"
          ><br>{{ QA.answer }}</span
        >
      </p>
    </div>

  </section>
  <section class="home-section blue-section form-section">
    <h2 class="section-title">Nous contacter</h2>
    <div class="form-section--container">
      <form action="" class="form-section--left">
        <h3 class="form-section--title">Ecrivez-nous !</h3>
        <input class="form-section--input" type="text" placeholder="Votre nom complet" />
        <input class="form-section--input" type="email" placeholder="Votre adresse mail" />
        <textarea
          class="form-section--input"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Tapez votre message ici..."
        ></textarea>
        <button class="std-btn btn-orange">Envoyer le message</button>
      </form>
      <div class="form-section--right">
        <div>
          <h4 class="form-section--title">Numero de téléphone</h4>
          <a href="tel:+22997998608" class="form-section--details">+229 97 99 86 08</a>
        </div>
        <div>
          <h4 class="form-section--title">Adresse mail</h4>
          <a href="mailto:contact@dahomeybook.com" class="form-section--details"
            >contact@dahomeybook.com</a
          >
        </div>
        <div>
          <h4 class="form-section--title">Réseau sociaux</h4>
          <p class="form-section--details">
            <a href="#" class="form-section--social">
              <i class="fa-brands fa-facebook-f" style="color: #fcb913"></i>
            </a>
            <a href="#" class="form-section--social">
              <i class="fa-brands fa-twitter" style="color: #fcb913"></i>
            </a>
            <a href="#" class="form-section--social">
              <i class="fa-brands fa-instagram" style="color: #fcb913"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  html, body {
    touch-action: pan-x pan-y;
    -ms-touch-action: pan-x pan-y;
  }
</style>