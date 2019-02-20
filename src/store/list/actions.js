import axios from 'axios'

export default {
  toggleNext({ state, commit }) {
    if (state.repeatType !== 'once') {
      // this.prevNext('next')
      commit('PREV_NEXT', 'next')
    } else {
      // this.player.changeTime = 0
      commit('player/CHANGE_PROGRESS', 0, { root: 'true' })
    }
  },
  getList({ commit }) {
    axios.get('/api/list').then((res) => {
      console.log(res)
      const songList = res.data.songlist
      const musicList = songList.map((item) => {
        const songData = item.data
        return {
          title: songData.songname,
          artist: songData.singer.reduce((allsinger, singer) => (allsinger ? `${allsinger}、${singer.name}` : singer.name), ''),
          file: songData.songmid,
          cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${songData.albummid}.jpg?max_age=2592000`,
          lrc: '',
        }
      })
      console.log(musicList)
      commit('GET_MUSIC_LIST', musicList)
    })
  },
  getUrl({ commit }, songmid) {
    return axios.post('/api/getVkey', {
      req_0: {
        module: 'vkey.GetVkeyServer',
        method: 'CgiGetVkey',
        param: {
          guid: '900811868', songmid: [songmid], songtype: [], uin: '0', loginflag: 0, platform: '23', h5to: 'speed',
        },
      },
      comm: {
        g_tk: 5381, uin: 0, format: 'json', ct: 23, cv: 0,
      },
    }).then((res) => {
      console.log(res.data.req_0.data.midurlinfo[0].purl)
      const purl2 = res.data.req_0.data.midurlinfo[0].purl
      if (purl2) {
        const url = `http://117.34.59.29/amobile.music.tc.qq.com/${purl2}`
        // this.audio.src = url
        return Promise.resolve(url)
      }
      // 无法获取Vkey 版权或是ajax出错 给出提示
      // this.audio.src = ''
      return Promise.resolve('')
    })
  },
  getLrc({ state, commit }) {
    axios.get('/api/getLrc', {
      params: {
        '-': 'MusicJsonCallback_lrc',
        pcachetime: 1548072890239,
        songmid: state.musicList[state.currentIndex].file,
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        nobase64: 1,
      },
    }).then((res) => {
      console.log(res.data.lyric)
      const lrc = res.data.lyric
      commit('SET_LRC', {
        lrc,
        item: this.musicItem,
      })
    })
  },
}
