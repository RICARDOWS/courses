<template>
  <div id="app">
    <center>
      <img alt="Vue logo" src="./assets/logo.png"><br/>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <app-contador></app-contador>
      <app-contador></app-contador>
      <app-contador></app-contador>
      <app-contador></app-contador>
      <app-contador></app-contador>
      <br/>

      <h2>Listado de planes de cursos de programación</h2>
      <div class="planes">
        <app-planes/>
      </div>
    </center>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import AppContador from './components/Contador.vue'
import AppPlanes from './components/Planes.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    AppContador,
    AppPlanes
  },
  data(){
    return{}    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

</style>
