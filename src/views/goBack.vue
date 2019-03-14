<template>
  <div class="top-goback">
    <p class="page-title js-ftSongName">
      {{ goBackTit }}
    </p>
    <div
      id="hidePlay"
      class="goback"
      @click="$router.go(-1)"
    >
      <i></i>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['goBackTit']),
  },
}
</script>

<style lang="scss">
.top-goback {
  width: 100%;
  line-height: 3rem;
  background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));
  padding: 0 2.1429rem;
  position: relative;
  text-align: center;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.page-title {
  height: 3rem;
  line-height: 3rem;
  font-size: 1rem;
}
.goback {
  width: 2.1429rem;
  height: 2.8031rem;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  cursor: pointer;
}
.goback i {
  width: .85714rem;
  height: 1.42857rem;
  margin-top: .687265rem;
  display: inline-block;
  background: url(../images/goback_1.png) no-repeat;
  background-size: 100%;
}

</style>
