<template>
   <button @click='contar()'>{{contador}}</button>
</template>

<script>
export default {
  name: 'Contador',
  data(){
      return {
          contador: 0,
      }
  },
  methods:{
      contar(){
          this.contador++;
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
