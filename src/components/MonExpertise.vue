<template>
  <div id="expertise">
    <div class="title text-center">
      <p class="litle_title">MY SKILLS</p>
      <h1 class="big_title">My Expertise</h1>
    </div>
    <div class="container list_skylls">
      <div class="row">
        <!-- Flutter -->
        <div class="col-lg-6 list_item">
          <div>
            <div class="card_header">
              <i class="fas fa-mobile logo_image_flutter"></i>
              <span>Flutter Developer</span>
            </div>
            <p class="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              explicabo id quisquam omnis minima tenetur, facilis iste ratione,
              possimus sint recusandae vitae totam? Fuga, ab recusandae
              temporibus dolore fugit ipsum!
            </p>
          </div>
        </div>
        <!-- Android -->
        <div class="col-lg-6 list_item">
          <div>
            <div class="card_header">
              <i class="fab fa-android logo_image_vuejs"></i>
              <span>Android Mobile developer</span>
            </div>
            <p class="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              explicabo id quisquam omnis minima tenetur, facilis iste ratione,
              possimus sint recusandae vitae totam? Fuga, ab recusandae
              temporibus dolore fugit ipsum!
            </p>
          </div>
        </div>
        <!-- Vuejs -->
        <div class="col-lg-6 list_item">
          <div>
            <div class="card_header">
              <i class="fab fa-vuejs logo_image_vuejs"></i>
              <span>Web developer With Vuejs</span>
            </div>
            <p class="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              explicabo id quisquam omnis minima tenetur, facilis iste ratione,
              possimus sint recusandae vitae totam? Fuga, ab recusandae
              temporibus dolore fugit ipsum!
            </p>
          </div>
        </div>
        <!-- Express -->
        <div class="col-lg-6 list_item">
          <div>
            <div class="card_header">
              <i class="fab fa-node logo_image_vuejs"></i>
              <span>Web developer With Express</span>
            </div>
            <p class="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              explicabo id quisquam omnis minima tenetur, facilis iste ratione,
              possimus sint recusandae vitae totam? Fuga, ab recusandae
              temporibus dolore fugit ipsum!
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
    return {


    };
  },
};
</script>

<style scoped>
#expertise {
  min-height: 500px;
}
.title {
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
   font-family: 'Space Grotesk', sans-serif;
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
.list_item:hover {
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07); */
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

</style>