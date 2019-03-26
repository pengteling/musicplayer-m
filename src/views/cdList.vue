<template>
  <div
    id="bd"
    class="bd bd-top js-bd-box"
  >
    <div
      id="imgBoxInfo"
      class="img-box"
    >
      <img
        :src="pic"
        alt=""
        style="margin-top: -75px;"
      >
    </div>
    <div
      id="introBox"
      class="intro-box"
      :class="{'auto':isopen}"
      @click="isopen = !isopen"
    >
      <p v-html="desc">
      </p>
      <div
        id="introShow"
        class="intro-icon-box close-icon"
      >
        <i class="intro-icon"></i>
      </div>
    </div>

    <!-- start panel-songslist -->
    <ul
      id="panelSongsList"
      class="panel-songslist"
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
      </li>
    </ul>

    <!-- end panel-songslist -->
    <ftPlayer></ftPlayer>
  </div>
</template>
<script>
// eslint-disable-next-line vue/no-v-html
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
import ftPlayer from './ftPlayer'

export default {
  components: {
    ftPlayer,
  },
  data() {
    return {
      isopen: false,
      pic: '',
      desc: '',

    }
  },
  computed: {
    ...mapState('list', ['showList']),
    ...mapState('player', ['paused']),
  },
  created() {
    // axios.get()
    const dissid = this.$route.params.id
    this.getCdlist(dissid).then((res) => {
      console.log(res)
      this.pic = res.logo
      this.desc = res.desc
      // this.$store.commit('setGoBackTit', res.dissname)
    })
  },

  methods: {
    ...mapActions('list', ['getCdlist']),
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
.img-box {
    width: 100%;
    height: 12.5rem;
    position: relative;
    overflow: hidden;
}
.img-box img {
    width: 100%;
}

.intro-box.auto {
    height: auto;
}

.intro-box {
    width: 100%;
    height: 2.25rem;
    line-height: 1.8;
    padding: .5357rem 2.67857rem .5357rem .8929rem;
    box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
    position: relative;
    overflow: hidden;
    font-size: 1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.intro-icon-box {
    width: 2.1429rem;
    height: 2rem;
    line-height: 2.1429rem;
    position: absolute;
    top: .25rem;
    right: .1786rem;
    text-align: center;
    cursor: pointer;
}
.open-icon .intro-icon {
    background: url(../images/open_icon.png) no-repeat;
    background-size: 100%;
}
.close-icon .intro-icon {
    background: url(../images/close_icon.png) no-repeat;
    background-size: 100%;
}
.intro-icon {
    width: 1.25rem;
    height: 1.25rem;
    display: inline-block;
    vertical-align: text-bottom;
}
</style>
