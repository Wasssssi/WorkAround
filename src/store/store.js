import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    counter: 1
  },
  getters: {
    counter: state => state.counter
  },
  mutations: {
    setCart(state) {
      state.counter ++
    },
    removeCartItems(state) {
      state.counter --;
    }
  },
  actions: {
    UPDATE_CART_WITH_FOOD_ITEMS(context) {
      context.commit('setCart')
    },
    REMOVE_ITEMS_FROM_CART(context) {
      context.commit('removeCartItems')
    }
  }
})

export default store;
