<template>
  <div id="works">
    <div class="title text-center">
      <p class="litle_title">MES TRAVAUX</p>
      <h1 class="big_title">Mes travaux</h1>
    </div>
    <div class="container-fluid project_zone">
      <div class="row">
        <!-- Efarm -->
        <div class="col-md-6 project_summary px-5">
          <div>
            <h1 class="big_title mb-3">Efarm mobile</h1>
            <p class="summary_project">
              L'application eFarm.cm est une plateforme mobile innovante pour
              l'achat et la vente de produits exclusivement agricoles.
            </p>
            <p>
              L'application Efarm est une boutique en ligne qui vise à faciliter
              la vente des produits des agriculteurs. <br /><br />
              L'application a été développée en Flutter, c'était un vrai défi
              pour moi de créer les interfaces utilisateurs rapidement tout en
              respectant le design et de finalement intégrer les APIs qui m'ont
              été données. <br /><br />
              J'ai beaucoup appris de ce projet et je continue à développer des
              mises à jour pour ce client car ce projet me tient également à
              cœur.
            </p>
            <a class="see_more" href="link" target="_blank">VOIR</a>
          </div>
        </div>
        <div class="col-md-6 efarm_image"></div>
        <!-- Floraison -->
        <div class="col-md-6 floraison_image"></div>
        <div class="col-md-6 project_summary px-5">
          <div>
            <h1 class="big_title mb-3">Floraison app</h1>
            <p class="summary_project">
              Comparez, achetez et économisez avec l'application Floraison, le
              1er comparateur de prix et d'offres promotionnelles exclusivement
              dédié aux biens de consommation au Cameroun.
            </p>
            <p>
              L'application Floraison est le premier comparateur de prix au
              Cameroun.<br />
              <br />L'application a été développée avec le langage Java
              nativement, c'était un de mes premiers vrais projets, il m'a
              permis de mettre en pratique ce que j'avais appris (Recycleview,
              intégration Api, utilisation de firebase etc.) sans oublier le
              travail d'équipe qui est quelque chose de très important.<br />
              <br />C'est ce projet qui m'a donné une base solide, qui m'a
              permis d'affronter plus sereinement d'autres projets plus
              complexes.
            </p>
            <a class="see_more" :href="link" target="_blank">VOIR</a>
          </div>
        </div>
        <!-- Activa cost app -->
        <div class="col-md-6 project_summary px-5">
          <div>
            <h1 class="big_title mb-3">Activa Cost app</h1>
            <p class="summary_project">
              L'application eFarm.cm est une plateforme mobile innovante pour
              l'achat et la vente de produits exclusivement agricoles.
            </p>
            <p>
              L'application Efarm est une boutique en ligne qui vise à faciliter
              la vente des produits des agriculteurs. <br /><br />
              L'application a été développée en Flutter, c'était un vrai défi
              pour moi de créer les interfaces utilisateurs rapidement tout en
              respectant le design et de finalement intégrer les APIs qui m'ont
              été données. <br /><br />
              J'ai beaucoup appris de ce projet et je continue à développer des
              mises à jour pour ce client car ce projet me tient également à
              cœur.
            </p>
            <a class="see_more" href="link" target="_blank">VOIR</a>
          </div>
        </div>
        <div class="col-md-6 activa_costapp_image"></div>
        <!-- B_commerce -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  // methods: {
  //   ChangeToElement1() {
  //     this.title = "Efarm mobile";
  //     this.resume =
  //       "L'application eFarm.cm est une plateforme mobile innovante pour l'achat et la vente de produits exclusivement agricoles.";
  //     this.description =
  //       "L'application Efarm est une boutique en ligne qui vise à faciliter la vente des produits des agriculteurs. <br><br> L'application a été développée en Flutter, c'était un vrai défi pour moi de créer les interfaces utilisateurs rapidement tout en respectant le design et de finalement intégrer les APIs qui m'ont été données.  <br><br> J'ai beaucoup appris de ce projet et je continue à développer des mises à jour pour ce client car ce projet me tient également à cœur.";
  //     this.link =
  //       "https://play.google.com/store/apps/details?id=com.bee_studio.efarm";
  //   },
  //   ChangeToElement2() {
  //     this.title = "Login Ui";
  //       this.resume =
  //       "Speed Ui - Écran de connexion";
  //     this.description =
  //       "Il s'agit d'un tutoriel que j'ai réalisé sur ma chaîne <i class='fab fa-youtube logo_image_youtub'></i><span> Youtubeur</span> lorsque j'avais quelques minutes à perdre.<br>j'y montre comment il est possible de coder un écran de connexion complet en quelques minutes. <br>likez et abonnez-vous à ma page :)";
  //     this.link = "https://www.youtube.com/watch?v=K8fhEM06EjM";
  //   },
  //   ChangeToElement3() {
  //     this.title = "Personal Portfolio";
  //     this.resume =
  //       "Vous voulez m'avoir dans votre poche ? Téléchargez mon portfolio sur le PlayStore";
  //     this.description =
  //       "Vous voulez m'avoir dans votre poche ? Téléchargez mon portfolio sur le PlayStore.<br><br>L'application a été développée en Flutter, vous y trouverez un résumé de moi et des technologies que j'utilise régulièrement.";
  //     this.link = "https://www.google.com";
  //   },
  //   ChangeToElement4() {
  //     this.title = "Floraison app";
  //     this.resume =
  //       "Comparez, achetez et économisez avec l'application Floraison, le 1er comparateur de prix et d'offres promotionnelles exclusivement dédié aux biens de consommation au Cameroun.";
  //     this.description =
  //       "L'application Floraison est le premier comparateur de prix au Cameroun.<br> <br>L'application a été développée avec le langage Java nativement, c'était un de mes premiers vrais projets, il m'a permis de mettre en pratique ce que j'avais appris (Recycleview, intégration Api, utilisation de firebase etc.) sans oublier le travail d'équipe qui est quelque chose de très important.<br> <br>C'est ce projet qui m'a donné une base solide, qui m'a permis d'affronter plus sereinement d'autres projets plus complexes.";
  //     this.link =
  //       "https://play.google.com/store/apps/details?id=market.floraison.com.floraisonmobilemarket";
  //   },
  //   ChangeToElement5() {
  //     this.title = "B_commerce";
  //     this.description =
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloresse adipisci expedita maxime suscipit eius doloremque ea delenitialiquam enim, ullam quibusdam, quas repellendus, itaque natusaccusantium recusandae. Non, dolores?";
  //     this.link = "https://www.google.com";
  //     this.resume = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  //   },

  // },
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

.see_more {
  display: inline-block;
  width: 200px;
  padding: 8px;
  color: black;
  border: 1px solid black;
  text-align: center;
  outline: none;
  text-decoration: none;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
  cursor: pointer;
}

.see_more:hover,
.see_more:active {
  display: inline-block;
  width: 200px;
  padding: 8px;
  color: white;
  border: 1px solid black;
  text-align: center;
  outline: none;
  background-color: black;
  text-decoration: none;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
}
.summary_project {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  line-height: 20px;
  color: black;
}
.efarm_image {
  background-image: url("../assets/img/efarm_mockup.png");
  background-size: cover;
  height: 500px;
  background-color: blue;
  cursor: pointer;
}
.floraison_image {
  background-image: url("../assets/img/floraion_mockup.png");
  background-size: cover;
  height: 500px;
  background-color: blue;
  cursor: pointer;
}

.activa_costapp_image{
    background-image: url("../assets/img/activa_mockup.jpeg");
  background-size: cover;
  height: 500px;
  background-color: blue;
  cursor: pointer;
}

</style>