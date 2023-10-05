import MainLayout from '@/layout/MainLayout.vue'

import GameList from '@/modules/gameList/pages/GameList.vue'

export default [
  {
    path: '/',
    name: 'home',
    redirect: {
      name: 'gameList'
    }
  },
  {
    path: '/game-list',
    name: 'gameList',
    component: GameList,
    meta: {
      layout: MainLayout,
      title: 'Game List'
    }
  }
]
