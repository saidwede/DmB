<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="banner">
    <img src="/img/cases_paysage.png" class="bg-img" alt="">
    <div class="banner-content">
        <p class="welcome-text">Découvre l’histoire de ton pays en t’amusant !</p>
        <RouterLink to="/inscription"><button class="std-btn btn-green">Commencer maintenant</button></RouterLink>
    </div>
  </div>
<section class="home-section green-section" id="about-section">
    <h2 class="section-title">C’est quoi Danhomey Book ?</h2>
    <p class="section-content">
        L’histoire non transmise se perd et il est de notre responsabilité de raconter l’histoire de nos peuple aux générations futures.
        <br><br>
        C’est pour cela que book a vu le jour. Son objectif est simple. Rendre l’histoire de nos peuples facile d’accès tout en donnant envie aux enfant de voyager en compagnie de notre mascotte.
    </p>
    <RouterLink to="/inscription">
        <button class="std-btn btn-orange">Je crée mon compte maintenant</button>
    </RouterLink>
</section>
<section class="home-section white-section pricing-section" id="pricing-section" >
    <h2 class="section-title">Nos prix</h2>
    <div class="pricing-cards">
        <div class="pricing-card green-card">
            <h3>Basique</h3>
            <p class="price">5000/Mois</p>
            <p>
                Accédez à toutes nos histoires et aux mises à jour dans une période de 30 jours.
                <br><br>
                Et c'est tout!
            </p>
            <RouterLink to="/inscription">
                <button class="std-btn btn-orange">Je m'abonne !</button>
            </RouterLink>
            
        </div>
        <div class="pricing-card orange-card">
            <h3>King</h3>
            <p class="price">15000/Mois</p>
            <p>
                Accédez à toutes nos histoires et aux mises à jour dans une période de 30 jours.
                <br><br>
                Intégrez notre communauté et permettez à votre enfant de participer à des évènements éducatifs
            </p>
            <RouterLink to="/inscription">
                <button class="std-btn btn-green">Je m'abonne !</button>
            </RouterLink>
        </div>
    </div>
</section>
<section class="home-section orange-section team-section">
    <h2 class="section-title">L'équipe</h2>
    <div class="team-members">
        <div class="team-member">
            <img src="/img/members/vincent.png" alt="Vincent photo">
            <span class="team-member_name">Vincent</span>
            <span class="team-member_role">Product Designer</span>
        </div>
        <div class="team-member">
            <img src="/img/members/loic.png" alt="Loïc photo">
            <span class="team-member_name">Loïc</span>
            <span class="team-member_role">Brand Designer</span>
        </div>
        <div class="team-member">
            <img src="/img/members/olive.png" alt="Xavier photo">
            <span class="team-member_name">Xavier</span>
            <span class="team-member_role">Head of Content</span>
        </div>
        <div class="team-member">
            <img src="/img/members/moses.png" alt="Vincent photo">
            <span class="team-member_name">Moses</span>
            <span class="team-member_role">Illustrateur</span>
        </div>
        <div class="team-member">
            <img src="/img/members/said.png" alt="Saïd photo">
            <span class="team-member_name">Saïd</span>
            <span class="team-member_role">Développeur</span>
        </div>
    </div>
</section>
<section class="home-section white-section faq-section">
    <h2 class="section-title">Vous avez des question ?</h2>
    <div class="qw-card">
        <p>
            <span class="question">Comment je peux payer ? <span class="caret-down">&#9660;</span></span>
            <span class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </p>
        
    </div>
    <div class="qw-card">
        <p>
            <span class="question">Comment je peux payer ? <span class="caret-down">&#9660;</span></span>
            <span class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </p>
        
    </div>
    <div class="qw-card">
        <p>
            <span class="question">Le payement se fait en une fois ou chaque mois ? <span class="caret-down">&#9660;</span></span>
            <span class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </p>             
    </div>
    <div class="qw-card">
        <p>
            <span class="question">Je peux partager mon compte avec une autre personne? <span class="caret-down">&#9660;</span></span>
            <span class="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </p>           
    </div>
    <div class="qw-card is-active">
        <p>
            <span class="question">À partir de quel âge mon enfant peut lire et comprendre vos histoires ? <span class="caret-down">&#9660;</span></span>
            <span class="answer">
                A partir de quel âge mon enfant peut lire et comprendre vos histoire ? A partir de quel âge mon enfant peut lire et comprendre vos histoire ? A partir de quel âge mon enfant peut lire et comprendre vos histoire ? A partir de quel âge mon enfant peut lire et comprendre vos histoire ?
            </span>
        </p>        
    </div>

</section>
<section class="home-section blue-section form-section">
    <h2 class="section-title">Nous contacter</h2>
    <div class="form-section--container">
        <form action="" class="form-section--left">
            <h3 class="form-section--title">Ecrivez-nous !</h3>
            <input class="form-section--input" type="text" placeholder="Votre nom complet">
            <input class="form-section--input" type="email" placeholder="Votre adresse mail">
            <textarea class="form-section--input" name="" id="" cols="30" rows="10" placeholder="Tapez votre message ici..."></textarea>
            <button class="std-btn btn-orange">Envoyer le message</button>
        </form>
        <div class="form-section--right">
            <div>
                <h4 class="form-section--title">Numero de téléphone</h4>
                <a href="tel:+22997998608" class="form-section--details">+229 97 99 86 08</a>
            </div>
            <div>
                <h4 class="form-section--title">Adresse mail</h4>
                <a href="mailto:contact@dahomeybook.com" class="form-section--details">contact@dahomeybook.com</a>
            </div>
            <div>
                <h4 class="form-section--title">Réseau sociaux</h4>
                <p class="form-section--details">
                    <a href="#" class="form-section--social">
                        <i class="fa-brands fa-facebook-f" style="color: #FCB913;"></i>
                    </a>
                    <a href="#" class="form-section--social">
                        <i class="fa-brands fa-twitter" style="color: #FCB913;"></i>
                    </a>
                    <a href="#" class="form-section--social">
                        <i class="fa-brands fa-instagram" style="color: #FCB913;"></i>
                    </a>
                </p>
            </div>
        </div>
    </div>
</section>
</template>
