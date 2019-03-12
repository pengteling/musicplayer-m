<template>
  <div
    id="bd"
    class="bd js-bd-box"
  >
    <div
      class="mod_topic"
      style=""
    >
      <ul>
        <router-link
          v-for="item in topList"
          :key="item.id"
          :to1="`/toplist/${item.id}`"
          :to="{name:'list',params:{id: item.id}}"

          tag="li"
          class="topic_item"
        >
          <div class="topic_main">
            <span
              class="topic_media"
            >
              <img :src="item.picUrl"><span class="listen_count">
                <i class="icon icon_listen"></i>{{ (item.listenCount / 10000).toFixed(1) }}万
              </span>
            </span><div class="topic_info">
              <div class="topic_cont">
                <h3 class="topic_tit">
                  {{ item.topTitle }}
                </h3>
                <p
                  v-for="(song,index) in item.songList"
                  :key="index"
                >
                  {{ index + 1 }}<span class="text_name">
                    {{ song.songname }}
                  </span>- {{ song.singername }}
                </p>
              </div><i class="topic_arrow"></i>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import jsonp from 'jsonp'

export default {
  name: 'TopList',
  data() {
    return {
      topList: [],
    }
  },
  created() {
    jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?_=1551961932330&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1', {
      name: 'MusicJsonCallback',
    }, (err, data) => {
      console.log(data)
      const toplistData = data.data.topList
      this.topList = toplistData
    })
  },
}
</script>

<style lang="scss" scoped>
.bd{

    background: #f4f4f4;

}
.mod_topic {
    margin: 10px;
}
.mod_topic li {
    margin-bottom: 10px;
    overflow: hidden;
}
.mod_topic li .topic_main {
    display: -webkit-box;
    background: #fff;
}
.mod_topic li .topic_media {
    position: relative;
    width: 100px;
    height: 100px;
    display: block;
}
.mod_topic li .topic_media img {
    display: block;
    width: 100px;
    height: 100px;
}
.mod_topic li .topic_media .listen_count {
    left: 5px;
    bottom: 7px;
    line-height: 12px;
    color: #fff;
    opacity: .6;
    font-size: 9px;
    z-index: 10;
}
.mod_topic li .topic_media .icon_play, .mod_topic li .topic_media .listen_count {
    position: absolute;
    display: block;
}
.mod_topic li .topic_media .icon_play, .mod_topic li .topic_media .icon_listen {
    background-image: url(../images/list_sprite.png);
    background-repeat: no-repeat;
    background-size: 24px 60px;
    z-index: 10;
}
.mod_topic li .topic_media .icon_listen {
    display: block;
    float: left;
    width: 10px;
    height: 10px;
    background-position: 0 -50px;
    margin-right: 3px;
}
.mod_topic li .topic_media::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    z-index: 1;
    background-image: url(../images/shadow_rp_b.png?max_age=19830212&d=20151105145423);
    background-size: 1px 117px;
    background-repeat: repeat-x;
}
.mod_topic li .topic_info {
    position: relative;
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
}
.mod_topic li .topic_cont {
    -webkit-box-flex: 1;
    margin: 0 10px 0 15px;
}
.mod_topic li .topic_tit {
    font-size: 16px;
    color: #000;
    font-weight: normal;
    margin-bottom: 5px;
}

.mod_topic li .topic_tit, .mod_topic li .topic_cont p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.mod_topic li .topic_cont p {
    font-size: 12px;
    font-family: 'arial'; //等宽字体
    line-height: 1.5;
    color: rgba(0,0,0,.5);
}

.mod_topic li .topic_tit, .mod_topic li .topic_cont p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mod_topic li .topic_cont .text_name {
    color: #000;
    margin-left: 8px;
    margin-right: 5px;
}
.mod_topic li .topic_arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -4px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #b2b2b2;
    border-bottom: 1px solid #b2b2b2;
    -webkit-transform: rotate(-45deg);
}
</style>
