// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Template creado con: vue init webpack 03-componentes
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//Componentes

/*let component1 = Vue.extend({
  template: '',
});*/

//Componentes basicos individuales
/* let component2 = Vue.extend({
  template: '<h3>{{subtitulo}}</h3>',
  data(){
    return {
      subtitulo: 'Lista de Frameworks JavaScript'
    }
  }
});

let component3 = Vue.extend({
  data(){
    return {
      frameworks:[
        {id: 1, titulo: 'Vue js'},
        {id: 2, titulo: 'Angular'},
        {id: 3, titulo: 'React'},
      ],
    }
  },
  template: '<div><ul><framework v-for="item in frameworks" :key="item.id">{{item.titulo}}</framework></ul></div>',
});

Vue.component('component-saludo',{
  data(){
    return{
      titulo: 'Introducción a componentes'
    }
  },
  methods:{
    display(){
      console.log('Metodo display');
    }
  }
});

Vue.component('component-titulo',component2);

Vue.component('component-lista',component3);

Vue.component('framework',{
  template:'<li><slot></slot></li>',
}); */

new Vue({
  el: '#app',
  components:{App},
  template: '<App/>'
})
