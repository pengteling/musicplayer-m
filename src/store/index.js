import Vuex from 'vuex'
import Vue from 'vue'
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

  modules: {
    list,
    player,
  },
})

export default store
