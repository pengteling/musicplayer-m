export default {
  currentMusicItem(state) {
    return state.musicList[state.currentIndex] ? state.musicList[state.currentIndex] : {}
  },
}
