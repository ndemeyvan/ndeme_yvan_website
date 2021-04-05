<template>
  <div id="about">
    <div class="aboutMe text-start">
      <p class="litle_title">ENCHANTÉ DE VOUS RENCONTRER</p>
      <h1 class="big_title">
        Hey , moi c'est Ndeme Yvan. <br />
        Mobile et Web Développeur
      </h1>
      <p class="description">
        Je m'appelle Ndeme Yvan Rodrigue, je suis un développeur web et mobile
        depuis 3 ans. J'ai fait mes premières pas dans la création d'application
        mobile en natif (java) en 2018 . <br> Le code est une véritable passion pour
        moi. J'ai commencé à m'y intéresse très tot déjà au lycée et je suis
        ravi de vivre de ma passion aujourd'hui. <br><br> C'est ainsi que je me propose
        de mettre certaines de mes compétences et expériences à votre service,
        compétences qui sont :<br> - Développement mobile Cross platform avec Flutter :
        je conçois des applications cross Platform ( qui tourneront sur Android
        et Ios) grace a framework flutter et le langage Dart .<br> - Développement
        mobile Android natif : je me propose de vous faires applications android
        code nativement pour l'OS mobile android grace au langage java ou Kotlin .
        <br> - Développement web Front-end : je m’adapte facilement aux environnements
        des projets, aux méthodologies adoptées, aux technos utilisées , je travaille
        avec Vuejs la plupart du temps.
        <br>
   
      </p>
      <div class="author_wrap">
        <div class="author_image">
          <img
            src="../assets/img/ndeme_yvan.jpg"
            class="profile_image"
            alt=""
          />
        </div>
        <div class="author_name">
          <p class="person_name">Ndeme Yvan</p>
          <p class="person_post">Mobile et Web Développeur</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#about {
  background-color: #4caf50;
  /* min-height: 890px; */
  justify-content: center;
  align-items: center;
  padding: 132px 12%;
}

.litle_title {
  margin-top: 70px;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  line-height: 20px;
  color: white;
}
.description {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: white;
  font-size: 30px;
}
.big_title {
  font-weight: 700;
  color: #130f49;
  font-size: 70px;
  font-style: normal;
  font-family: "Space Grotesk", sans-serif;
}
.aboutMe {
  width: 100%;
}
.profile_image {
  max-height: 70px;
}
.person_name {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  line-height: 20px;
  color: white;
}
.bref_presentation_person {
  display: inline;
}
.person_post {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  line-height: 0px;
  color: #130f49;
}
.author_wrap {
  display: flex;
  display: flex;
  align-items: center;
}
.author_image {
  margin-right: 30px;
}
.social {
  font-size: 50px;
  margin: 0px 20px;
}
.social_network {
  justify-content: space-between;
  justify-content: space-evenly;
  display: flex;
  margin-top: 77px;
}
</style>