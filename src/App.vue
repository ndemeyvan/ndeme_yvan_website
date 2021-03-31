<template>
  <NavBar/>
  <Hearder/>
  <MonExpertise/>
</template>

<script>
import Hearder from '../src/components/Header'
import NavBar from '../src/components/NavBar'
import MonExpertise from '../src/components/MonExpertise'

export default {
  name: 'App',
  components: {
    Hearder,
    NavBar,
    MonExpertise
  }
}
</script>

<style>
body{
  font-family: 'Roboto', sans-serif;
}
</style>
