import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Logout from '@/views/Logout'
import Profile from '@/views/Profile'
import BoardHome from '@/views/BoardHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/home',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    }, 
    {
      path: 'logged-out',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/:username',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/:username/boards',
      name: 'BoardHome',
      component: BoardHome
    }
  ]
})