<template>
<div class="container">
  <!-- <img src="./assets/logo.png"> -->
  <!-- <HelloWorld/> -->
  <AppHeader></AppHeader>
  <EjemploPost></EjemploPost>
  <AppFooter></AppFooter>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import EjemploPost from './components/Posts'
import AppHeader from './components/Header'
import AppFooter from './components/Footer'

export default {
  name: 'App',
  components: {
    EjemploPost,AppHeader,AppFooter
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
</style>
