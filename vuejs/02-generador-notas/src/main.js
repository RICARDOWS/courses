//Instalacion de vue cli y vue init por separado
//Vue cli: npm install -g @vue/cli
//Vue init: npm install -g @vue/cli-init
//Template creado con: vue init webpack-simple 02-generador-notas

import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
