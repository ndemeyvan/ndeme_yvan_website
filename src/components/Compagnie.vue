<template>
  <div id="compagnie">
    <div class="title text-center">
      <p class="litle_title">MY COMPANIES</p>
      <h1 class="big_title">My Companies</h1>
    </div>

    <div class="container list_companies text-center">
     
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/img/kiroo_logo.png" class="logo" />
          <p class="mt-3 litle_title">Kiro'o Games</p>
        </div>
        <div class="col-md-4 logo">
          <img src="../assets/img/seven_logo.png" class="logo" />
          <p class="mt-3 litle_title">SevenGps</p>
        </div>

        <div class="col-md-4 logo">
          <img src="../assets/img/floraion_logo.jpg" class="logo" />
          <p class="mt-3 litle_title">Floraison</p>
        </div>
      </div>
       <p class=" work_description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolor
        quibusdam ducimus natus neque, illum perspiciatis maiores debitis iusto?
        Facilis iure voluptatibus velit amet ut quos blanditiis ab et natus.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
#compagnie {
  min-height: 500px;
}
.litle_title {
  margin-top: 70px;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: #b4b2c5;
}
.big_title {
  font-weight: 700;
  color: #130f49;
  font-size: 64px;
  font-style: normal;
  font-family: "Space Grotesk", sans-serif;
}

.list_companies {
  margin-top: 80px;
}
img {
  cursor: pointer;

  max-height: 100px;
  max-width: 100px;
}
.work_description{
      margin-top: 16px;
    font-family: "Karla", sans-serif;
    font-weight: 700;
    color: #b4b2c5;
}
</style>