<template>
  <div
    id="bd"
    class="bd js-bd-box"
  >
    <div
      class="search_box"
      style=""
    >
      <div class="mod_search_bar">
        <div class="search_bar_cont">
          <form
            method="get"
            action="#"
          >
            <input
              class="search_input"
              type="search"
              autocomplete="off"
              autocorrect="off"
              placeholder="搜索歌曲、歌单、专辑"
              style="-webkit-appearance: textfield;"
            ><span class="icon icon_search">
              搜索
            </span><span
              class="icon icon_delete"
              style="display: none;"
            >
              删除
            </span>
          </form>
        </div><div
          class="search_bar_tip_text"
          style="display: none;"
        >
          取消
        </div>
      </div><div
        class="mod_search_record"
        style="display: none;"
      >
        <ul>
          <li>
            <a
              href="javascript:;"
              class="record_main"
            >
              <span class="icon iocn_clock"></span><span class="record_con">
                有人
              </span><span class="icon icon_close"></span>
            </a>
          </li><li>
            <a
              href="javascript:;"
              class="record_main"
            >
              <span class="icon iocn_clock"></span><span class="record_con">
                在
              </span><span class="icon icon_close"></span>
            </a>
          </li>
        </ul><p
          class="record_handle"
          style=""
        >
          <a href="javascript:;">
            清除搜索记录
          </a>
        </p>
      </div><div
        id="js_hot_keys"
        class="mod_search_result"
        style=""
      >
        <h3
          class="result_tit"
          style=""
        >
          热门搜索
        </h3><div class="result_tags">
          <a
            v-for="(item,index) in hotKeys"
            :key="index"
            href="https://y.qq.com/m/act/singer2019/index.html?openinqqmusic=1&amp;ADTAG=myqq"
            class="tag_s"
            :class="{tag_hot:index===0}"
          >
            {{ item }}
          </a>
        </div>
      </div><div
        class="mod_search_content"
        style="display: none;"
      >
        <ul class="search_content"></ul><p
          class="load_complete"
          style="display: none;"
        >
          点击获取更多搜索结果
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotKeys: ['歌手', 'Gai见面吧电台', '红尘来去一场梦', '不能说的秘密', '爱情有时很残忍', 'IZONE'],
      isSearch: false,
      isShowHistory: true,
    }
  },
}
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
    color: rgba(0,0,0,.3);
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

.icon_close:after, .icon_close:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    background: rgba(0,0,0,.6);
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
    color: rgba(0,0,0,.6);
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
    border: 1px solid rgba(0,0,0,.6);
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
.mod_search_content .avatar, .mod_search_content .avatar img {
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

.mod_search_content .main_tit, .mod_search_content .sub_tit {
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

.mod_search_content .icon, .mod_search_content .icon.no_copyright::after {
    background-image: url(../images/search_sprite.png);
    background-repeat: no-repeat;
    background-size: 22px 30px;
}
.mod_search_content .media img {
    display: block;
    width: 100%;
}

/* 为滚动插件修改 */

.mod_search_content{
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
