const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const webpack = require('webpack')
const express = require('express')
const axios = require('axios')

const app = express()
const apiRoutes = express.Router()
app.use('/api',apiRoutes)

const config = {
  mode:'development',
  devtool: 'cheap-module-inline-source-map',
  devServer:{
    before(){
      app.get('/api/vkey', function(req,res){
        var url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
        axios.get(url, {
          headers:{
            referer:'https://c.y.qq.com',
            host:'c.y.qq.com'
          },
          params:req.query
        }).then(response =>
          res.json(response.data)
          )
        .catch(err=>console.log(err))
      })
    },
    contentBase:"./dist",
    hot:true,
    port:8889,
    host:'0.0.0.0',
    historyApiFallback: true,
    proxy:{
      // jsonp 也可以
      // https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2019_02&topid=26&type=top&song_begin=0&song_num=30&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&jsonpCallback=music
      '/api/list':{
        target:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-12-24&topid=4&type=top&song_begin=0&song_num=30&g_tk=1507819077&loginUin=3001418919&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0',
        changeOrigin: true
      },
      '/api/getList':{
        //target:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1550596585034'
        target:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',
        changeOrigin:true,
        pathRewrite:{
          '^/api/getList':''
        },
        bypass:function(req,res,proxyOptions){
          req.headers.referer = 'https://c.y.qq.com',
          req.headers.host='c.y.qq.com'
        }
      },
      '/api/getDiss':{
        target:'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
        changeOrigin:true,
        pathRewrite:{
          '^/api/getDiss':''
        },
        bypass:function(req,res,proxyOptions){
          req.headers.referer = 'https://c.y.qq.com',
          req.headers.host='c.y.qq.com'
        }
      },
      //https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg
      '/api/getCdlist':{
        target:'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
        changeOrigin:true,
        pathRewrite:{
          '^/api/getCdlist':''
        },
        bypass:function(req,res,proxyOptions){
          // req.headers.referer = 'https://y.qq.com/n/m/detail/taoge/index.html?ADTAG=myqq&from=myqq&channel=10007100&id=2646688496',
          req.headers.referer = 'https://y.qq.com/n/yqq/playlist/6811314339.html',
          req.headers.host='c.y.qq.com'
        }
      },
      '/api/getVkey':{
        target:'https://u.y.qq.com/cgi-bin/musicu.fcg',
        changeOrigin:true,
        pathRewrite:{
          '^/api/getVkey':''
        },
        // bypass:function(req,res,proxyOptions){
        //   req.headers.referer = 'https://c.y.qq.com',
        //   req.headers.host='c.y.qq.com'
        // }

      }
      ,

      '/api/getLrc':{
        target:'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg',
        changeOrigin:true,
        pathRewrite:{
          '^/api/getLrc':''
        },
        bypass:function(req,res,proxyOptions){
          req.headers.referer = 'https://c.y.qq.com',
          req.headers.host='c.y.qq.com'
        }

      },
      '/api/getSlider':{
        target:'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1550841445784&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1',
        changeOrigin:true
      }

      // '/api/vkey':{
      //   target:'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg',
      //   changeOrigin: true
      // }
    }
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use:[
          'vue-style-loader',
          {
            loader:'css-loader',
            options:{
              sourceMap:true
            }
          },
          {
            loader:'postcss-loader',
            options:{
              sourceMap:true
            }
          },
          {
            loader:'sass-loader',
            options:{
              sourceMap:true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use:[
          'vue-style-loader',
          {
            loader:'css-loader',
            options:{
              sourceMap:true,
              // modules:true,
              // localIdentName:'[path]-[name]-[hash:base64:5]'
            }
          },
          {
            loader:'postcss-loader',
            options:{
              sourceMap:true
            }
          },
        ]
      },
      {
        resourceQuery: /blockType=docs/,
        loader: require.resolve('./docs-loader.js')
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ]
}
module.exports = merge(baseConfig,config)
