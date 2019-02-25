<template>
  <audio
    ref="audio"
    :src="url"
    @loadedmetadata="getDuration"
    @timeupdate="getCurrentTime"
    @ended="toggleNext"
    @progress="getBuffered"
  ></audio>
</template>
<script>
// import EventBus from '../EventBus'
import {
  mapState, mapGetters, mapMutations, mapActions,
} from 'vuex'
import axios from 'axios'

export default {
  // props: ['url', 'player'],
  data() {
    return {
      url: '',
    }
  },
  computed: {
    ...mapGetters('list', ['currentMusicItem']),
    audio() {
      return this.$refs.audio
    },
    ...mapState('player', ['paused', 'changeTime', 'volume']),
    // player() {
    //   return this.$store.state.player
    // },
    // ...mapState('player',['paused','volume',''])
  },
  /* eslint object-shorthand:'off' */
  watch: {
    paused(newVal, oldVal) {
      // console.log('watch paused');
      this.$nextTick(() => {
        if (!newVal) {
          this.audio.play()
        } else {
          this.audio.pause()
        }
      })
    },
    // 'player.currentTime'(newVal, oldVal) {
    //   console.log(newVal)
    //   /* 修复音乐卡顿的bug */
    //   if (Math.abs(newVal - oldVal) >= 1) {
    //     this.audio.currentTime = newVal
    //   }
    //   // this.audio.currentTime = newVal
    // },
    changeTime(val) {
      this.audio.currentTime = val
    },
    volume: {
      handler(newVal) {
        this.$nextTick(() => {
          this.audio.volume = newVal
          console.log(this.audio.volume)
        })
      },
      immediate: true,
    },
    async 'currentMusicItem.file'(newVal) {
      const url = await this.getUrl(newVal)
      console.log('get url', url)
      if (url === '') {
        this.$emit('getError')
      }
      this.url = url
    },
  },
  mounted() {
    console.log('mounted')
    this.audio.oncanplay = () => {
      if (!this.paused) {
        this.audio.play()
      }
    }
    console.log(this.audio.volume)
    /* 调试  */
    this.$store.subscribeAction((action, state) => {
      console.log(action)
    })
  },
  created() {
    // 如果初次加载则要请求数据
    // this.getList()
  },
  methods: {
    ...mapMutations('player', ['GET_DURATION', 'GET_CURRENT_TIME', 'GET_BEFFERED']),
    getDuration() {
      // console.log(this.audio.duration)
      // // this.player.duration = this.audio.duration
      // this.$store.commit('player/GET_DURATION', this.audio.duration)
      this.GET_DURATION(this.audio.duration)
    },
    getCurrentTime() {
      // this.player.currentTime = this.audio.currentTime
      this.GET_CURRENT_TIME(this.audio.currentTime)
      // EventBus.$emit('timeupdate', this.audio.currentTime)
    },
    getBuffered() {
      const timeRanges = this.audio.buffered
      const buffered = timeRanges.end(timeRanges.length - 1)
      this.GET_BEFFERED(buffered)
    },
    ...mapActions('list', ['toggleNext', 'getList', 'getUrl']),
    // toggleNext() {
    //   //console.log('toggleNext')
    //   // this.$emit('toggleNext')
    // },
    // getVkey() {
    //   axios.post('/api/getVkey', {
    //     req_0: {
    //       module: 'vkey.GetVkeyServer',
    //       method: 'CgiGetVkey',
    //       param: {
    //         guid: '900811868', songmid: [this.currentMusicItem.file], songtype: [], uin: '0', loginflag: 0, platform: '23', h5to: 'speed',
    //       },
    //     },
    //     comm: {
    //       g_tk: 5381, uin: 0, format: 'json', ct: 23, cv: 0,
    //     },
    //   }).then((res) => {
    //     console.log(res.data.req_0.data.midurlinfo[0].purl)
    //     const purl2 = res.data.req_0.data.midurlinfo[0].purl
    //     if (purl2) {
    //       const url = `http://117.34.59.29/amobile.music.tc.qq.com/${purl2}`
    //       this.audio.src = url
    //     } else {
    //       // 无法获取Vkey 版权或是ajax出错 给出提示
    //       this.audio.src = ''
    //     }
    //   })
    // },
  },
  // {"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"960257530","songmid":["000Qepff3UyUWO"]},"songtype":[0],"uin":"0","loginflag":1,"platform":"20"},"comm":{"uin":"0","format":"json","ct":24,"cv":0}}
  //     data: {
  //       req: { module: 'CDN.SrfCdnDispatchServer', method: 'GetCdnDispatch', param: { guid: '960257530', calltype: 0, userip: '' } },
  //       req_0: {
  //         module: 'vkey.GetVkeyServer',
  //         method: 'CgiGetVkey',
  //         param: {
  //           guid: '960257530', songmid: [this.currentMusicItem.file], songtype: [0], uin: '33460202', loginflag: 1, platform: '20',
  //         },
  //       },
  //       comm: {
  //         uin: 33460202, format: 'json', ct: 24, cv: 0,
  //       },
  //     },
  //   },
  // }).then((res) => {
  //   console.log(res);
  //   console.log(res.data.req.data.vkey);
  //   return res.data.req.data.vkey
  // })
  // },
  // getVkey2() {
  //   axios.get('/api/vkey', {
  //     params: {
  //       g_tk: 5381,
  //       // jsonpCallback:'MusicJsonCallback41947488562419744',
  //       loginUin: 0,
  //       hostUin: 0,
  //       format: 'json',
  //       inCharset: 'utf-8',
  //       outCharset: 'utf-8',
  //       notice: 0,
  //       platform: 'yqq',
  //       needNewCode: 0,
  //       cid: 205361747,
  //       // callback:'MusicJsonCallback41947488562419744',
  //       uin: 0,
  //       songmid: this.currentMusicItem.file,
  //       filename: `C400${this.currentMusicItem.file}.m4a`,
  //       guid: 1044092206,
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //     const songinfo = response.data.data.items[0]
  //     const songurl = `http://dl.stream.qqmusic.qq.com/${songinfo.filename}?vkey=${songinfo.vkey}&guid=1044092206&uin=0&fromtag=66`
  //     this.$refs.audio.src = songurl
  //     // this.playPause()
  //     // this.$refs.audio.oncanplay = ()=>{
  //     //   console.log("canplay");
  //     //   this.playPause()
  //     // }
  //     // if(!this.paused){
  //     //   this.$refs.audio.oncanplay = ()=>{
  //     //     //this.$refs.audio.play()
  //     //   }
  //     // }
  //   })
  // },
}
</script>
