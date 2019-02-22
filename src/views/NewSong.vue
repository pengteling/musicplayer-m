<template>
  <div
    id="bd"
    class="bd js-bd-box"
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
        id="songs_49AA29C00FCE5899BCB19DA4D2AC1C5D"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>西瓜JUN - 难耐一身闲</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3976632,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58424333},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u897f\u74dcJUN - \u96be\u8010\u4e00\u8eab\u95f2","price_320":200,"extname":"mp3","hash":"49AA29C00FCE5899BCB19DA4D2AC1C5D","audio_id":50498163,"privilege":8,"topic_url_320":"","addtime":"2019-02-22 01:21:51","pkg_price_320":1,"sqfilesize":26021554,"fail_process_320":4,"duration":248,"feetype":0,"320filesize":9941328,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u96be\u8010\u4e00\u8eab\u95f2","isfirst":0,"sqhash":"62C275706EDF328259AB17D0BFFF8C5C","320privilege":10,"320hash":"22A10D345DD14BDEC543D49E0DE6F355","fail_process":4,"album_id":"15541382","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":131561036,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_15F2864CCEBBA1FDEDA5068279A35D8E"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>袁娅维 - 天鹅之歌【阿丽塔：战斗天使电影主题曲中文版】</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":2929102,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58276141},"price":200,"inlist":1,"old_cpy":0,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u8881\u5a05\u7ef4 - \u5929\u9e45\u4e4b\u6b4c\u3010\u963f\u4e3d\u5854\uff1a\u6218\u6597\u5929\u4f7f\u7535\u5f71\u4e3b\u9898\u66f2\u4e2d\u6587\u7248\u3011","price_320":200,"extname":"mp3","hash":"15F2864CCEBBA1FDEDA5068279A35D8E","audio_id":50337846,"privilege":8,"topic_url_320":"","addtime":"2019-02-21 00:39:26","pkg_price_320":1,"sqfilesize":22219756,"fail_process_320":4,"duration":183,"feetype":0,"320filesize":7322689,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u300a\u963f\u4e3d\u5854\uff1a\u6218\u6597\u5929\u4f7f\u300b\u7535\u5f71\u4e3b\u9898\u66f2\u4e2d\u6587\u7248","isfirst":0,"sqhash":"79BDED408D6E38F43EA9DDDE067BD9A9","320privilege":10,"320hash":"EBB1D0CB573A56AF8A7E23877FA1167C","fail_process":4,"album_id":"15267576","pay_type_sq":3,"mvhash":"4F35ECC2AF40C71C13A6240B0A43583F","sqprivilege":10,"album_audio_id":130625636,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_8B68D249FFC4B6B2272D79EACBBA6B63"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>夏婉安 - 失去之后</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":2924214,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58394913},"price":200,"inlist":1,"old_cpy":0,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u590f\u5a49\u5b89 - \u5931\u53bb\u4e4b\u540e","price_320":200,"extname":"mp3","hash":"8B68D249FFC4B6B2272D79EACBBA6B63","audio_id":50453703,"privilege":8,"topic_url_320":"","addtime":"2019-02-21 00:36:03","pkg_price_320":1,"sqfilesize":22198693,"fail_process_320":4,"duration":182,"feetype":0,"320filesize":7310278,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u5931\u53bb\u4e4b\u540e","isfirst":0,"sqhash":"BE3F4251653C83AB5CB56700AFDEB92D","320privilege":10,"320hash":"033EE15B2482981B72B8479185DFE75C","fail_process":4,"album_id":"15420023","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":131123416,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_E437A61BE3126698601224D20F14295E"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>曲肖冰 - 一直想去看你</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":4251779,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58334837},"price":200,"inlist":1,"old_cpy":0,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u66f2\u8096\u51b0 - \u4e00\u76f4\u60f3\u53bb\u770b\u4f60","price_320":200,"extname":"mp3","hash":"E437A61BE3126698601224D20F14295E","audio_id":50408993,"privilege":8,"topic_url_320":"","addtime":"2019-02-20 00:15:12","pkg_price_320":1,"sqfilesize":28741200,"fail_process_320":4,"duration":265,"feetype":0,"320filesize":10629001,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u4e00\u76f4\u60f3\u53bb\u770b\u4f60","isfirst":0,"sqhash":"D993C375609FDDCE0BDAF48BEDAF551C","320privilege":10,"320hash":"8B566AD7154CB9A00AC330039982F0C3","fail_process":4,"album_id":"15352515","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130874205,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_FC5D0DE63A335D051B206636DF0701A8"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>M哥 - 老街</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":5377208,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58307641},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"M\u54e5 - \u8001\u8857","price_320":200,"extname":"mp3","hash":"FC5D0DE63A335D051B206636DF0701A8","audio_id":50390629,"privilege":8,"topic_url_320":"","addtime":"2019-02-20 00:14:31","pkg_price_320":1,"sqfilesize":38001711,"fail_process_320":4,"duration":336,"feetype":0,"320filesize":13442776,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u8001\u8857","isfirst":0,"sqhash":"919CE9420C140889A2C5FB754355C49D","320privilege":10,"320hash":"74A527BA94635D5A0A89766A095AA191","fail_process":4,"album_id":"15322083","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130770183,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_E7DFB273EFC40E9AFEEFA7C6E7DFA8F3"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>SING女团 - 闹元宵</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3397899,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58318346},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"SING\u5973\u56e2 - \u95f9\u5143\u5bb5","price_320":200,"extname":"mp3","hash":"E7DFB273EFC40E9AFEEFA7C6E7DFA8F3","audio_id":50395055,"privilege":8,"topic_url_320":"","addtime":"2019-02-19 01:48:26","pkg_price_320":1,"sqfilesize":25633223,"fail_process_320":4,"duration":212,"feetype":0,"320filesize":8494284,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u95f9\u5143\u5bb5","isfirst":0,"sqhash":"79FBE5800EA8182D96A339836643BB48","320privilege":10,"320hash":"835139F178E17CDD71093F5FFC26C8F8","fail_process":4,"album_id":"15329949","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130794237,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_C1F8454A4F0BF02F55EEDC39110CFF9E"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>张靓颖、蔡国庆、张杰、白雪 - 相约世界</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3508938,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58317734},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u5f20\u9753\u9896\u3001\u8521\u56fd\u5e86\u3001\u5f20\u6770\u3001\u767d\u96ea - \u76f8\u7ea6\u4e16\u754c","price_320":200,"extname":"mp3","hash":"C1F8454A4F0BF02F55EEDC39110CFF9E","audio_id":50394477,"privilege":8,"topic_url_320":"","addtime":"2019-02-19 01:47:14","pkg_price_320":1,"sqfilesize":21930572,"fail_process_320":4,"duration":219,"feetype":0,"320filesize":8772099,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u76f8\u7ea6\u4e16\u754c","isfirst":0,"sqhash":"09AB8D0F84B255CA854D9E067483CD55","320privilege":10,"320hash":"CC5908C3A3F7D544409F6A564CCE720A","fail_process":4,"album_id":"15329615","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130792126,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_035668CC7E52709A9E844AB70BD147E9"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>蔡徐坤 - 没有意外</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":0,"m4afilesize":0,"price_sq":0,"first":1,"filesize":5055260,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58304548},"price":0,"inlist":1,"old_cpy":1,"pkg_price_sq":0,"pay_type":0,"topic_url":"","rp_type":"audio","pkg_price":0,"recommend_reason":"","filename":"\u8521\u5f90\u5764 - \u6ca1\u6709\u610f\u5916","price_320":0,"extname":"mp3","hash":"035668CC7E52709A9E844AB70BD147E9","audio_id":50393751,"privilege":0,"topic_url_320":"","addtime":"2019-02-18 20:02:39","pkg_price_320":0,"sqfilesize":25765017,"fail_process_320":0,"duration":315,"feetype":0,"320filesize":12638085,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u6ca1\u6709\u610f\u5916","isfirst":0,"sqhash":"BAEE2CF9249D5E6A34AABA365C3EC16D","320privilege":0,"320hash":"B0ECE10A603254001E1BD2E5FC388DBD","fail_process":0,"album_id":"15327220","pay_type_sq":0,"mvhash":"","sqprivilege":0,"album_audio_id":130787844,"fail_process_sq":0}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_4C4641423DDCDA3FDF787C44F22CF268"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>黄子韬 - 单身</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3556506,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58251006},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u9ec4\u5b50\u97ec - \u5355\u8eab","price_320":200,"extname":"mp3","hash":"4C4641423DDCDA3FDF787C44F22CF268","audio_id":50297818,"privilege":8,"topic_url_320":"","addtime":"2019-02-18 01:23:45","pkg_price_320":1,"sqfilesize":23557499,"fail_process_320":4,"duration":222,"feetype":0,"320filesize":8891128,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u5355\u8eab","isfirst":0,"sqhash":"8BB2620408B19633CFD7DA77FA59EE36","320privilege":10,"320hash":"CA95CCDE07E38224FB492B957838E571","fail_process":4,"album_id":"15234545","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130516655,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_C664F45BA61320EA8B2B6291665AADEA"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>展展与罗罗 - 一个人【犬爱电影展展与罗罗版主题宣推曲】</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":4016759,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58393623},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u5c55\u5c55\u4e0e\u7f57\u7f57 - \u4e00\u4e2a\u4eba\u3010\u72ac\u7231\u7535\u5f71\u5c55\u5c55\u4e0e\u7f57\u7f57\u7248\u4e3b\u9898\u5ba3\u63a8\u66f2\u3011","price_320":200,"extname":"mp3","hash":"C664F45BA61320EA8B2B6291665AADEA","audio_id":50452807,"privilege":8,"topic_url_320":"","addtime":"2019-02-22 01:38:15","pkg_price_320":1,"sqfilesize":28573617,"fail_process_320":4,"duration":251,"feetype":0,"320filesize":10041641,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u300a\u72ac\u7231\u300b\u7535\u5f71\u5c55\u5c55\u4e0e\u7f57\u7f57\u7248\u4e3b\u9898\u5ba3\u63a8\u66f2","isfirst":0,"sqhash":"80DEC5A9A6FB421DF485A04673B739ED","320privilege":10,"320hash":"FF47C4487603C81C79FB883870D2BB43","fail_process":4,"album_id":"15427525","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":131152908,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_E81A112192BC1AFBC469FFF9561998C5"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>印子月 - 冲出车厢的女孩</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":0,"m4afilesize":0,"price_sq":0,"first":1,"filesize":3114675,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58424257},"price":200,"inlist":1,"old_cpy":0,"pkg_price_sq":0,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u5370\u5b50\u6708 - \u51b2\u51fa\u8f66\u53a2\u7684\u5973\u5b69","price_320":0,"extname":"mp3","hash":"E81A112192BC1AFBC469FFF9561998C5","audio_id":50505497,"privilege":8,"topic_url_320":"","addtime":"2019-02-22 01:28:25","pkg_price_320":0,"sqfilesize":0,"fail_process_320":0,"duration":194,"feetype":0,"320filesize":0,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u51b2\u51fa\u8f66\u53a2\u7684\u5973\u5b69","isfirst":0,"sqhash":"","320privilege":0,"320hash":"","fail_process":4,"album_id":"15550488","pay_type_sq":0,"mvhash":"","sqprivilege":0,"album_audio_id":131605432,"fail_process_sq":0}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_D172A69F082893B2E4EE2DC588943F50"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>慕容晓晓、郑文 - 花月恋</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":0,"m4afilesize":0,"price_sq":0,"first":1,"filesize":4417581,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58425474},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":0,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u6155\u5bb9\u6653\u6653\u3001\u90d1\u6587 - \u82b1\u6708\u604b","price_320":0,"extname":"mp3","hash":"D172A69F082893B2E4EE2DC588943F50","audio_id":50510825,"privilege":8,"topic_url_320":"","addtime":"2019-02-22 01:26:55","pkg_price_320":0,"sqfilesize":0,"fail_process_320":0,"duration":276,"feetype":0,"320filesize":0,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u82b1\u6708\u604b","isfirst":0,"sqhash":"","320privilege":0,"320hash":"","fail_process":4,"album_id":"15553060","pay_type_sq":0,"mvhash":"","sqprivilege":0,"album_audio_id":131614370,"fail_process_sq":0}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_7314DB1981AC93797F8B274FE70D8884"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>洛天依 - 我jio得海星</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":0,"first":1,"filesize":2927430,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58429296},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":0,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u6d1b\u5929\u4f9d - \u6211jio\u5f97\u6d77\u661f","price_320":200,"extname":"mp3","hash":"7314DB1981AC93797F8B274FE70D8884","audio_id":50518337,"privilege":8,"topic_url_320":"","addtime":"2019-02-22 01:25:25","pkg_price_320":1,"sqfilesize":0,"fail_process_320":4,"duration":182,"feetype":0,"320filesize":7318509,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u6211jio\u5f97\u6d77\u661f","isfirst":0,"sqhash":"","320privilege":10,"320hash":"0E56D4E3934972D282E28E2865043E88","fail_process":4,"album_id":"15559946","pay_type_sq":0,"mvhash":"","sqprivilege":0,"album_audio_id":131642279,"fail_process_sq":0}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_F1CA9E1E0FDEC1BA2DED126BE3039C60"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>张含韵 - 一百万个可能</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":4414111,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58335210},"price":200,"inlist":1,"old_cpy":0,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u5f20\u542b\u97f5 - \u4e00\u767e\u4e07\u4e2a\u53ef\u80fd","price_320":200,"extname":"mp3","hash":"F1CA9E1E0FDEC1BA2DED126BE3039C60","audio_id":50409123,"privilege":8,"topic_url_320":"","addtime":"2019-02-20 00:16:54","pkg_price_320":1,"sqfilesize":33248174,"fail_process_320":4,"duration":275,"feetype":0,"320filesize":11035211,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u4e00\u767e\u4e07\u4e2a\u53ef\u80fd","isfirst":0,"sqhash":"E7EBEDBF38E70629513AE119B7F1B972","320privilege":10,"320hash":"DC09A5F8ACD45B4497F81EC96C5AED98","fail_process":4,"album_id":"15352340","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130873189,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_DCADF742D397B9EF0904738EAE0F674F"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>贺敬轩 - 爱的暴风圈</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3931415,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58349096},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u8d3a\u656c\u8f69 - \u7231\u7684\u66b4\u98ce\u5708","price_320":200,"extname":"mp3","hash":"DCADF742D397B9EF0904738EAE0F674F","audio_id":50419835,"privilege":8,"topic_url_320":"","addtime":"2019-02-20 00:18:17","pkg_price_320":1,"sqfilesize":28934913,"fail_process_320":4,"duration":245,"feetype":0,"320filesize":9828411,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u7231\u7684\u66b4\u98ce\u5708","isfirst":0,"sqhash":"CE9B7EDD32EF6CD9D97A6E5F34025A66","320privilege":10,"320hash":"805E95042D953E99D108A57EBFEACCFB","fail_process":4,"album_id":"15354584","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130885010,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_49AE9108CBFA1B037DDC5875AA7535B6"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>星月组合 - 再叫一声亲爱的</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3432862,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58349461},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u661f\u6708\u7ec4\u5408 - \u518d\u53eb\u4e00\u58f0\u4eb2\u7231\u7684","price_320":200,"extname":"mp3","hash":"49AE9108CBFA1B037DDC5875AA7535B6","audio_id":50420266,"privilege":8,"topic_url_320":"","addtime":"2019-02-20 00:18:55","pkg_price_320":1,"sqfilesize":25539037,"fail_process_320":4,"duration":214,"feetype":0,"320filesize":8581921,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u518d\u53eb\u4e00\u58f0\u4eb2\u7231\u7684","isfirst":0,"sqhash":"BFCC52835CAB07EBD441FE1CCF9292BC","320privilege":10,"320hash":"785602367380823BFF99699ECBAF46B1","fail_process":4,"album_id":"15355468","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130886285,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_6964E9D48A50641E3189EAA528B085BB"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>暴林 - 爱你让我痴心化成灰</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3907664,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58349645},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u66b4\u6797 - \u7231\u4f60\u8ba9\u6211\u75f4\u5fc3\u5316\u6210\u7070","price_320":200,"extname":"mp3","hash":"6964E9D48A50641E3189EAA528B085BB","audio_id":50420495,"privilege":8,"topic_url_320":"","addtime":"2019-02-20 00:21:12","pkg_price_320":1,"sqfilesize":28654322,"fail_process_320":4,"duration":244,"feetype":0,"320filesize":9768925,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u7231\u4f60\u8ba9\u6211\u75f4\u5fc3\u5316\u6210\u7070","isfirst":0,"sqhash":"C2D6A15782F39A8D9462B91864351AE2","320privilege":10,"320hash":"A644389969AB2AFA5051E5108B39A7C5","fail_process":4,"album_id":"15356335","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130889301,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_B5E13802F842DA8AD97690D61DDCCB0B"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>刘惜君 - 深渊的等待【隐形守护者片尾曲】</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":0,"m4afilesize":0,"price_sq":0,"first":1,"filesize":4304024,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58317452},"price":0,"inlist":1,"old_cpy":1,"pkg_price_sq":0,"pay_type":0,"topic_url":"","rp_type":"audio","pkg_price":0,"recommend_reason":"","filename":"\u5218\u60dc\u541b - \u6df1\u6e0a\u7684\u7b49\u5f85\u3010\u9690\u5f62\u5b88\u62a4\u8005\u7247\u5c3e\u66f2\u3011","price_320":0,"extname":"mp3","hash":"B5E13802F842DA8AD97690D61DDCCB0B","audio_id":50394084,"privilege":0,"topic_url_320":"","addtime":"2019-02-20 11:07:50","pkg_price_320":0,"sqfilesize":30521652,"fail_process_320":0,"duration":268,"feetype":0,"320filesize":10759613,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u300a\u9690\u5f62\u5b88\u62a4\u8005\u300b\u7247\u5c3e\u66f2","isfirst":0,"sqhash":"3F61E492EA16C3269DA8133AC29B6A83","320privilege":0,"320hash":"4298476266E248985B3D7823DC5DF9FF","fail_process":0,"album_id":"15344334","pay_type_sq":0,"mvhash":"4E7890F65347B6CEE5DE4A40F855EC3F","sqprivilege":0,"album_audio_id":130841890,"fail_process_sq":0}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_8F2103EEABA4B069CA1E71A9BBDE434A"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>蒋家驹 (蒋蒋) - 八月长安</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3395962,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58395506},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u848b\u5bb6\u9a79 (\u848b\u848b) - \u516b\u6708\u957f\u5b89","price_320":200,"extname":"mp3","hash":"8F2103EEABA4B069CA1E71A9BBDE434A","audio_id":50453982,"privilege":8,"topic_url_320":"","addtime":"2019-02-22 02:46:30","pkg_price_320":1,"sqfilesize":24729781,"fail_process_320":4,"duration":212,"feetype":0,"320filesize":8489325,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u516b\u6708\u957f\u5b89","isfirst":0,"sqhash":"DA35B4E859DA393C76B9E397D183A885","320privilege":10,"320hash":"0C16F31AB245DB38FD3CFC8EBEDEDA23","fail_process":4,"album_id":"15429628","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":131161794,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_75A83538F1C47B8269A49C557FBA7ABF"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>雨霖枫、蒙面哥 - 小猪佩奇</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":4984625,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58304557},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u96e8\u9716\u67ab\u3001\u8499\u9762\u54e5 - \u5c0f\u732a\u4f69\u5947","price_320":200,"extname":"mp3","hash":"75A83538F1C47B8269A49C557FBA7ABF","audio_id":50386012,"privilege":8,"topic_url_320":"","addtime":"2019-02-22 02:45:26","pkg_price_320":1,"sqfilesize":33592530,"fail_process_320":4,"duration":311,"feetype":0,"320filesize":12461497,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u5c0f\u732a\u4f69\u5947","isfirst":0,"sqhash":"7EF6DBF59700AC3439696AD6DBB17614","320privilege":10,"320hash":"8B891D2C636EC2FD84B792806BD52987","fail_process":4,"album_id":"15325997","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130782580,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_1568DE466ECFCB79F4CF81913DE0AA1A"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>深七 - 锦绣山河卷</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":2471436,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58344625},"price":200,"inlist":1,"old_cpy":0,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u6df1\u4e03 - \u9526\u7ee3\u5c71\u6cb3\u5377","price_320":200,"extname":"mp3","hash":"1568DE466ECFCB79F4CF81913DE0AA1A","audio_id":50415982,"privilege":8,"topic_url_320":"","addtime":"2019-02-22 02:34:35","pkg_price_320":1,"sqfilesize":20525804,"fail_process_320":4,"duration":154,"feetype":0,"320filesize":6178525,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u9526\u7ee3\u5c71\u6cb3\u5377","isfirst":0,"sqhash":"75EC26238D5390F6CCE22C1FA75A8A47","320privilege":10,"320hash":"145E0803247C852A614E6F6D362D0C7F","fail_process":4,"album_id":"15359455","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130922437,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_62D704DEBF030EAC183C0C5201DBFBFD"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>望海高歌、晓依 - 爱的唯一</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":0,"m4afilesize":0,"price_sq":0,"first":1,"filesize":3819072,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58420000},"price":0,"inlist":1,"old_cpy":1,"pkg_price_sq":0,"pay_type":0,"topic_url":"","rp_type":"audio","pkg_price":0,"recommend_reason":"","filename":"\u671b\u6d77\u9ad8\u6b4c\u3001\u6653\u4f9d - \u7231\u7684\u552f\u4e00","price_320":0,"extname":"mp3","hash":"62D704DEBF030EAC183C0C5201DBFBFD","audio_id":50493538,"privilege":0,"topic_url_320":"","addtime":"2019-02-22 02:32:41","pkg_price_320":0,"sqfilesize":0,"fail_process_320":0,"duration":238,"feetype":0,"320filesize":9547411,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u7231\u7684\u552f\u4e00","isfirst":0,"sqhash":"","320privilege":0,"320hash":"304DA2A129CAFF87C2E6F457129A2103","fail_process":0,"album_id":"15527650","pay_type_sq":0,"mvhash":"","sqprivilege":0,"album_audio_id":131511309,"fail_process_sq":0}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_1BBE73BD94EFDF46EFD47C3DFF855365"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>刘增瞳 - 合影留念</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3180833,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58349537},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u5218\u589e\u77b3 - \u5408\u5f71\u7559\u5ff5","price_320":200,"extname":"mp3","hash":"1BBE73BD94EFDF46EFD47C3DFF855365","audio_id":50420322,"privilege":8,"topic_url_320":"","addtime":"2019-02-21 00:51:44","pkg_price_320":1,"sqfilesize":23020499,"fail_process_320":4,"duration":198,"feetype":0,"320filesize":7951847,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u5408\u5f71\u7559\u604b","isfirst":0,"sqhash":"33B13D7F2868111936B5E6623A39CC3B","320privilege":10,"320hash":"0D4AA6752BA52E906415C039BDC5E3DC","fail_process":4,"album_id":"15355725","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130886911,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_79EAB942DE1A3378D7D7322B778940CA"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>一修 - 兴风作浪</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":0,"m4afilesize":0,"price_sq":0,"first":1,"filesize":4070961,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58379257},"price":0,"inlist":1,"old_cpy":1,"pkg_price_sq":0,"pay_type":0,"topic_url":"","rp_type":"audio","pkg_price":0,"recommend_reason":"","filename":"\u4e00\u4fee - \u5174\u98ce\u4f5c\u6d6a","price_320":0,"extname":"mp3","hash":"79EAB942DE1A3378D7D7322B778940CA","audio_id":50431495,"privilege":0,"topic_url_320":"","addtime":"2019-02-20 10:03:35","pkg_price_320":0,"sqfilesize":32204135,"fail_process_320":0,"duration":254,"feetype":0,"320filesize":10177137,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u5174\u98ce\u4f5c\u6d6a","isfirst":0,"sqhash":"D213EB0329CB14A21329C2E8B8E4A145","320privilege":0,"320hash":"CF5DEE8917968A7A180761E6BCD9FF7C","fail_process":0,"album_id":"15365184","pay_type_sq":0,"mvhash":"","sqprivilege":0,"album_audio_id":130920724,"fail_process_sq":0}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_C5C66A3E7790DD0577B51870F6DA59F6"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>王琪、欣宝儿 - 一壶天涯</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":4175164,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58333528},"price":200,"inlist":1,"old_cpy":0,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u738b\u742a\u3001\u6b23\u5b9d\u513f - \u4e00\u58f6\u5929\u6daf","price_320":200,"extname":"mp3","hash":"C5C66A3E7790DD0577B51870F6DA59F6","audio_id":50408148,"privilege":8,"topic_url_320":"","addtime":"2019-02-20 00:22:55","pkg_price_320":1,"sqfilesize":27897974,"fail_process_320":4,"duration":260,"feetype":0,"320filesize":10437645,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u4e00\u58f6\u5929\u6daf","isfirst":0,"sqhash":"E68E0DBFF14667FE5776020DE4A038F9","320privilege":10,"320hash":"4E7E890A69B6AF76E4514BB74C1BB185","fail_process":4,"album_id":"15345099","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130844942,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_B8AB4F1D27424177B494670A01F05CB8"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>金玟岐 - 勇敢者的告别【朝花夕誓电影宣传推广曲】</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3962413,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58259040},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u91d1\u739f\u5c90 - \u52c7\u6562\u8005\u7684\u544a\u522b\u3010\u671d\u82b1\u5915\u8a93\u7535\u5f71\u5ba3\u4f20\u63a8\u5e7f\u66f2\u3011","price_320":200,"extname":"mp3","hash":"B8AB4F1D27424177B494670A01F05CB8","audio_id":50310337,"privilege":8,"topic_url_320":"","addtime":"2019-02-18 10:00:44","pkg_price_320":1,"sqfilesize":23331031,"fail_process_320":4,"duration":247,"feetype":0,"320filesize":9905792,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u300a\u671d\u82b1\u5915\u8a93\u300b\u7535\u5f71\u5ba3\u4f20\u63a8\u5e7f\u66f2","isfirst":0,"sqhash":"288D402B1095D4A16E85558ADE79B374","320privilege":10,"320hash":"50BD1143A55CD6DC3EA2809751AB770B","fail_process":4,"album_id":"15267321","pay_type_sq":3,"mvhash":"7C41299F2C774B92FCF7C743A78B0F78","sqprivilege":10,"album_audio_id":130623946,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_A4F015F1C24566AA80315329FAAE7329"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>电流妹 - 粉色少女</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3487623,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58315507},"price":200,"inlist":1,"old_cpy":0,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u7535\u6d41\u59b9 - \u7c89\u8272\u5c11\u5973","price_320":200,"extname":"mp3","hash":"A4F015F1C24566AA80315329FAAE7329","audio_id":50393304,"privilege":8,"topic_url_320":"","addtime":"2019-02-19 01:53:05","pkg_price_320":1,"sqfilesize":28983996,"fail_process_320":4,"duration":217,"feetype":0,"320filesize":8718903,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u7c89\u8272\u5c11\u5973","isfirst":0,"sqhash":"21752AF956D27A102384C28B0ACF2A6A","320privilege":10,"320hash":"9A1F3CD7AFA0323974DB1405E74815C3","fail_process":4,"album_id":"15329008","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130790610,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_D047095B0A3A0BB3D73E175D580F467F"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>高进 - 失控【失控超级犯罪网剧同名主题曲】</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3896805,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58308098},"price":200,"inlist":1,"old_cpy":1,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u9ad8\u8fdb - \u5931\u63a7\u3010\u5931\u63a7\u8d85\u7ea7\u72af\u7f6a\u7f51\u5267\u540c\u540d\u4e3b\u9898\u66f2\u3011","price_320":200,"extname":"mp3","hash":"D047095B0A3A0BB3D73E175D580F467F","audio_id":50391159,"privilege":8,"topic_url_320":"","addtime":"2019-02-19 01:50:43","pkg_price_320":1,"sqfilesize":26777925,"fail_process_320":4,"duration":243,"feetype":0,"320filesize":9741755,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u300a\u5931\u63a7\u300b\u8d85\u7ea7\u72af\u7f6a\u7f51\u5267\u540c\u540d\u4e3b\u9898\u66f2","isfirst":0,"sqhash":"AF6F789A8C9228EC24B9CAC65E281FD6","320privilege":10,"320hash":"B64A765BBAA5BD159CDF164C2D592D72","fail_process":4,"album_id":"15323726","pay_type_sq":3,"mvhash":"0B80AC07D7FC8D5CE121AA3B12D96F93","sqprivilege":10,"album_audio_id":130775436,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_02A5E75604F1001EAE32D41118FAC630"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>带泪的鱼 - 回来我身旁让我爱你</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":4801365,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58258025},"price":200,"inlist":1,"old_cpy":0,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u5e26\u6cea\u7684\u9c7c - \u56de\u6765\u6211\u8eab\u65c1\u8ba9\u6211\u7231\u4f60","price_320":200,"extname":"mp3","hash":"02A5E75604F1001EAE32D41118FAC630","audio_id":50306234,"privilege":8,"topic_url_320":"","addtime":"2019-02-18 01:25:06","pkg_price_320":1,"sqfilesize":35959739,"fail_process_320":4,"duration":300,"feetype":0,"320filesize":12003011,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u56de\u6765\u6211\u8eab\u65c1\u8ba9\u6211\u7231\u4f60","isfirst":0,"sqhash":"E186CF7B10EFE27C8F693758A9760D38","320privilege":10,"320hash":"A670195E9E9941D3EE06FCF47DFD7E0D","fail_process":4,"album_id":"15265858","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130620139,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
      <li
        id="songs_F8066025FA74624F74F7B90ECA788CB5"
        class="panel-songslist-item"
        onclick="playerModule.playSong(this);"
      >
        <div class="panel-songs-item-name btn_play">
          <span>宋孟君 - 回忆有毒</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
          onclick="dialogDownload.showDialog(this,event,true);"
        >
          <em style="display: none;">
            {"pay_type_320":3,"m4afilesize":0,"price_sq":200,"first":1,"filesize":3540158,"bitrate":128,"trans_param":{"roaming_astrict":0,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0,"cid":58258084},"price":200,"inlist":1,"old_cpy":0,"pkg_price_sq":1,"pay_type":3,"topic_url":"","rp_type":"audio","pkg_price":1,"recommend_reason":"","filename":"\u5b8b\u5b5f\u541b - \u56de\u5fc6\u6709\u6bd2","price_320":200,"extname":"mp3","hash":"F8066025FA74624F74F7B90ECA788CB5","audio_id":50306799,"privilege":8,"topic_url_320":"","addtime":"2019-02-18 01:24:30","pkg_price_320":1,"sqfilesize":22515835,"fail_process_320":4,"duration":221,"feetype":0,"320filesize":8850329,"rp_publish":1,"has_accompany":1,"topic_url_sq":"","remark":"\u56de\u5fc6\u6709\u6bd2","isfirst":0,"sqhash":"D365B527E4B2910FFEC1ECE458A5E30B","320privilege":10,"320hash":"B13930ABDB3F24EB80EF46D87D53AC87","fail_process":4,"album_id":"15265424","pay_type_sq":3,"mvhash":"","sqprivilege":10,"album_audio_id":130619023,"fail_process_sq":4}
          </em><i></i>
        </div>
      </li>
    </ul>
    <!-- end panel-songslist -->
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import axios from 'axios'

export default {
  data() {
    return {
      sliders: [],
    }
  },
  created() {

  },
  mounted() {
    axios.get('/api/getSlider').then((res) => {
      console.log(res)
      this.sliders = res.data.data.slider

      this.$nextTick().then(() => {
        const mySwiper = new Swiper('.swiper-container', {
          autoplay: true,

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

        })
      })
    })

    // console.log(this.$store)
  },
}
</script>
<style lang="scss">
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
