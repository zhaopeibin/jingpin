import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import mine from '../views/mine.vue'
import detail from '../views/detail.vue'
import orderlist from '../views/orderlist'
import allList from '../views/allList'
import waitMoney from '../views/waitMoney'
import waitGoods from '../views/waitGoods'
import peiSong from '../views/peiSong'
import addressEdit from '../views/addressEdit.vue'
import addressList from '../views/addressList.vue'
import userset from '../views/userset.vue'
import blance from '../views/blance.vue'
import orderDeta  from '../views/orderDeta.vue'
import express  from '../views/express.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: orderlist,
     children:[{
       path:'/allList',
       name:'allList',
       component:allList
     },
     {
      path:'/waitMoney',
      name:'waitMoney',
      component:waitMoney
    },
    {
      path:'/waitGoods',
      name:'waitGoods',
      component:waitGoods
    },
    {
      path:'/peiSong',
      name:'peiSong',
      component:peiSong
    }
    ],
     
    },
    {
      path:'/addressEdit',
      name:'addressEdit',
      component:addressEdit
    },
    {
      path:'/addressList',
      name:'addressList',
      component:addressList
    },
    {
      path:'/userset',
      name:'userset',
      component:userset
    },
    {
      path:'/blance',
      name:'blance',
      component:blance
    },
    {
      path:'/orderDeta',
      name:'orderDeta',
      component:orderDeta
    },
    {
      path:'/express',
      name:'express',
      component:express
    }
    
    
  ]
})
