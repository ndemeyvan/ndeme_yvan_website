<template>
  <div id="works">
    <div class="title text-center">
      <p class="litle_title">MES TRAVAUX</p>
      <h1 class="big_title">Mes travaux</h1>
    </div>
    <div class="container project_zone">
      <div class="row">
        <div class="col-md-6 project_summary">
          <div>
            <h1 class="big_title mb-3">{{ title }}</h1>
            <p class="summary_project">{{ resume }}</p>
            <p v-html="description"></p>
            <a class="contact-me" :href="link" target="_blank">VOIR</a>
            <p class="nota_bene mt-3">
              NB: Cliquez sur une image pour un résumé du projet
            </p>
          </div>
        </div>
        <div class="col-md-6 project_images">
          <div class="image_item2" @click="ChangeToElement1"></div>
          <div class="image_item4" @click="ChangeToElement4"></div>
          <div class="image_item1" @click="ChangeToElement2"></div>
          <div class="image_item3" @click="ChangeToElement3"></div>
          <div class="image_item5" @click="ChangeToElement5"></div>
          <div class="image_item6" @click="ChangeToElement6"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Efarm mobile",
      resume:
        "L'application eFarm.cm est une plateforme mobile innovante pour l'achat et la vente de produits exclusivement agricoles.",
      description:
        "L'application Efarm est une boutique en ligne qui vise à faciliter la vente des produits des agriculteurs. <br><br> L'application a été développée en Flutter, c'était un vrai défi pour moi de créer les interfaces utilisateurs rapidement tout en respectant le design et de finalement intégrer les APIs qui m'ont été données.  <br><br> J'ai beaucoup appris de ce projet et je continue à développer des mises à jour pour ce client car ce projet me tient également à cœur.",
      link:
        "https://play.google.com/store/apps/details?id=com.bee_studio.efarm",
    };
  },
  methods: {
    ChangeToElement1() {
      this.title = "Efarm mobile";
      this.resume =
        "L'application eFarm.cm est une plateforme mobile innovante pour l'achat et la vente de produits exclusivement agricoles.";
      this.description =
        "L'application Efarm est une boutique en ligne qui vise à faciliter la vente des produits des agriculteurs. <br><br> L'application a été développée en Flutter, c'était un vrai défi pour moi de créer les interfaces utilisateurs rapidement tout en respectant le design et de finalement intégrer les APIs qui m'ont été données.  <br><br> J'ai beaucoup appris de ce projet et je continue à développer des mises à jour pour ce client car ce projet me tient également à cœur.";
      this.link =
        "https://play.google.com/store/apps/details?id=com.bee_studio.efarm";
    },
    ChangeToElement2() {
      this.title = "Login Ui";
      this.description =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloresse adipisci expedita maxime suscipit eius doloremque ea delenitialiquam enim, ullam quibusdam, quas repellendus, itaque natusaccusantium recusandae. Non, dolores?";
      this.link = "https://www.google.com";
      this.resume = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    },
    ChangeToElement3() {
      this.title = "Personal Portfolio";
      this.resume =
        "Comparez, achetez et économisez avec l'application Floraison, le 1er comparateur de prix et d'offres promotionnelles exclusivement dédié aux biens de consommation au Cameroun.";
      this.description =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloresse adipisci expedita maxime suscipit eius doloremque ea delenitialiquam enim, ullam quibusdam, quas repellendus, itaque natusaccusantium recusandae. Non, dolores?";
      this.link = "https://www.google.com";
      this.resume = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    },
    ChangeToElement4() {
      this.title = "Floraison app";
      this.resume =
        "Comparez, achetez et économisez avec l'application Floraison, le 1er comparateur de prix et d'offres promotionnelles exclusivement dédié aux biens de consommation au Cameroun.";
      this.description =
        "L'application Floraison est le premier comparateur de prix au Cameroun.<br> <br>L'application a été développée avec le langage Java nativement, c'était un de mes premiers vrais projets, il m'a permis de mettre en pratique ce que j'avais appris (Recycleview, intégration Api, utilisation de firebase etc.) sans oublier le travail d'équipe qui est quelque chose de très important.<br> <br>C'est ce projet qui m'a donné une base solide, qui m'a permis d'affronter plus sereinement d'autres projets plus complexes.";
      this.link = "https://play.google.com/store/apps/details?id=market.floraison.com.floraisonmobilemarket";
    },
    ChangeToElement5() {
      this.title = "B commerce";
      this.description =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloresse adipisci expedita maxime suscipit eius doloremque ea delenitialiquam enim, ullam quibusdam, quas repellendus, itaque natusaccusantium recusandae. Non, dolores?";
      this.link = "https://www.google.com";
      this.resume = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    },
    ChangeToElement6() {
      this.title = "Activa assurance";
      this.description =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloresse adipisci expedita maxime suscipit eius doloremque ea delenitialiquam enim, ullam quibusdam, quas repellendus, itaque natusaccusantium recusandae. Non, dolores?";
      this.link = "https://www.google.com";
      this.resume = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    },
  },
  components: {},
};
</script>

<style scoped>
.project_images .row {
  padding: 0;
}
#works {
  min-height: 500px;
}
.litle_title {
  margin-top: 70px;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  line-height: 20px;
  color: #b4b2c5;
}
.big_title {
  font-weight: 700;
  color: #130f49;
  font-size: 64px;
  font-style: normal;
  font-family: "Space Grotesk", sans-serif;
}

.info-text {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: #b4b2c5;
}

.project_zone {
  margin-bottom: 100px;
  margin-top: 100px;
}

.project_summary {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-me {
  cursor: pointer;
  border: none;
  background-color: black;
  padding: 5px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 1px;
  text-align: center;
  outline: none;
  font-family: "Karla", sans-serif;
  font-weight: 200;
  color: white;
}
.summary_project {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  line-height: 20px;
  color: black;
}
.project_images {
  display: grid;
  grid-template-columns: 10fr 10fr 10fr;
}

.image_item1 {
  background-image: url("../assets/img/login_ui.jpg");
  background-size: cover;
  height: 250px;
  background-color: fuchsia;
  cursor: pointer;
}

.image_item2 {
  background-image: url("../assets/img/efram_home.jpg");
  background-size: cover;
  height: 250px;
  background-color: green;
  cursor: pointer;
}
.image_item3 {
  background-image: url("../assets/img/portfolioApp.jpg");
  background-size: cover;
  height: 250px;
  background-color: firebrick;
  cursor: pointer;
}
.image_item4 {
  background-image: url("../assets/img/floraison.jpg");
  background-size: cover;
  height: 250px;
  background-color: blue;
  cursor: pointer;
}
.image_item5 {
  background-image: url("../assets/img/b_commerc.jpg");
  background-size: cover;
  height: 250px;
  background-color: blue;
  cursor: pointer;
}
.image_item6 {
  background-image: url("../assets/img/activa_showroom.png");
  background-size: cover;
  height: 250px;
  background-color: blue;
  cursor: pointer;
}

.block {
  -webkit-animation: scaledown 1s linear;
  -moz-animation: scaledown 1s linear;
  animation: scaledown 1s linear;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards;
}

.block:hover {
  z-index: 100;
  -webkit-animation: scale 1s linear;
  -moz-animation: scale 1s linear;
  animation: scale 1s linear;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards;
}

.nota_bene {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: #b4b2c5;
}
</style>