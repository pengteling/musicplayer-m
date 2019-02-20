/* eslint import/prefer-default-export:'off' */
export const evil = (fn) => {
  const Fn = Function
  return new Fn(`return ${fn}`)()
}

export const formatCount = num => `${parseInt(num / 1000) / 10}万`

export const formatTime = (num) => {
  const hh = parseInt(num / 3600, 10)
  const mm = parseInt((num - hh * 3600) / 60, 10)
  const ss = parseInt(num - hh * 3600 - mm * 60, 10)
  const hhstr = hh > '0:' ? hh : ''
  const mmstr = mm < 10 ? `0${mm}` : mm
  const ssstr = ss < 10 ? `0${ss}` : ss
  return `${hhstr}${mmstr}:${ssstr}`
}

/**
 * Parse lrc, suppose multiple time tag
 *
 * @param {String} lrc_s - Format:
 * [mm:ss.xx]lyric
 * [mm:ss.xxx]lyric
 * [mm:ss.xx][mm:ss.xx][mm:ss.xx]lyric
 *
 * @return {String} [[time, text], [time, text], [time, text], ...]
 */
export const parseLrc = (lrcs) => {
  const lyric = lrcs.split('\n')
  const lrc = []
  const lyricLen = lyric.length
  for (let i = 0; i < lyricLen; i++) {
    // match lrc time
    const lrcTimes = lyric[i].match(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g)
    // match lrc text
    const lrcText = lyric[i].replace(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g, '').replace(/^\s+|\s+$/g, '')

    if (lrcTimes != null) {
      // handle multiple time tag
      const timeLen = lrcTimes.length
      for (let j = 0; j < timeLen; j++) {
        const oneTime = /\[(\d{2}):(\d{2})\.(\d{2,3})]/.exec(lrcTimes[j])
        const lrcTime = (oneTime[1]) * 60 + parseInt(oneTime[2]) + parseInt(oneTime[3]) / ((`${oneTime[3]}`).length === 2 ? 100 : 1000)
        lrc.push([lrcTime, lrcText])
      }
    }
  }
  // sort by time
  lrc.sort((a, b) => a[0] - b[0])
  return lrc
}
