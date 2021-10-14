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
  },
  actions: {
    // getMenus(state) {
    //   state.menus = [];
    //   axios.get('/api/menus').then((res) => {
    //     for(var i = 0; i < res.data.menus.length; i++) {
    //       state.menus.push(res.data.menus[i]);
    //     }
    //   }, (error) => {
    //     console.log(error);
    //   });
    // }
    getMenus: function({commit}){
      return axios.get('/api/menus')
          .then(response => {
            commit('setMenus',response.data)
          })
    },
    createMenu: function () {
      if (!this.state.form.title) return;
      axios.post('/api/menus/create', {
        menu: this.state.form
      })
      .then(function () {
        this.$router.push({ path: '/menus' });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  modules: {
  }
})