<template>
  <div
    id="bd"
    class="bd js-bd-box"
  >
    <div
      class="search_box"
      style
    >
      <div class="mod_search_bar">
        <div class="search_bar_cont">
          <input
            v-model="sokey"
            class="search_input"
            type="search"
            autocomplete="off"
            autocorrect="off"
            placeholder="搜索歌曲、歌单、专辑"
            style="-webkit-appearance: textfield;"
            @click="isSearch=true"
            @keyup.enter="handlerSearch(sokey)"
          >
          <span class="icon icon_search">
            搜索
          </span>
        </div>
        <div
          v-show="isSearch"
          class="search_bar_tip_text"
          @click="handlerCancel"
        >
          取消
        </div>
      </div>
      <div
        v-show="isSearch && isShowHistory"
        class="mod_search_record"
      >
        <ul>
          <li
            v-for="(item,index) in historyKeys"
            :key="index"
          >
            <a
              href="javascript:;"
              class="record_main"
            >
              <span class="icon iocn_clock"></span>
              <span
                class="record_con"
                @click="handlerSearch(item)"
              >
                {{ item }}
              </span>
              <span
                class="icon icon_close"
                @click="deleteKeys(item)"
              ></span>
            </a>
          </li>
        </ul>

        <p
          class="record_handle"
          style
        >
          <a
            v-show="historyKeys.length>0"
            @click="clearAll"
          >
            清除搜索记录
          </a>
        </p>
      </div>
      <div
        v-show="!isSearch"
        id="js_hot_keys"
        class="mod_search_result"
      >
        <h3
          class="result_tit"
          style
        >
          热门搜索
        </h3>
        <div class="result_tags">
          <a
            v-for="(item,index) in hotKeys"
            :key="index"
            class="tag_s"
            :class="{tag_hot:index===0}"
            @click="handlerSearch(item)"
          >
            {{ item }}
          </a>
        </div>
      </div>
      <div
        v-show="isSearch && !isShowHistory"
        class="mod_search_content"
      >
        <PullTo @infinite-scroll="loadmore">
          <ul class="search_content">
            <li
              v-for="(item,index) in showList"
              :key="index"
            >
              <i class="icon"></i><h6 class="main_tit">
                {{ item.title }}
              </h6><p class="sub_tit">
                {{ item.artist }}
              </p>
            </li>
          </ul>
          <div
            v-show="showList.length>0 || isloading"
            class="ploading"
          >
            {{ loadEnd ? "已加载全部":"加载中..." }}
          </div>

          <div
            v-show="isNoResult && !isloading"
            class="mod_null search"
          >
            <h6>无匹配</h6><p>很抱歉，没有找到与“{{ sokey }}”相关的结果。</p>
          </div>
        </PullTo>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import PullTo from 'vue-pull-to'
import { mapMutations, mapState } from 'vuex'


