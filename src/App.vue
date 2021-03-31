<template>
  <NavBar/>
  <Hearder/>
  <MonExpertise/>
  <MyWorks/>
  <Compagnie/>
    <AboutMe/>

</template>

<script>
import Hearder from '../src/components/Header'
import NavBar from '../src/components/NavBar'
import MonExpertise from '../src/components/MonExpertise'
import MyWorks from '../src/components/MyWorks'
import Compagnie from '../src/components/Compagnie'
import AboutMe from '../src/components/AboutMe'

export default {
  name: 'App',
  components: {
    Hearder,
    NavBar,
    MonExpertise,
    MyWorks,
    Compagnie,
    AboutMe
  }
}
</script>

<style>
/* body{
/* font-family: 'Space Grotesk', sans-serif; */
/* font-family: 'Karla', sans-serif; 
} */
</style>
