<template>
  <div id="about">
    <div class="aboutMe text-start">
      <p class="litle_title">NICE TO MEET YOU</p>
      <h1 class="big_title">
        Hey , I'm Ndeme Yvan. <br />
        Mobile and Web Developer
      </h1>
      <p class="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut asperiores
        aliquam ipsa exercitationem distinctio! Ullam, deserunt eveniet quod
        exercitationem qui soluta nihil vel modi esse a aliquam! Totam, illum
        aut! Magnam iusto, tenetur exercitationem hic sequi minima temporibus
        recusandae adipisci dolores expedita veniam eos sunt explicabo nihil
        molestiae nostrum labore quis? Eveniet perspiciatis, iusto enim
        consequatur sint possimus! Similique, libero!
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
          <p class="person_post">Mobile and Web Developer</p>
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
  font-size:30px;
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