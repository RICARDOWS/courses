<template>
  <div >
      <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Titulo</th>
                <th scope="col">Body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts" :key="post.id">
                <td>{{post.id}}</td>
                <td>{{post.titulo}}</td>
                <td>{{post.body}}</td>
            </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'EjemploPost',
  data () {
    return {
      posts:[
          {id: 1, titulo: 'Post 1', body: 'Contenido 1'},
          {id: 2, titulo: 'Post 2', body: 'Contenido 2'},
          {id: 3, titulo: 'Post 3', body: 'Contenido 3'},
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
