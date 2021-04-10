<template>
  <div id="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-4 col-lg-5 col-md-5 col-sm-4">
          <div class="person_image">
            <img src="../assets/img/ndeme_yvan.jpg" alt="" />
          </div>
        </div>
        <div class="col-xl-8 col-lg-7 col-md-7 col-sm-8">
          <div class="hero__caption">
            <h1 class="profession">
              Moi c'est Ndeme Rodrigue.<br />
              Mobile / Web Développeur
            </h1>
            <p class="small_description">
              Développeur Android (Flutter / Natif) / Web (Vuejs)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
#header {
  min-height: 956px;
  background-color: #4caf50;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-info {
  margin-top: 90px;
  font-family: "Karla", sans-serif;
}
.profession {
  color: white;
  font-weight: 500;
  font-weight: 400;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 64px;
  font-style: normal;
}

.small_description {
  color: black;
  font-size: 20px;
  font-weight: 750;
  padding-top: 15px;
}

span {
  font-weight: 400;
  font-size: 26px;
}

p {
  font-weight: 400;
  font-size: 20px;
}
i {
  font-size: 40px;
  margin: 20px;
  cursor: pointer;
}
i:hover,
hover:active {
  color: #fff;
  color: #000;
  transition: color 0.3s ease-in, color 0.3s ease-in;
}
img {
  max-height: 300px;
}
/* Media query */
@media only screen and (max-width: 600px) {
  #header {
    min-height: 500px;
    background-color: #4caf50;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  img {
    margin-top: 70px;
    max-height: 120px;
  }
  .profession {
    color: blue-grey;
    font-weight: 500;
    font-size: 20px;
    font-weight: 300;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 600;
    font-style: normal;
    margin-top: 40px;
  }

  .small_description[data-v-61dd7a3d] {
    color: black;
    font-size: 20px;
    font-weight: 750;
    padding-top: 15px;
  }
}
</style>
