<template>
  <NavBar/>
  <Hearder/>
  <MonExpertise/>
  <MyWorks/>
  <Compagnie/>
</template>

<script>
import Hearder from '../src/components/Header'
import NavBar from '../src/components/NavBar'
import MonExpertise from '../src/components/MonExpertise'
import MyWorks from '../src/components/MyWorks'
import Compagnie from '../src/components/Compagnie'

export default {
  name: 'App',
  components: {
    Hearder,
    NavBar,
    MonExpertise,
    MyWorks,
    Compagnie
  }
}
</script>

<style>
/* body{
/* font-family: 'Space Grotesk', sans-serif; */
/* font-family: 'Karla', sans-serif; 
} */
</style>
