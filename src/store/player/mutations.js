import * as types from './mutation-types'
/* eslint  no-param-reassign:'off' */
export default {
  [types.GET_DURATION](state, duration) {
    state.duration = duration
  },
  [types.GET_CURRENT_TIME](state, currentTime) {
    state.currentTime = currentTime
  },
  [types.PLAY_PAUSE](state) {
    state.paused = !state.paused
  },
  [types.CHANGE_PROGRESS](state, progress) {
    state.changeTime = progress * state.duration
  },
  [types.CHANGE_VOLUME](state, volume) {
    state.volume = volume
  },
  [types.GET_BEFFERED](state, buffered) {
    state.buffered = buffered
  },

}
