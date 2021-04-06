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
// import Compagnie from '../src/components/Compagnie'
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
/* body{
/* font-family: 'Space Grotesk', sans-serif; */
/* font-family: 'Karla', sans-serif; 
} */
</style>
