<template>
  <div
    v-show="isShowFtPlayer"
    id="ftPlayer"
    class="ft-player"
  >
    <router-link
      id="goPlay"
      :to="{name:'player'}"
      href="javascript:;"
      class="ft-go-info"
    >
      <div class="ft-left">
        <img
          id="ftImg"
          :src="currentMusicItem.cover"
          onerror="this.onerror=null;this.src='http://m.kugou.com/v3/static/images/index/logo_kugou.png';"
          data-default-src="http://m.kugou.com/v3/static/images/index/logo_kugou.png"
          alt=""
          class="js-ftImg"
        >
      </div>
      <div class="ft-center">
        <p
          id="ftSongName"
          class="ft-desc js-ftSongName"
        >
          {{ currentMusicItem.title }}
        </p>
        <p
          id="ftUserName"
          class="ft-sub-desc js-ftUserName"
        >
          {{ currentMusicItem.artist }}
        </p>
      </div>
    </router-link>
    <div class="ft-right">
      <i
        class=" js-btnPlayPause"
        :class="paused? 'btn-play':'btn-pause'"
        @click="PLAY_PAUSE"
      ></i>
      <i
        class="btn-next js-btnNext"
        @click="PREV_NEXT('next')"
      ></i>
      <!-- 此时只会出现两种情况，一个是免费，一个是试听免费，下载收费 -->
      <i
        class="ft-icon-download js-dialog-show"
        data-dialog-id="dialogDownload"
        data-dialog-feeid="dialogFeeDownload"
      ></i>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['isShowFtPlayer']),
    ...mapGetters('list', ['currentMusicItem']),
    ...mapState('player', ['paused']),
  },
  methods: {
    ...mapMutations('player', ['PLAY_PAUSE']),
    ...mapMutations('list', ['PREV_NEXT']),
  },
}
</script>
<style lang="scss">
.ft-player {
    width: 100%;
    height: 4.2143rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,.9);
    color: #fff;
    font-size: 0;
    // display: none;
}
.ft-go-info {
    width: 65%;
    display: block;
}
.ft-left {
    width: 3.75rem;
    height: 3.75rem;
    margin: .2143rem .535rem .2143rem .2143rem;
}
.ft-left img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
.ft-center, .ft-left {
    display: inline-block;
    vertical-align: middle;
}
.ft-center {
    width: 65%;
}
.ft-right {
    position: absolute;
    top: 1.0714rem;
    right: .7143rem;
}
.ft-desc {
    width: 100%;
    line-height: 1.7;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .8571rem;
    color: #fff;
}
.ft-sub-desc {
    line-height: 1.3;
    font-size: .7143rem;
    color: #888;
}
.btn-pause {
    background: url(../images/pause_icon.png) no-repeat;
    background-size: 100%;
}
.btn-play {
    background: url(../images/play_icon.png) no-repeat;
    background-size: 100%;
}
.btn-loading, .btn-next, .btn-pause, .btn-play, .ft-icon-download {
    width: 1.786rem;
    height: 1.786rem;
    margin-left: 1rem;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
}
.btn-next {
    background: url(../images/next_icon.png) no-repeat;
    background-size: 100%;
}
.ft-icon-download {
    background: url(../images/download_icon.png) no-repeat;
    background-size: 100%;
}
</style>
