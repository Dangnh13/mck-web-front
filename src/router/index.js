import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store/index.js'
// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// Create the router
const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  // Define route components
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const authenticated = store.getters['auth/getAuthenticated']
    if (!authenticated) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

router.beforeResolve((to, from, next) => {

  next();
});

router.afterEach((to, from) => {
  console.log('afterEach' + to + from)
});

export default router
