import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index/index'
import Order from '@/components/page/order/index'
import ShopMenu from '@/components/page/shopMenu/index'
// children
import PopularityTop from '@/components/page/shopMenu/main/popularityTop/index'
import MasterCoffee from '@/components/page/shopMenu/main/masterCoffee/index'
import ClassicDrinks from '@/components/page/shopMenu/main/classicDrinks/index'
import BossLunch from '@/components/page/shopMenu/main/bossLunch/index'
import MiniMeal from '@/components/page/shopMenu/main/miniMeal/index'
import Juice from '@/components/page/shopMenu/main/juice/index'

import Shopping from '@/components/page/shopping/index'
import About from '@/components/page/about/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/shopMenu',
      // name: 'ShopMenu',
      component: ShopMenu,
      children: [
        {
          path: '/',
          name: 'toPopularityTop',
          component: PopularityTop
        },
        {
          path: '/popularityTop',
          name: 'popularityTop',
          component: PopularityTop
        },
        {
          path: '/masterCoffee',
          name: 'masterCoffee',
          component: MasterCoffee
        },
        {
          path: '/classicDrinks',
          name: 'classicDrinks',
          component: ClassicDrinks
        },
        {
          path: '/bossLunch',
          name: 'bossLunch',
          component: BossLunch
        },
        {
          path: '/miniMeal',
          name: 'miniMeal',
          component: MiniMeal
        },
        {
          path: '/juice',
          name: 'juice',
          component: Juice
        },
        {
          path: '*',
          name: 'redirectPopularityTop',
          redirect: '/popularityTop'
        }
      ]
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }, ,
    {
      path: '*',
      redirect: '/index'
    }
  ]
})

