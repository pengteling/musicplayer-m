<template>
  <div
    id="panelPlay"
    class="panel-play"
    style="visibility: visible; height:100vh"
  >
    <div
      class="bg-overlay js-bg-overlay"
      :style="{backgroundImage:`url(${currentMusicItem.cover})`}"
    ></div>
    <div class="play-overlay"></div>
    <!--start top-fixed-->

    <!--end top-fixed-->

    <div
      id="panelPlayBd"
      class="panel-play-bd"
    >
      <div class="panel-play-img-box">
        <img
          :src="currentMusicItem.cover"
          onerror="this.onerror=null;this.src='http://m.kugou.com/v3/static/images/index/logo_kugou.png';"
          data-default-src="http://m.kugou.com/v3/static/images/index/logo_kugou.png"
          class="js-ftImg"
        >
      </div>
      <div class="panel-play-lrc-box">
        <div
          id="playLrc"
          class="panel-play-lrc"
          :style="{transform:`translate3d(0,${transY}px,0)`}"
        >
          <p
            v-for="(line,index) in lrc"
            :key="index"
            :ref="curli === index ? 'cur':'normal'"
            :class="{current: index === curli}"
          >
            {{ line[1] }}
          </p>
        </div>
      </div>
      <div
        id="timeWrap"
        class="time-wrap"
      >
        <div
          id="timeshow"
          class="timeshow"
        >
          {{ currentTimeStr }}
        </div>
        <div
          id="progressWrap"
          class="progress-wrap"
        >
          <div
            id="progressBar"
            ref="progressBar"
            class="progress-bar"
            @click="changeProgress"
          >
            <div
              id="previewProgress"
              class="preview-progress"
              :style="{width: `${bufferedPercentAbsoulte}%`}"
            ></div>
            <div
              id="progress"
              class="progress"
              ref="progress"
              :style="{width: `${ currentPercent }%`}"
            >
              <span ref="dragBtn"></span>
            </div>
          </div>
        </div>
        <div
          id="time"
          class="time"
        >
          {{ durationStr }}
        </div>
      </div>
      <div class="play-operate">
        <i
          class="btn-prev js-btnPrev"
          @click="PREV_NEXT('prev')"
        ></i>
        <i
          class=" js-btnPlayPause"
          :class="paused?'btn-play':'btn-pause'"
          @click="PLAY_PAUSE"
        ></i>
        <i
          class="btn-next js-btnNext"
          @click="PREV_NEXT('next')"
        ></i>
      </div>
      <div
        class="download-box js-dialog-show"
        data-dialog-id="dialogDownload"
        data-dialog-feeid="dialogFeeDownload"
      >
        <i></i>下载这首歌
      </div>
    </div>
    <p style="visibility: hidden;height:20px">
      兼容iphone5c,ipone6
    </p>
  </div>
</template>
<script>
import {
  mapState, mapGetters, mapActions, mapMutations,
} from 'vuex'
import { parseLrc,formatTime } from '@/utils'

export default {
  data() {
    return {
      transY: 0,
      //currentPercent:0,
      percent:-1
    }
  },
  computed: {
    ...mapState('player', ['currentTime','paused','duration']),
    ...mapGetters('list', ['currentMusicItem']),
    ...mapGetters('player', ['currentPercentAbsoulte', 'bufferedPercentAbsoulte']),
    lrc() {
      return this.currentMusicItem.lrc ? parseLrc(this.currentMusicItem.lrc) : []
    },
    curli() {
      let curli = 0
      this.lrc.forEach((line, i) => {
        if (this.currentTime > line[0]) {
          curli = i
        }
      })
      return curli
    },
    currentTimeStr(){
      return formatTime(this.currentTime)
    }
    ,
    durationStr(){
      return formatTime(this.duration)
    },
    currentPercent(){
      if(this.percent>0){
        return this.percent * 100
      }else{
        return this.currentPercentAbsoulte
      }
    }
  },
  watch: {
    'currentMusicItem.file'() {
      if (!this.currentMusicItem.lrc) {
        this.getLrc()
      }
    },
    curli(val) {
      if (this.$refs.cur) {
        // ???
        this.$nextTick().then(() => {
          console.log(this.$refs.cur)
          const h = this.$refs.cur[0].offsetTop
          this.transY = this.$refs.cur[0].offsetHeight - h
        })
      }
    },
  },
  created() {
    if (Object.keys(this.currentMusicItem).length === 0) {
      this.getList()
    }
    if (this.currentMusicItem.file && !this.currentMusicItem.lrc) {
      this.getLrc()
    }
  },
  mounted(){
    this.dragInit(this.$refs.dragBtn)
  },
  methods: {
    ...mapActions('list', ['getLrc', 'getList']),
    ...mapMutations('player', ['PLAY_PAUSE','CHANGE_PROGRESS']),
    ...mapMutations('list', ['PREV_NEXT']),
    changeProgress(e) {
      const progress = (e.clientX - this.$refs.progressBar.getBoundingClientRect().left) / this.$refs.progressBar.clientWidth
      //this.$store.commit('player/CHANGE_PROGRESS', progress)
      this.CHANGE_PROGRESS(progress)
    },
    dragInit(el){
      // 
      el.ontouchstart = e => {
        e.stopPropagation()
        console.log(e.touches[0].pageX);
      }
      el.ontouchmove = e => {
        let nowX =  e.pageX || e.touches[0].pageX
        let startX = this.$refs.progressBar.getBoundingClientRect().left
        let progressW = this.$refs.progressBar.clientWidth
        let percent = (nowX - startX ) / progressW 
        this.$refs.progress.style.width = `${percent * 100}%`

        this.percent = percent

      }
      el.ontouchend = () => {
        this.CHANGE_PROGRESS(this.percent)

        //? 进度有跳跃
        this.percent = -1
        
      }
    }
  },
}
</script>

