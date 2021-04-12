<template>
  <div id="expertise">
    <div class="title text-center">
      <p class="litle_title">MES COMPÉTENCES</p>
      <h1 class="big_title">Mes Competences</h1>
    </div>
    <div class="container list_skylls">
      <div class="row">
        <!-- Flutter -->
        <div class="col-lg-6 list_item">
          <div>
            <div class="card_header">
              <i class="fas fa-mobile logo_image_flutter"></i>
              <span>Développeur Flutter</span>
            </div>
            <p class="mt-3 skill_description">
              J'ai une bonne connaissance du framework mobile Flutter, très
              facile à comprendre et à utiliser, le langage Dart n'était pas un
              problème pour moi car j'ai une expérience du développement
              d'applications natives avec java. Depuis lors, j'utilise Flutter
              pour la plupart de mes projets d'application.
            </p>
          </div>
        </div>
        <!-- Android -->
        <div class="col-lg-6 list_item">
          <div>
            <div class="card_header">
              <i class="fab fa-android logo_image_vuejs"></i>
              <span>Développeur Android Mobile</span>
            </div>
            <p class="mt-3 skill_description">
              J'ai toujours été curieux de comprendre le fonctionnement des
              applications les plus populaires, c'est ainsi que j'ai commencé à
              développer des applications mobiles natives d'abord avec Java et
              Kotlin.
            </p>
          </div>
        </div>
        <!-- Vuejs -->
        <div class="col-lg-6 list_item">
          <div>
            <div class="card_header">
              <i class="fab fa-vuejs logo_image_vuejs"></i>
              <span>Développeur Web avec Vuejs</span>
            </div>
            <p class="mt-3 skill_description">
              Lorsque j'ai voulu m'essayer au web avec mes connaissances de base
              en javascript, après avoir testé les différents frameworks
              disponibles sur le marché, le choix le plus évident a été vuejs,
              simple, propre, compréhensible et robuste, c'est un plaisir de
              travailler avec.
            </p>
          </div>
        </div>
        <!-- Express -->
        <div class="col-lg-6 list_item">
          <div>
            <div class="card_header">
              <i class="fab fa-node logo_image_vuejs"></i>
              <span>Express / SpringBoot </span>
            </div>
            <p class="mt-3 skill_description">
              De temps en temps, sur des projets, il arrive que l'on ait besoin
              de mettre en place rapidement un serveur avec MongoDb/MySql comme
              base de données sans trop de prise de tête. Express et SpringBoot
              sont des FrameWorks adaptés à ce genre de choses, faciles à mettre
              en place sans avoir de grandes connaissances, il est facile de
              faire des choses intéressantes.
            </p>
          </div>
        </div>
        <!-- Youtube -->
        <div class="col-lg-6 list_item">
          <div>
            <div class="card_header">
              <i class="fab fa-youtube logo_image_youtube"></i>
              <span>Youtubeur</span>
            </div>
            <p class="mt-3 skill_description">
              Depuis quelques mois, quand j'ai un peu de temps libre, je crée du
              contenu sur ma chaîne
              <a
                href="https://www.youtube.com/channel/UCsEsYHr8O0jKpskPTEEqWow"
                class="youtube_link"
                target="_blank"
              >
                youtube <i class="fa fa-youtube-play"></i
              ></a>
              plus orienté vers le codage d'applications mobiles avec le
              Framework Flutter, c'est vraiment un plaisir pour moi de partager
              ce que j'apprends avec les autres, même si je suis très occupé, je
              trouve toujours le temps de publier une vidéo de temps en temps
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#expertise {
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

.list_skylls {
  margin-top: 80px;
}
.logo_image_vuejs {
  font-size: 50px;
  margin: 0px 20px;
  color: green;
}
.logo_image_reactjs {
  font-size: 50px;
  margin: 0px 20px;
  color: #61dbfb;
}
.logo_image_youtube {
  font-size: 50px;
  margin: 0px 20px;
  color: #ff0000;
}
.logo_image_flutter {
  font-size: 50px;
  margin: 0px 20px;
  color: #61dbfb;
}

.list_item {
  padding: 30px;
  border-radius: 16px;
  background-color: #fff;
  -webkit-transition: box-shadow 500ms ease;
  transition: box-shadow 500ms ease;
}

.card_header {
  display: flex;
  justify-content: start;
  align-items: center;
}
span {
  font-weight: 600;
  font-family: "Karla", sans-serif;
  font-size: 26px;
}
.skill_description {
  margin-top: 70px;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: #b4b2c5;
}
.youtube_link {
  text-decoration: none;
  color: #ff0000;
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .big_title {
    font-weight: 700;
    color: #130f49;
    font-size: 24px;
    font-style: normal;
    font-family: "Space Grotesk", sans-serif;
  }
  .skill_description {
    text-align: justify;
  }
  span{
    font-weight: 600;
    font-family: "Karla", sans-serif;
    font-size: 15px;
}
.card_header {
    flex-direction: column;
}
}

@media only screen and (max-width: 7680px) {
.card_header {
    flex-direction: column;
}
 .skill_description {
    text-align: justify;
  }
 

}
</style>