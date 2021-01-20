<template>
  <div id="app">
   <h3>{{titulo}}</h3>
   <div class="form">
    <div class="form-group">
      <label for="tituloNota">Título</label>
      <input type="text" name="tituloNota" id="tituloNota" class="form-control" v-model="nota.titulo">
    </div>
    <div class="form-group">
      <label for="textNota">Texto</label>
      <textarea name="textNota" id="textNota" class="form-control" v-model="nota.texto"></textarea>
    </div>
    <button class="btn btn-primary" @click="addNota">Guardar</button>
   </div>
   <div class="col-md-12">
     <div class="col-md-4 nota" v-for="(nota,index) in notas" v-bind:key="index">
       <div class="card">
         <div class="card-body">
           <div class="card-title">{{nota.titulo}}</div>
           <div class="card-subtitle mb-2 text-muted">{{nota.fecha}}</div>
           <p class="card-text">{{nota.texto}}</p>
         </div>
         <button class="close" @click='deleteNota(index)'>&times;</button>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titulo: 'Gestión de notas',
      nota:{
        titulo:'',
        texto:'',
      },
      notas:[
        {
          titulo: 'Nota 1',
          texto: 'Texto de prueba',
          fecha: new Date(Date.now()).toLocaleString()
        }
      ],
    }
  },
  methods:{
    addNota(){
      let {texto,titulo} = this.nota;
      this.notas.push({
        texto,
        titulo,
        fecha: new Date(Date.now()).toLocaleString()
      });  
      this.clearFields();
    },
    deleteNota(indexNota){
      this.notas.splice(indexNota,1);
    },
    clearFields(){
      this.nota.titulo = "";
      this.nota.texto = "";
    }
  }
}
</script>

<style>
  .form{
    text-align: left;
  }
  .card{
    text-align: left;
    border: 1px solid #2c3e50;
    border-radius: 4px;
  }
  .nota{
    padding: 5px;
  }
</style>
