// stored data... potentially for state management?
//const SOMEKEY = ''; // a key for what?
import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/savedlist'

Vue.use(Vuex)

const savehere = [data]; // this may need a different key for pois exclusively?

console.log(`${savehere} is data feed...` )

const stored = new Vuex.Store({

  state: { // keep track of state changes
    items: savehere,
    pushto: []

  },

  getters: {
    listCount: state => {
      return state.pushto.length

    }

  },

  mutations: {
    addToList(state, payload) {
      state.pushto.push()

    }

  },

  actions: {
    addToList(context, payload) {
      context.commit('addToList', payload.item)

    }/*,

    removeFromList() {
      context.

    }
*/
  }

})

console.log(stored.state.pushto.length)

export default {
  stored

}
