<template>
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12  col-sm-12">
          <div class="author_wrap right_side">
            <div class="author_name">
              <p class="person_name text-light">Ndeme Yvan</p>
              <p class="person_post text-light">Développeur mobile et Web</p>
            </div>
            <div class="email_me">
              <p class="person_post text-light">Envoyez-moi un courriel à :</p>
              <p class="person_email text-light">
                <i class="far fa-envelope-open icon envelope mr-2"></i>
                ndemeyvan@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12  col-sm-12 ">
          <div class="left_side">
            <h1 class="text-light big_text">Lets Talk!</h1>
            <p class="text-light desciption">
              Je suis toujours prêt à discuter de votre projet, à améliorer
              votre présence en ligne ou à vous aider à relever vos défis en
              matière de conception UX/UI.
            </p>
            <div class="">
              <div class="social_icons">
                <a
                  href="https://www.linkedin.com/in/ndeme-yvan-127a981a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin-in icon"></i
                ></a>
                <a
                  href="https://www.facebook.com/yvan10ndeme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-facebook-messenger icon"></i
                ></a>
                <a
                  href="https://github.com/ndemeyvan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github icon"></i
                ></a>
                <a
                  href="https://twitter.com/ndemeYvan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-twitter icon"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-5" />
        <p class="all_right_reserved text-center text-light">
         Made with ❤️ by Ndeme Yvan Rodrigue
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
#footer {
  background-color: #0f1221;
  padding: 104px 15%;
}

.author_wrap {
  align-items: center;
  margin-bottom: 30px;
}
.person_name {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: white;
  font-size: 25px;
}
.person_email {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: white;
  font-size: 18px;
}
.person_post {
  font-family: "Karla", sans-serif;
  font-weight: 400;
  color: white;
}
.email_me {
  margin-top: 30px;
}
.big_text {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: white;
  font-size: 80px;
  margin-bottom: 1%;
}
.desciption {
  font-family: "Karla", sans-serif;
  font-weight: 400;
  color: white;
}
.social_icons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
}
.icon {
  font-size: 20px;
  color: white;
  cursor: pointer;
}
.icon:hover,
.icon:active {
  color: #4caf50;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
}
.envelope {
  margin-right: 10px;
}

@media only screen and (max-width: 600px) {
  #footer {
    background-color: #0f1221;
    padding: 70px 2%;
    text-align: -webkit-center;
  }
  .big_text {
    font-size: 50px;
  }


}

@media only screen and (max-width: 1024px) {
  #footer {
    background-color: #0f1221;
    padding: 70px 2%;
    text-align: -webkit-center;
  }
  .big_text {
    font-size: 50px;
  }

}
</style>