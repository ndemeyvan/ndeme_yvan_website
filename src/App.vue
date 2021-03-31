<template>
  <NavBar/>
  <Hearder/>
  <MonExpertise/>
  <MyWorks/>
</template>

<script>
import Hearder from '../src/components/Header'
import NavBar from '../src/components/NavBar'
import MonExpertise from '../src/components/MonExpertise'
import MyWorks from '../src/components/MyWorks'

export default {
  name: 'App',
  components: {
    Hearder,
    NavBar,
    MonExpertise,
    MyWorks,
  }
}
</script>

<style>
/* body{
/* font-family: 'Space Grotesk', sans-serif; */
/* font-family: 'Karla', sans-serif; 
} */
</style>
