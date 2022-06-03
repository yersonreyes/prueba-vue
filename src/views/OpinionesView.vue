<template>
  <div class="container opinionesView">
    <h1 class="text-center">Lista de opiniones</h1>
    <div class="alert alert-danger" role="alert">No existen opiniones por mostrar</div>
    <ul>
      <li v-for="(opinion, $index) in opiniones" :key="$index">
        Opinion creada por :{{ opinion.nombre }} para el juego {{ opinion.titulo }}
        <hr />
        Opinion:{{ opinion.opinion }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'OpinionesView',
  components: {},
  computed: {
    ...mapState('opiniones', {
      opiniones: (state) => state.listado
    })
  }
}
</script>

<style scoped>
.opinionesView {
  margin-top: 2rem;
}
</style>
