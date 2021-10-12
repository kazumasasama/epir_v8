import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [],
  },
  mutations: {
    setMenus: function(state,menus) {
      state.menus = menus
    }
  },
  actions: {
    getMenus(state) {
      state.menus = [];
      axios.get('/api/menus').then((res) => {
        for(var i = 0; i < res.data.menus.length; i++) {
          state.menus.push(res.data.menus[i]);
        }
      }, (error) => {
        console.log(error);
      });
    }
  },
  modules: {
  }
})
