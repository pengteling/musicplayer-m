import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import player from './player'
import list from './list'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  // state: {
  //   isShowFtPlayer: false,
  //   goBackTit: '',
  // },
  // mutations: {
  //   showFtPlayer(state, isShow) {
  //     state.isShowFtPlayer = isShow
  //   },
  //   setGoBackTit(state, tit) {
  //     state.goBackTit = tit
  //   },

  // },
  state: {
    sliders: [],
    isShowFtPlayer: false,
    goBackTit: '',
  },
  mutations: {
    setSliders(state, sliders) {
      state.sliders = sliders
    },
    showFtPlayer(state, isShow) {
      state.isShowFtPlayer = isShow
    },
    setGoBackTit(state, tit) {
      state.goBackTit = tit
    },
  },
  actions: {
    getSliders({ commit, state }) {
      if (state.sliders.length <= 0) {
        return axios.get('/api/getSlider').then((res) => {
          console.log(res)
          // this.sliders = res.data.data.slider
          // state.sliders = res.data.data.slider
          commit('setSliders', res.data.data.slider)
        })
      }
      return Promise.resolve('')
    },
  },

  modules: {
    list,
    player,
  },
})

export default store
