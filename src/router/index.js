import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

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

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next();
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach call to ' + to);

  if(to !== null) {
      console.log('vao nexxt 1')
      next();
  }

  console.log('vao nexxt 2')

  next()
});
router.afterEach((to, from) => {
  console.log('afterEach' + to + from)
});

export default router
