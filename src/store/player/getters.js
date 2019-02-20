import { formatTime } from '../../utils'

export default {

  leftTime(state) {
    return formatTime(state.duration - state.currentTime)
    // return state.duration - state.currentTime
  },
  currentPercentAbsoulte(state) {
    return state.currentTime / state.duration * 100
  },
  bufferedPercentAbsoulte(state) {
    const val = state.buffered / state.duration * 100
    return val > 100 ? 100 : val
  },
}
