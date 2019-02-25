<template>
  <div
    id="dialogNotDownload"
    class="dialog-box single-dialog"
  >
    <div class="dialog-inner">
      <div class="dialog-bd">
        <p>唱片公司不给我们这首歌了，先听听别的吧。</p>
      </div>
      <div class="dialog-ft">
        <span
          class="btn btn-default js-dialog-hide"
          data-hide="dialog"
          data-dialog-id="dialogNotDownload"
          @click="$emit('cancel')"
        >
          取消
        </span>
        <a
          id="downloadNotBtn"
          href="javascript:;"
          class="btn btn-primary"
          onclick="_hmt.push(['_trackEvent','nysoftware', 'nydownload', 'nykugou']);"
        >
          下载酷狗
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.dialog-box {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.6);
    font-size: 0;
    // display: none;
    z-index: 10000;
}
.dialog-box:after, .dialog-box:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 6%;
    height: 100%;
}
.dialog-inner {
    width: 88%;
    border-top: .25rem solid #229ef8;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;
    background: #fff;
}
.single-dialog .dialog-bd {
    padding: 1.7857rem 1.4286rem;
    text-align: center;
}

.dialog-bd {
    padding: 1.09375rem 1.4286rem;
    color: #333;
    font-size: 1rem;
}
.dialog-ft {
    width: 100%;
    border-top: 1px solid #ccc;
    display: box;
    display: -webkit-box;
}
.dialog-ft .btn-default {
    border-right: 1px solid #ccc;
    color: #828282;
    cursor: pointer;
}

.dialog-ft .btn {
    width: 50%;
    padding: 1rem 0;
    font-size: 1rem;
    text-align: center;
    display: block;
    -webkit-box-flex: 1;
    box-flex: 1;
}

.dialog-ft .btn-primary {
    color: #229ef8;
}
.dialog-ft .btn {
    width: 50%;
    padding: 1rem 0;
    font-size: 1rem;
    text-align: center;
    display: block;
    -webkit-box-flex: 1;
    box-flex: 1;
}
</style>
