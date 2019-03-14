<template>
  <div
    id="bd"
    class="bd js-bd-box"
    :class="{'bd-bottom': isShowFtPlayer }"
  >
    <!-- start 焦点图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="slider in sliders"
          :key="slider.id"
          class="swiper-slide"
        >
          <a :data-href="slider.linkUrl">
            <img
              :src="slider.picUrl"
              alt=""
            >
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- end 焦点图 -->

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
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
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
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import ftPlayer from './ftPlayer'

export default {
  // data() {
  //   // return {
  //   //   sliders: [],
  //   // }
  // },
  name: 'NewSong',
  components: {
    ftPlayer,
  },
  computed: {
    ...mapState(['sliders', 'isShowFtPlayer']),
    ...mapState('list', ['showList']),
    ...mapState('player', ['paused']),
  },
  created() {
    this.getList()
  },
  mounted() {
    this.getSliders().then(() => {
      this.$nextTick(() => {
        const mySwiper = new Swiper('.swiper-container', {
          autoplay: true,

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

        })
      })
    })
    // if (this.sliders.length <= 0) {
    //   this.$nextTick().then(() => {
    //     const mySwiper = new Swiper('.swiper-container', {
    //       autoplay: true,

    //       // 如果需要分页器
    //       pagination: {
    //         el: '.swiper-pagination',
    //       },

    //     })
    //   })
    // }


    // console.log(this.$store)
  },
  methods: {
    ...mapActions(['getSliders']),
    ...mapActions('list', ['getList']),
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
.swiper-slide {
  text-align: center;
}
.swiper-slide img{
  max-width: 100%;
}

.swiper-pagination-bullet {

    background: #fff;
    opacity: 0.6;
    opacity: 0.2;
    box-shadow: 0 1px 1px #f4f4f4;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
</style>
