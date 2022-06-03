<template>
  <form class="container mt-5">
    <div class="form-group">
      <label>Nombre</label>
      <input v-model="nombreOpinion" placeholder="hola" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>Opiniones</label>
      <textarea v-model="textoOpinion" placeholder="aaaa" class="form-control" rows="3"></textarea>
    </div>
    <button type="button" class="btn btn-secondary">Volver</button>
    <button type="submit" class="ml-2 btn btn-primary">Editar</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    nombreOpinion: '',
    textoOpinion: ''
  })
}
</script>

<style></style>
