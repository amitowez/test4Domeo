import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products:[],
    categories:[],
    rendering:{
      typeWorkWindow: 'all',
    }

  },
  mutations: {
      SET_POSTS(state, products) {
        state.products = products
      },
      SET_CATEGORIES(state, categories){
        state.categories = categories
      }
  },
  actions: {
      getPosts({ commit }) {
          axios.get('https://jsonplaceholder.typicode.com/posts')
              .then(response => {
                  commit('SET_POSTS', response.data)
          })
      },
  
  },
  modules: {
  }
})
