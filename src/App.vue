<template>
 <div>
  <NavBar/>
  <Hearder/>
  <MonExpertise/>
  <MyWorks/>
  <!-- <Compagnie/> -->
    <AboutMe/>
    <Footer/>
 </div>

</template>

<script>
import Hearder from '../src/components/Header'
import NavBar from '../src/components/NavBar'
import MonExpertise from '../src/components/MonExpertise'
import MyWorks from '../src/components/MyWorks'
import AboutMe from '../src/components/AboutMe'
import Footer from '../src/components/Footer'


export default {
  name: 'App',
  components: {
    Hearder,
    NavBar,
    MonExpertise,
    MyWorks,
    // Compagnie,
    AboutMe,
    Footer

  }
}
</script>

<style>

@media only screen and (max-width: 600px) {
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
  font-size: 34px;
  font-style: normal;
  font-family: "Space Grotesk", sans-serif;
}
}

</style>
