import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/views/Main'
import Header from '@/views/Header'

import NewSong from '@/views/NewSong'

// import TopList from '@/views/TopList'
const TopList = () => import('@/views/TopList')
const player = () => import('@/views/player')
const List = () => import('@/views/List')

Vue.use(Router)

const routes = [
  {
    path: '/',
    components: {
      default: Main,
      header: Header,
    },
    children: [
      {
        path: '',
        component: NewSong,
        name: 'newSong',
      },
      {
        path: 'player',
        component: player,
        meta: {
          HaveNoNav: true,
        },
        name: 'player',
      },
      {
        path: 'toplist',
        component: TopList,
        name: 'topList',
      },
      {
        path: 'toplist/:id',
        component: List,
        name: 'list',
        meta: {
          HaveNoNav: true,
        },
      },
    ],
  },
]

export default new Router({
  mode: 'history',
  routes,
  linkExactActiveClass: 'cur',
})
