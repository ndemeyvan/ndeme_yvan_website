<template>
  <NavBar/>
  <Hearder/>
</template>

<script>
import Hearder from '../src/components/Header'
import NavBar from '../src/components/NavBar'

export default {
  name: 'App',
  components: {
    Hearder,
    NavBar
  }
}
</script>

<style>
body{
  font-family: 'Roboto', sans-serif;
}
</style>
