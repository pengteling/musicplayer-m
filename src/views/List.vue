<template>
  <div
    id="bd"
    class="bd bd-top js-bd-box"
    :class="{'bd-bottom': isShowFtPlayer }"
  >
    <div
      id="imgBoxInfo"
      class="rank-info-hd"
    >
      <img
        :src="topListInfo.pic_h5"
        onerror="this.onerror=null;this.src='http://m.kugou.com/static/images/index2013/default.png';"
      >
      <div class="rank-info-time">
        <span>上次更新时间：{{ updateTime }}</span>
      </div>
    </div>

    <!-- start panel-songslist -->
    <ul
      id="panelSongsList"
      class="panel-songslist panel-songslist-rank"
    >
      <li
        v-for="(item,index) in showList"
        :key="index"
        class="panel-songslist-item"
        @click="playSong(item)"
      >
        <div class="panel-songs-item-name btn_play">
          <span>{{ item.artist }} - {{ item.title }}</span>
        </div>
        <div
          class="panel-songs-item-download"
        >
          <i></i>
        </div>
        <span
          class="panel-songs-item-num"
          :class="{one: index ===0, two:index===1,three:index===2 }"
        >
          {{ index + 1 }}
        </span>
      </li>


      <!-- end panel-songslist -->
    </ul>
    <ftPlayer></ftPlayer>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import ftPlayer from './ftPlayer'

export default {
  components: {
    ftPlayer,
  },
  data() {
    return {
      updateTime: '',
      topListInfo: {},
    }
  },
  computed: {
    ...mapState(['isShowFtPlayer']),
    ...mapState('list', ['showList']),
    ...mapState('player', ['paused']),
  },
  created() {
    const topId = this.$route.params.id
    this.getTopList(topId).then((res) => {
      this.updateTime = res.updateTime
      this.topListInfo = res.topListInfo
      // this.$store.commit('setGoBackTit', this.topListInfo.ListName)
      this.$store.commit('setGoBackTit', '')
    })
  },
  methods: {
    ...mapActions('list', ['getTopList']),
    playSong(item) {
      this.$store.commit('list/GET_MUSIC_LIST')
      this.$store.commit('list/CHANGE_MUSIC', item)
      this.$store.commit('showFtPlayer', true)
      if (this.paused) {
        this.$store.commit('player/PLAY_PAUSE')
      }
    },
  },
}
</script>

<style lang="scss">
.panel-songslist-rank .panel-songs-item-name {
    padding-left: 2.0674rem;
}

.panel-songs-item-num {
    padding: 0 .5rem;
    height: 1.0714rem;
    line-height: 1.0714rem;
    border-radius: .5rem;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -.5357rem;
    text-align: center;
    font-size: .7143rem;
    color: #999;
    display: inline-block;
}
.panel-songs-item-num.one {
    background: #e80000;
    color: #fff;
}
.panel-songs-item-num.three {
    background: #f8b300;
    color: #fff;
}
.panel-songs-item-num.two {
    background: #ff7200;
    color: #fff;
}
</style>
