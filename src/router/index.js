import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let router = new Router({
  base: '/',
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Helloworld',
    component: () => import('@/pages/Helloworld'),
    meta: {
      title: 'Helloworld'
    }
  }]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router


