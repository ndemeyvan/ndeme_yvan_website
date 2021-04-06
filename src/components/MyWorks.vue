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
            <h1 class="big_title mb-3">Sengoku 3</h1>
            <p class="summary_project">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              esse adipisci expedita maxime suscipit eius doloremque ea deleniti
              aliquam enim, ullam quibusdam, quas repellendus, itaque natus
              accusantium recusandae. Non, dolores?
            </p>
            <a class="contact-me" href="mailto:ndemeyvan@gmail.com"
              >SOURCE CODE</a
            >
          </div>
        </div>
        <div class="col-md-6 project_images">
          <div class="image_item1">
          
          </div>
          <div class="image_item2">
            
          </div>
          <div class="image_item3">
           
          </div>
          <div class="image_item4">
           
          </div>
          <div class="image_item2">
          </div>
          <div class="image_item4">
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
  grid-template-columns: 25% 25% 25%;
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
  background-image: url("../assets/img/floraison.jpg");
  background-size: cover; 
   height: 250px;
  background-color: blue;
   cursor: pointer;
}
.image_item6 {
  background-image: url("../assets/img/floraison.jpg");
  background-size: cover; 
   height: 250px;
  background-color: blue;
   cursor: pointer;
}
</style>