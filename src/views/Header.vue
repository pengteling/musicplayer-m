<template>
  <div
    id="topFixed"
    class="top-fixed"
  >
    <!--start top-hd -->
    <div class="top-hd">
      <router-link
        class="logo"
        to="/"
        title="酷狗音乐"
      ></router-link>


      <a
        id="btnSearch"
        href="http://m.kugou.com/search/index"
        class="btn-search"
      ></a>
    </div>
    <!--end top-hd -->

    <Nav v-if="isNav"></Nav>
    <GoBack v-if="!isNav"></GoBack>


    <Mplayer @getError="isError=true"></Mplayer>
    <Error
      v-if="isError"
      @cancel="isError=false"
    ></Error>
  </div>
</template>
<script>
import Mplayer from '@/components/Mplayer'
import Error from './Error'
import Nav from './Nav'
import GoBack from './goBack'

export default {
  components: {
    Mplayer, Error, Nav, GoBack,
  },
  data() {
    return {
      isError: false,
      isNav: true,
    }
  },
  watch: {
    '$route.name': {
      handler() {
      // if(val)
        if (this.$route.meta.HaveNoNav) {
          this.isNav = false
        } else {
          this.isNav = true
        }
      },
      immediate: true,
    },
  },
}
</script>

<style lang="scss">
.top-fixed {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 120;
}
.top-hd {
  width: 100%;
  padding-top: 0.0357rem;
  height: 3.2143rem;
  line-height: 3rem;
  background: #2ca2f9;
  position: relative;
}
.top-hd .logo {
  width: 7.286rem;
  height: 1.67857rem;
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.7143rem;
  background: url(../images/logo.png) no-repeat;
  background-size: 100%;
}
.top-nav {
  width: 100%;
  background: #fff;
  height: 3.2143rem;
  line-height: 3rem;
  box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
}
.top-nav ul {
  width: 100%;
  padding: 0 0.7143rem;
  display: -webkit-box;
  display: box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.top-nav li {
  width: 20%;
  text-align: center;
  -webkit-box-flex: 1;
  box-flex: 1;
}
.top-nav li.cur a {
  border-bottom: 0.2143rem solid #33a3f5;
}

.top-nav li a {
  border-bottom: 0.2143rem solid #fff;
  display: block;
  color: #333;
  font-size: 1.1429rem;
  // font-size: 20.5722px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
