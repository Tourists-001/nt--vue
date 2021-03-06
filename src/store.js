import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: {}
}
const mutations = {
  setPosition (state, val) {
    state.position = val
  }
}
const actions = {
  setPositions ({ commit }, val) {
    commit('setPosition', val)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
