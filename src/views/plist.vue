<template>
  <div class="bd page-plist-index">
    <!-- start 歌单列表 -->
    <PullTo @infinite-scroll="loadmore">
      <ul
        id="panelList"
        class="panel-img-list"
      >
        <li
          v-for="item in plist"
          :key="item.dissid"
        >
          <router-link :to="`/cdlist/${item.dissid}`">
            <div class="panel-img-left">
              <img

                v-lazy="item.imgurl"
                src="../images/default.png"

                alt=""
              >
            </div>
            <div class="panel-img-content">
              <p class="panel-img-content-first">
                {{ item.dissname }}
              </p>
              <p class="panel-img-content-sub">
                <i class="icon-music"></i>{{ item.listennum }}
              </p>
            </div>
            <div class="panel-img-right">
              <i class="panel-img-arrow"></i>
            </div>
          </router-link>
        </li>
      </ul>


      <!-- end 歌单列表 -->
      <div
        v-show="!isend"
        id="ploading"
        class="ploading"
        style="display: block;"
      >
        加载中...
      </div>
    </PullTo>
  </div>
</template>

<script>
import axios from 'axios'
import PullTo from 'vue-pull-to'

export default {
  components: {
    PullTo,
  },
  data() {
    return {
      plist: [],
      sin: 0,
      isloading: false,
      isend: false,
    }
  },
  created() {
    axios.get('/api/getDiss', {
      params: {
        picmid: 1,
        rnd: Math.random(),
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        categoryId: 10000000,
        sortId: 5,
        sin: 0,
        ein: 29,
      },
    }).then((res) => {
      console.log(res)
      this.plist = res.data.data.list
      this.sin = this.sin + 30
    })
  },
  methods: {
    loadmore() {
      console.log('loadmore')
      /* 防止重复请求 */
      if (!this.isloading && !this.isend) {
        this.isloading = true
        axios.get('/api/getDiss', {
          params: {
            picmid: 1,
            rnd: Math.random(),
            g_tk: 5381,
            loginUin: 0,
            hostUin: 0,
            format: 'json',
            inCharset: 'utf8',
            outCharset: 'utf-8',
            notice: 0,
            platform: 'yqq.json',
            needNewCode: 0,
            categoryId: 10000000,
            sortId: 5,
            sin: this.sin,
            ein: this.sin + 29,
          },
        }).then((res) => {
          console.log(res)
          if (res.data.data.list.length < 30) {
            this.isend = true
          }
          this.plist = this.plist.concat(res.data.data.list)
          this.sin = this.sin + 30
          this.isloading = false
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.bd {
  padding-top: 0;
  height: 100vh;
}

#panelList {
  padding-top: 6.4286rem;
}

.panel-img-list li a {
  display: block;
  position: relative;
  margin-left: .7143rem;
  padding: .7143rem 2.14286rem .7143rem 6.4286rem;
  border-bottom: 1px solid #e5e5e5;
}

.panel-img-left {
  position: absolute;
  top: .7143rem;
  left: 0;
  width: 5.3751rem;
  height: 5.3751rem;
}

.panel-img-left img {
  width: 100%;
}

.page-plist-index .panel-img-content {
  line-height: 1.5;
  font-size: 1rem;
}

.panel-img-content {
  min-height: 5.3751rem;
  line-height: 5.3751rem;
  display: block;
  font-size: 1.0714rem;
  color: #333;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
}

.page-plist-index .panel-img-content-first {
  // padding-top: 1.4286rem;
}

.panel-img-content-sub {
  color: #9b9b9b;
  font-size: .7857rem;
}

.icon-music {
  width: .7143rem;
  height: .7143rem;
  margin-top: .10714rem;
  margin-right: .2857rem;
  display: inline-block;
  background: url(../images/icon_music.png) no-repeat;
  background-size: 100%;
}

.panel-img-arrow {
  width: .57143rem;
  height: 1rem;
  margin-top: -.5rem;
  position: absolute;
  top: 50%;
  right: .7143rem;
  display: block;
  background: url(../images/arrow_icon.png) no-repeat;
  background-size: 100%;
}

.ploading {
  text-align: center;
  line-height: 2.5;

}
</style>
