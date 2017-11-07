import Vue from 'vue'
import Router from 'vue-router'
import goodsDetail from '../pages/goodsDetail.vue'
import goodsCart from '../pages/goodsCart.vue'
import bulletin from '../pages/bulletin.vue'
import login from '../pages/login.vue'
import register from '../pages/register.vue'
import setting from '../pages/setting.vue'
import mine from '../pages/mine.vue'
import uplogin from '../pages/unlogin.vue'
import classify from '../pages/classify.vue'
import clearing from '../pages/clearing.vue'
import index from '../pages/index.vue'
import liu from '../pages/liu.vue'
import partone from '../components/hangOut/partone.vue'
import parttwo from '../components/hangOut/parttwo.vue'
import partthree from '../components/hangOut/partthree.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:"index",
      component:index
    },
    {
      name:'goodsDetail',
      path: '/goodsDetail',
      component: goodsDetail
    },
    {
      name:'goodsCart',
      path:'/goodsCart',
      component:goodsCart
    },
    {
      name: 'mine',
      path: '/mine',
      component: mine
    },
    {
      name: 'setting',
      path: '/setting',
      component: setting
    },
    {
      name: 'register',
      path: '/register',
      component: register
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'bulletin',
      path: '/bulletin',
      component: bulletin
    },
    {
      name: 'uplogin',
      path: '/uplogin',
      component: uplogin
    },
    {
      name: 'classify',
      path: '/classify',
      component: classify
    },
    {
      name: 'clearing',
      path: '/clearing',
      component: clearing
    },
    {
      path: '/liu',
      name: 'liu',
      component: liu,
    },
    {
      path: '/partone',
      name: 'partone',
      component: partone,
    },
    {
      path: '/parttwo',
      name: 'parttwo',
      component: parttwo,
    },
    {
      path: '/partthree',
      name: 'partthree',
      component: partthree,
    }
  ]
})
