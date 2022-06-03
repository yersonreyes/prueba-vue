<template>
  <div
    class="modal fade"
    :id="index"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 aclass="modal-title" id="exampleModalLabel">{{ name }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label>Nombre</label>
              <input v-model="nombreOpinion" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Opiniones</label>
              <textarea v-model="textoOpinion" class="form-control" rows="3"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button @click="agregarOpinionModal" type="button" class="btn btn-primary">
            Guardar Opinion
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    nombreOpinion: '',
    textoOpinion: ''
  }),
  props: ['name', 'index'],

  methods: {
    ...mapActions('opiniones', ['agregarOpinion']),

    agregarOpinionModal() {
      this.agregarOpinion({
        titulo: this.name,
        nombre: this.nombreOpinion,
        opinion: this.textoOpinion
      })
      this.nombreOpinion = ''
      this.textoOpinion = ''
    }
  }
}
</script>

<style></style>
