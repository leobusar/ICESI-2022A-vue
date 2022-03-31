import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: [],
    error: {
      mensaje: "",
      type: null
    }
  },
  mutations: {
    addToFavoritesM: (state, payload) => {
      if (!state.favorites.includes(payload))
        state.favorites.push(payload)
    },
    changeError: (state, payload) => {
      state.error = payload
    }
  },
  actions: {
    addToFavorites: ({ commit }, payload) => {
      commit('addToFavoritesM', payload)
    },
    changeError:  ({ commit }, payload) => {
      commit('changeError', payload)
    },
  },
  modules: {
  }
})