<style lang="scss">
.panel-play-bd {
  width: 100%;
  padding-top: 6.0174rem;
  padding-bottom: 2.5rem;
  position: relative;
}

.panel-play-img-box {
  width: 10.7143rem;
  height: 10.7143rem;
  margin: 1.4286rem auto 0;
}

.panel-play-img-box img {
  width: 100%;
}

.panel-play-lrc-box {
  margin-top: .8928rem;
  height: 3.8rem;
  overflow: hidden;
  text-align: center;
  color: #afabac;
}

.panel-play-lrc {
  // height: 3.8rem;
  overflow: hidden;
}

.time-wrap {
  width: 100%;
  padding: .8928rem .7143rem;
  display: box;
  display: -webkit-box;
  -webkit-box-flex: 1;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  -webkit-box-orient: horizontal;
  -webkit-box-sizing: border-box;
  box-flex: 1;
  box-align: center;
  box-pack: justify;
  box-orient: horizontal;
  box-sizing: border-box;
}

.time,
.timeshow {
  font-size: .6428rem;
  color: #dcdcdc;
}

.progress-wrap {
  height: .1785rem;
  margin: 0 .5357rem;
  background: #232228;
  position: relative;
  -webkit-box-flex: 1;
  box-flex: 1;
  z-index: 100;
}

.progress-bar {
  width: 100%;
  height: 100%;
}

.preview-progress {
  background: #6c6b70;
}

.preview-progress,
.progress {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 0;
  height: 100%;
}

.play-operate {
  margin: 0 auto;
  font-size: 0;
  text-align: center;
}

.play-operate .btn-prev {
  background: url(../images/play_prev.png) no-repeat;
  background-size: 100%;
}

.play-operate .btn-play {
  background: url(../images/play_play.png) no-repeat;
  background-size: 100%;
}

.play-operate .btn-next {
  background: url(../images/play_next.png) no-repeat;
  background-size: 100%;
}

.play-operate .btn-download,
.play-operate .btn-next,
.play-operate .btn-prev {
  width: 2.3214rem;
  height: 2.4rem;
  margin: 0 .8929rem;
  display: inline-block;
  vertical-align: middle;
}

.play-operate .btn-loading,
.play-operate .btn-pause,
.play-operate .btn-play {
  width: 3.2143rem;
  height: 3.2143rem;
  margin: 0 .8929rem;
  display: inline-block;
  vertical-align: middle;
}

.bg-overlay {
  width: 100%;
  // height: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: url(../images/logo_kugou.png) no-repeat center center;
  background-size: cover;
  -webkit-filter: blur(15px);
  filter: blur(15px);
}

.goback i {
  width: .85714rem;
  height: 1.42857rem;
  margin-top: .687265rem;
  display: inline-block;
  background: url(../images/goback_1.png) no-repeat;
  background-size: 100%;
}

.panel-play-lrc-box p {
  width: 100%;
  height: 1.7857rem;
  line-height: 1.7857rem;
  vertical-align: top;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: .8571rem
}

.panel-play-lrc-box .current {
  color: #d1c90e
}

.panel-play-lrc-box .nolrc {
  color: #fff
}

.download-box {
  width: 56.25%;
  height: 2.5rem;
  line-height: 2.5rem;
  margin: 1.0714rem auto 0;
  text-align: center;
  color: #fff;
  background: #259ef7;
  font-size: 1rem;
  border-radius: 5px;
}

.download-box i {
  width: 1.6rem;
  height: 1.6rem;
  display: inline-block;
  vertical-align: middle;
  background: url(../images/download_icon.png) no-repeat;
  background-size: 100%;
}

.progress span {
  position: absolute;
  top: 50%;
  right: -.4rem;
  margin-top: -.3572rem;
  width: .7143rem;
  height: .7143rem;
  display: block;
  background: #3195fd;
  border-radius: 100%;
}

.progress {
  background: #3195fd;
}

.play-overlay {
  width: 100%;
  height: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
}
</style>
