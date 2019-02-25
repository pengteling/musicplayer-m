<template>
  <!--start top-nav -->
  <div
    id="topNav"
    class="top-nav"
  >
    <ul>
      <router-link
        tag="li"
        :to="{name:'newSong'}"
      >
        <a>
          新歌
        </a>
      </router-link>
      <router-link
        tag="li"
        :to="{name:'topList'}"
      >
        <a>
          排行
        </a>
      </router-link>
      <li class="">
        <a href="http://m.kugou.com/plist/index">
          歌单
        </a>
      </li>
      <li class="">
        <a href="http://m.kugou.com/singer/class">
          歌手
        </a>
      </li>
    </ul>
  </div>
  <!--end top-nav -->
</template>
