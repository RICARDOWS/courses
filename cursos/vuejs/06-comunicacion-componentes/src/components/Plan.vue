<template>
    <div class="plan" @click="seleccionar()" :class="{'plan-activo' : seleccionado}">
        <div class="descripcion">
            <span class="titulo">{{nombrePlan}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Plan',
  props:{
      nombrePlan: {
            type: String,
            default: 'Sin nombre',
            required: true
          },
  },
  data(){
      return {
          seleccionado: false,
      }
  },
  methods:{
      seleccionar(){
          this.seleccionado = !this.seleccionado;
          this.$emit('seleccionar',{nombreP: this.nombrePlan, estado: this.seleccionado}); //mandar nombrePlan a componente padre con el nombre del evento
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>