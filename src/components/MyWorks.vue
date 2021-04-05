<template>
  <div id="works">
    <div class="title text-center">
      <p class="litle_title">MES TRAVAUX</p>
      <h1 class="big_title">Mes travaux</h1>
    </div>

    <div class="container workItems">
      <div class="row">
        <div class="col-md-4 itemWork">
          <img
            src="../assets/img/efarm_login.jpg"
            class="cover"
           
          />
        </div>
        <div class="col-md-4 itemWork">
          <img
            src="../assets/img/portfolioApp.jpg"
            class="cover"
           
          />
        </div>
        <div class="col-md-4 itemWork">
          <img
            src="../assets/img/login_ui.jpg"
            class="cover" />
        </div>
      </div>
    </div>

    <!-- <div class="cards-1 section-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-image">
                <a href="#">
                  <img class="img" src="../assets/img/efram_home.jpg" />
                </a>
                <div class="ripple-cont"></div>
              </div>
              <div class="table">
                <h6 class="category text-info">Application mobile E-Farm</h6>
                <p class="card-description">
                  L'application efarm est une application développée avec le
                  Framework Flutter. <br />
                  Elle vise à mettre en relation les agriculteurs et les
                  acheteurs de produits alimentaires. acheteurs de produits
                  alimentaires. <br /> Ce projet était vraiment un défi pour moi en raison du
                  délai de livraison qui m'était imposé, Je devais aller plus
                  vite et faire du bon travail en même temps, comme faire plus
                  de 15 écrans en 1 jour en 1 jour, intégrer rapidement les API
                  et faire attention à la permormance des appareils et à
                  l'expérience utilisateur J'ai beaucoup appris sur Flutter. Une
                  version sera bientôt disponible sur le playstore.
                </p>

                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="git_repo"
                  >REPOSITORY GIT</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-image">
                <a href="#">
                  <img class="img" src="../assets/img/portfolioApp.jpg" />
                </a>
                <div class="ripple-cont"></div>
              </div>
              <div class="table">
                <h6 class="category text-info">E-Farm</h6>
                <p class="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam
                  lacinia elit et placerat finibus. Praesent justo metus,
                  pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus
                  odio antement, feugiat eget nisi sit amet, scelerisque
                  dignissim velit antement.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-image">
                <a href="#">
                  <img class="img" src="../assets/img/login_ui.jpg" />
                </a>
                <div class="ripple-cont"></div>
              </div>
              <div class="table">
                <h6 class="category text-info">B commerce</h6>
                <p class="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam
                  lacinia elit et placerat finibus. Praesent justo metus,
                  pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus
                  odio antement, feugiat eget nisi sit amet, scelerisque
                  dignissim velit antement.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-image">
                <a href="#">
                  <img class="img" src="../assets/img/b_commerce_home.jpg" />
                </a>
                <div class="ripple-cont"></div>
              </div>
              <div class="table">
                <h6 class="category text-info">B commerce</h6>
                <p class="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam
                  lacinia elit et placerat finibus. Praesent justo metus,
                  pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus
                  odio antement, feugiat eget nisi sit amet, scelerisque
                  dignissim velit antement.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-image">
                <a href="#">
                  <img class="img" src="../assets/img/activa_showroom.png" />
                </a>
                <div class="ripple-cont"></div>
              </div>
              <div class="table">
                <h6 class="category text-info">B commerce</h6>
                <p class="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam
                  lacinia elit et placerat finibus. Praesent justo metus,
                  pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus
                  odio antement, feugiat eget nisi sit amet, scelerisque
                  dignissim velit antement.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-image">
                <a href="#">
                  <img class="img" src="../assets/img/b_commerce_home.jpg" />
                </a>
                <div class="ripple-cont"></div>
              </div>
              <div class="table">
                <h6 class="category text-info">Eneo mobile application</h6>
                <p class="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam
                  lacinia elit et placerat finibus. Praesent justo metus,
                  pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus
                  odio antement, feugiat eget nisi sit amet, scelerisque
                  dignissim velit antement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
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

.list_works {
  margin-top: 80px;
}


/* ======= GENERAL  ======= */

body,
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4 {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
}


p {
  color: #3c4857;
}

h1,
.h1 {
  font-size: 3.8em;
}

h2,
.h2 {
  font-size: 2em;
  line-height: 1.6em;
  margin: 15px 0 15px;
  font-weight: 700;
  font-family: "Roboto Slab", "Times New Roman", serif;
  text-align: center;
}

h3,
.h3 {
  font-size: 1.825em;
  line-height: 1.4em;
  margin: 30px 0 30px;
  font-weight: 700;
  font-family: "Roboto Slab", "Times New Roman", serif;
  text-align: center;
}

h4,
.h4 {
  font-size: 1.3em;
  line-height: 1.55em;
}

h5,
.h5 {
  font-size: 1.25em;
  line-height: 1.55em;
  margin-bottom: 15px;
}

h6,
.h6 {
  font-size: 0.9em;
  font-weight: 500;
}
.info-text {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: #b4b2c5;
}
.card-description {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: #b4b2c5;
}
.text-info {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: #b4b2c5;
}
.git_repo {
  text-decoration: none;
  color: #b4b2c5;
  font-family: "Karla", sans-serif;
}
.git_repo:hover {
  text-decoration: none;
  color: black;
  font-weight: 700;
  color: #b4b2c5;
  font-family: "Karla", sans-serif;
}

/* news */
.itemWork {
  min-height: 761px;
  
  /* background-color: red; */
  transition: all 0.2s ease-in-out;
}
.itemWork:hover {
  transform: scale(1.1);
}

.workItems {
  margin-top: 100px;
  margin-bottom: 100px;
}
.cover {
  height: 100%;
  width:100%;
  object-fit: cover;
  cursor: pointer
}
</style>