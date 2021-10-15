import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [],
    menu: {},
    form: {},
  },
  mutations: {
    setMenus: function(state,menus) {
      state.menus = menus
    },
    setMenu: function(state,menu) {
      state.form = menu
    }
  },
  actions: {
    getMenus: function({commit}){
      return axios.get('/api/menus')
          .then(response => {
            commit('setMenus',response.data)
          })
    },
    createMenu: function ({commit}) {
      if (!this.state.form.title) return;
      axios.post('/api/menus', {
        menu: this.state.form
      })
      .then(response => {
        commit('setMenu',response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  },
  modules: {
  }
})