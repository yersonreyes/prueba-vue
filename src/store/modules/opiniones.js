export const opinionesModule = {
  namespaced: true,
  state: {
    listado: []
  },
  mutations: {
    SET_LISTADO(state, newListado) {
      state.listado.push(newListado)
    },
    DELETE_LISTADO(state, newListado) {
      state.listado.splice(newListado, 1)
    }
  },
  actions: {
    agregarOpinion(context, opinion) {
      context.commit('SET_LISTADO', opinion)
    },
    eliminarOpinion(context, opinion) {
      context.commit('DELETE_LISTADO', opinion)
    },
    editarOpinion(context, opinion) {
      context.commit('DELETE_LISTADO', opinion)
    }
  }
}
