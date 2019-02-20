import * as types from './mutation-types'

export default {
  [types.CHANGE_REPEAT_TYPE](state) {
    const oldRepeatType = state.repeatType
    let newRepeatType = 'cycle'
    if (oldRepeatType === 'cycle') {
      newRepeatType = 'once'
    } else if (oldRepeatType === 'once') {
      newRepeatType = 'random'
    }
    state.repeatType = newRepeatType
  },
  [types.PREV_NEXT](state, type, rootState) {
    const curRepeatType = state.repeatType
    const oldCurrentIndex = state.currentIndex
    let newCurrentIndex
    // 需要第三个参数rootState 去拿其他模块中的数据
    const num = state.musicList.length

    if (curRepeatType === 'cycle' || curRepeatType === 'once') {
      if (type === 'next') {
        newCurrentIndex = (oldCurrentIndex + 1) % num
      } else {
        newCurrentIndex = (oldCurrentIndex - 1 + num) % num
      }
    } else {
      /* 随机 */
      /* eslint 'no-lonely-if':off */
      if (num > 1) {
        const rd = (currentIndex) => {
          const newIndex = Math.floor(num * Math.random())
          if (newIndex === currentIndex) {
            return rd(currentIndex)
          }
          return newIndex
        }
        newCurrentIndex = rd(oldCurrentIndex)
      }
      // newCurrentIndex = Math.floor(num * Math.random())
      // console.log(newCurrentIndex)
    }
    state.currentIndex = newCurrentIndex
  },
  [types.CHANGE_MUSIC](state, musicItem) {
    state.currentIndex = state.musicList.findIndex(item => item === musicItem)
  },
  [types.DELETE_MUSIC](state, musicItem) {
    // if (state.musicList.length > 1) {
    console.log('deleteMusic')
    state.musicList = state.musicList.filter(item => item !== musicItem)
    /* 删除最后一首 */
    if (state.currentIndex >= state.musicList.length) {
      state.currentIndex = 0
    }
  },
  [types.GET_MUSIC_LIST](state, musicList) {
    state.musicList = musicList
  },
  [types.SET_LRC](state, payload) {
    // console.log();
    // state.musicList[state.musicList.findIndex(item => item === payload.item)].lrc = payload.lrc
    state.musicList[state.currentIndex].lrc = payload.lrc
  },
  // },
}
