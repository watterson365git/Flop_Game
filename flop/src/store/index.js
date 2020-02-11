import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    time:0
  },
  mutations: {
    addcount(state){
      state.count++;
    },
    addtime(state){
      state.time++;
    },
    cleartime(state){
      state.time = 0;
    },
    clearcount(state){
      state.count = 0;
    }

  },
  actions: {
  },
  modules: {
  }
})
