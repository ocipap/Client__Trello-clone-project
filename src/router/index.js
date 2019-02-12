import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Logout from '@/views/Logout'
import Forgot from '@/views/ForgotPassword'
import Profile from '@/views/Profile'
import BoardHome from '@/views/BoardHome'
import store from '../store'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  !!store.state.accessToken ? 
  next() :
  next(`/login?returnUrl=${encodeURIComponent(from.path)}`)
}

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
      path: '/logged-out',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot,
    },
    {
      path: '/:username',
      name: 'Profile',
      component: Profile,
      beforeEnter: requireAuth()
    },
    {
      path: '/:username/boards',
      name: 'BoardHome',
      component: BoardHome,
      beforeEnter: requireAuth()
    }
  ]
})