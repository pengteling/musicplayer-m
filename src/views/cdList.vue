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
        src="http://imge.kugou.com/soft/collection/400/20190320/20190320185022785761.jpg"
        onerror="this.onerror=null;this.src='http://m.kugou.com/static/images/index2013/default.png';"
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
      <p>
        在古代，弹琴（多指古琴）、弈棋（多指围棋）、书法、绘画是文人骚客（包括一些名门闺秀）修身所必须掌握的技能，故合称琴棋书画。今常以表示个人的文化素养。
        琴棋书画，歌以咏志，奕以得心，文以载道，画以传情。文传千载，文化可传千载。这是衣冠上国的千年底蕴，亦是炎黄子孙烙印在血脉之上，不变的骄傲。
        （PS：大师兄报道！）
        【古风专区】
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
        onclick="playerModule.playSong(this);"
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
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      isopen: false,
      pic: '',
      desc: '',

    }
  },
  computed: {
    ...mapState('list', ['showList']),
  },
  created() {
    // axios.get()
    const dissid = this.$route.params.id
    this.getCdlist(dissid)
  },

  methods: {
    ...mapActions('list', ['getCdlist']),
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
