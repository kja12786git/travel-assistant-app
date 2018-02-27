// stored data... potentially for state management?
//const SOMEKEY = ''; // a key for what?
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const stored = new Vuex.Store({
  state: {
    count: 0

  },
  mutations: {
    increment (state) {
      state.count++

    }
  }
})

console.log(stored.state.count)

export default {
  stored

}
