import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import menu from '@/components/menu.vue'
import admin from '@/components/admin.vue'
import about from '@/components/personname.vue'
import login from '@/components/login.vue'
import register from '@/components/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path:'/menu',
    	name:'menu',
    	component:menu
    },
    {
    	path:'/admin',
    	name:'admin',
    	component:admin
    },
    {
    	path:'/about',
    	name:'about',
    	component:about
    },
     {
    	path:'/login',
    	name:'login',
    	component:login
    },
    {
    	path:'/register',
    	name:'register',
    	component:register
    }
  ]
})
