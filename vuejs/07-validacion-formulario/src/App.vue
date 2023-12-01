<template>
 <form @submit.prevent="enviar" class="form">
  <my-input 
    name="Usuario" 
    :rules="{ required: true, min:5 }"
    :value="usuario.value"
    @update="update"
    type="text"
  />
  
  <my-input 
    name="Password" 
    :rules="{ required: true, min:10 }"
    :value="password.value"
    @update="update"
    type="password"
  />
   
  <my-button 
    color="white" 
    background="darkslateblue" 
    :disabled="!valid" 
  /> 
 </form> 

</template>

<script>
import MyButton from './components/MyButton.vue'
import MyInput from './components/MyInput.vue'

export default {
  name: 'App',
  components: {
    MyButton,
    MyInput
  },
  data(){
    return {      
      usuario: {
        value: '',
        valid: false
      },
      password:{
        value: '',
        valid: false
      } 
    }
  },
  computed: {
    valid(){
      return this.usuario.valid && this.password.valid
    }
  },
  methods:{
    enviar(){      
      console.log('Enviar');

      //Código para validar el formulario
    },
    update(payload){      
      this[payload.name.toLowerCase()] = {
        value: payload.value,
        valid: payload.valid
      };
    }
  }
}
</script>

<style>

 body{
   font-family: arial;
 }

 .form{
   max-width: 400px;
   width: 50%;
 }

</style>