export default {
  components: {
    PullTo,
  },
  data() {
    return {
      hotKeys: [
        '歌手',
        'Gai见面吧电台',
        '红尘来去一场梦',
        '不能说的秘密',
        '爱情有时很残忍',
        'IZONE',
      ],
      isSearch: false,
      isShowHistory: true,
      sokey: '',
      historyKeys: [],
      loadEnd: false,
      curPage: 1,
      isloading: false,
      totalPage: 1,
      isNoResult: false,
    };
  },
  computed: {
    ...mapState('list', ['showList']),
  },
  watch: {
    sokey(val) {
      if (val === '') {
        this.isShowHistory = true
      }
      /* 改变关键词 清除搜索结果 */
      this.GET_SHOW_LIST([])
      this.isNoResult = false
    },
  },
  created() {
    if (localStorage.getItem('historyKeys')) {
      this.historyKeys = localStorage.getItem('historyKeys').split(',');
    }
  },
  methods: {
    ...mapMutations('list', ['GET_SHOW_LIST']),
    handlerCancel() {
      this.isSearch = false;
      this.sokey = '';
    },
    handlerSearch(sokey) {
      this.loadEnd = false
      if (!this.isSearch) {
        this.isSearch = true
      }
      this.GET_SHOW_LIST([])
      // const sokey = e.target.value
      this.sokey = sokey // 点击历史记录搜索时要改变输入框的值
      this.isShowHistory = false
      if (!this.historyKeys.includes(sokey)) {
        this.historyKeys.unshift(sokey);
      } else {
        this.historyKeys.splice(
          this.historyKeys.findIndex(item => item === sokey),
          1,
        );
        this.historyKeys.unshift(sokey);
      }
      window.localStorage.setItem('historyKeys', this.historyKeys.join());
      this.search(sokey)
    },
    deleteKeys(sokey) {
      const newList = this.historyKeys.filter(item => item !== sokey)
      this.historyKeys = newList
      window.localStorage.setItem('historyKeys', this.historyKeys.join());
    },
    clearAll() {
      this.historyKeys = []
      window.localStorage.setItem('historyKeys', '')
    },

    search(sokey) {
      this.isloading = true
      axios.get('/api/getSearch', {
        params: {
          _: 1553777380917,
          g_tk: 5381,
          uin: 0,
          format: 'json',
          inCharset: 'utf-8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'h5',
          needNewCode: 1,
          w: sokey,
          zhidaqu: 1,
          catZhida: 1,
          t: 0,
          flag: 1,
          ie: 'utf-8',
          sem: 1,
          aggr: 0,
          perpage: 20,
          n: 20,
          p: 1,
          remoteplace: 'txt.mqq.all',
        },
      }).then((res) => {
        this.isloading = false
        console.log(res)
        let resultList = res.data.data.song.list
        this.totalPage = Math.ceil(res.data.data.song.totalnum / 20)
        resultList = resultList.map(item => ({
          title: item.songname,
          artist: item.singer.reduce((allsinger, singer) => (allsinger ? `${allsinger}、${singer.name}` : singer.name), ''),
          file: item.songmid,
          lrc: '',
          cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg?max_age=2592000`,
        }))

        this.GET_SHOW_LIST(resultList)
        if (this.totalPage <= 1) {
          this.loadEnd = true
        }
        if (resultList.length === 0) {
          this.isNoResult = true
        }
      })
    },
    loadmore() {
      console.log('loadmore')
      // isloading防止同时重复请求
      if (!this.loadEnd && !this.isloading) {
        this.curPage += 1
        this.isloading = true
        axios.get('/api/getSearch', {
          params: {
            _: 1553777380917,
            g_tk: 5381,
            uin: 0,
            format: 'json',
            inCharset: 'utf-8',
            outCharset: 'utf-8',
            notice: 0,
            platform: 'h5',
            needNewCode: 1,
            w: this.sokey,
            zhidaqu: 1,
            catZhida: 1,
            t: 0,
            flag: 1,
            ie: 'utf-8',
            sem: 1,
            aggr: 0,
            perpage: 20,
            n: 20,
            p: this.curPage,
            remoteplace: 'txt.mqq.all',
          },
        }).then((res) => {
          console.log(res)
          this.isloading = false
          let resultList = res.data.data.song.list
          resultList = resultList.map(item => ({
            title: item.songname,
            artist: item.singer.reduce((allsinger, singer) => (allsinger ? `${allsinger}、${singer.name}` : singer.name), ''),
            file: item.songmid,
            lrc: '',
            cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg?max_age=2592000`,
          }))
          if (this.curPage >= this.totalPage) {
            this.loadEnd = true
          }
          this.GET_SHOW_LIST(this.showList.concat(resultList))
        })
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mod_search_bar {
  background: #f4f4f4;
  padding: 10px;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: center;
}
.mod_search_bar .search_bar_cont {
  position: relative;
  border-radius: 3px;
  background: #fff;
  height: 28px;
  padding: 4px 12px 4px 35px;
  -webkit-box-flex: 1;
}
.mod_search_bar .search_input {
  height: 28px;
  line-height: 28px;
  width: 100%;
  color: rgba(0, 0, 0, 0.3);
  border: none;
  -webkit-appearance: none;
  font-size: 14px;
}
.mod_search_bar .icon_search {
  position: absolute;
  top: 9px;
  left: 10px;
  width: 18px;
  height: 18px;
  background-image: url(../images/icon_search.png);
  background-repeat: no-repeat;
  background-size: cover;
  text-indent: -999px;
}

.mod_search_bar .icon_delete {
  position: absolute;
  top: 9px;
  right: 12px;
  width: 18px;
  height: 18px;
  background: #b1b1b1;
  text-indent: -9999px;
  border-radius: 99px;
}

.mod_search_bar .search_bar_tip_text {
  padding-right: 10px;
  padding-left: 10px;
  font-size: 14px;
  height: 36px;
  line-height: 36px;
}
.mod_search_record {
  background: #fff;
}
.mod_search_record li {
  border-top: 1px solid #ededed;
  padding: 0 15px;
}
.mod_search_record li {
  border-top: 1px solid #ededed;
  padding: 0 15px;
}

.record_main {
  position: relative;
  display: block;
  height: 44px;
  line-height: 44px;
}
.iocn_clock {
  position: absolute;
  left: 0;
  top: 12px;
  width: 20px;
  height: 20px;
  background-image: url(../images/clock_ic.png);
  background-repeat: no-repeat;
  background-size: cover;
  text-indent: -999px;
}
.record_con {
  position: absolute;
  left: 40px;
  right: 50px;
  display: block;
  height: 44px;
  line-height: 44px;
  color: #000;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.icon_close {
  position: absolute;
  right: 0;
  top: 12px;
  width: 20px;
  height: 20px;
}

.icon_close:after,
.icon_close:before {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  background: rgba(0, 0, 0, 0.6);
  -webkit-transform: rotate(45deg);
}
.icon_close:before {
  width: 17px;
  height: 1px;
  top: 8px;
}
.icon_close:after {
  width: 1px;
  height: 17px;
  left: 8px;
}
.record_handle {
  text-align: center;
  height: 44px;
  line-height: 44px;
}
.record_handle a {
  display: inline-block;
  line-height: 44px;
  color: #33a3f5;
}
.mod_search_result {
  background: #fff;
  padding: 15px 15px 10px 15px;
}
.mod_search_result .result_tit {
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 8px;
}
.mod_search_result .result_tags {
  font-size: 0;
}

.mod_search_result .tag_s {
  display: inline-block;
  font-size: 14px;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 99px;
  word-break: keep-all;
  margin-bottom: 10px;
  margin-right: 14px;
}
.mod_search_result .tag_hot {
  color: #fc4524;
  border-color: #fc4524;
}
.mod_search_content li {
  position: relative;
  height: 55px;
  padding-left: 56px;
  overflow: hidden;
}
.mod_search_content .avatar,
.mod_search_content .avatar img {
  border-radius: 999px;
}

.mod_search_content .media {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 40px;
  height: 40px;
}
.mod_search_content .main_tit {
  margin: 10px 0 2px;
  line-height: 18px;
  font-size: 16px;
  font-weight: 400;
  color: #000;
}

.mod_search_content .main_tit,
.mod_search_content .sub_tit {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mod_search_content .sub_tit {
  color: grey;
}
.mod_search_content .sub_tit span {
  margin-right: 10px;
}
.mod_search_content li::after {
  content: "";
  position: absolute;
  height: 1px;
  top: 0;
  left: 0;
  right: 0;
  background: #e5e5e5;
}
.mod_search_content .icon {
  position: absolute;
  top: 18px;
  left: 18px;
  width: 22px;
  height: 20px;
  background-position: 0 0;
}

.mod_search_content .icon,
.mod_search_content .icon.no_copyright::after {
  background-image: url(../images/search_sprite.png);
  background-repeat: no-repeat;
  background-size: 22px 30px;
}
.mod_search_content .media img {
  display: block;
  width: 100%;
}

/* 为滚动插件修改 */

.mod_search_content {
  height: calc(100vh - 10.2rem);
}
.ploading {
  text-align: center;
  line-height: 2.5;
}
/* 出现底部播放器时 让滚动区域变小 */
.bd-bottom .mod_search_content {
  height: calc(100vh - 10.2rem - 4.2143rem);
}

.mod_null {
  position: relative;
  padding: 210px 0 0;
  text-align: center;
  color: grey;
}
.mod_null.search:before {
  width: 106px;
  height: 105px;
  margin-left: -53px;
  background-image: url(../images/search_null.png);
}

.mod_null:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 80px;
  -webkit-background-size: cover;
}
.mod_null h6 {
  font-size: 18px;
  line-height: 36px;
  font-weight: 400;
}
</style>
