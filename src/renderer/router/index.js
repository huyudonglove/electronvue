import Vue from 'vue'
import Router from 'vue-router'
import aa from '../components/aa.vue'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('../components/home').default,
      children:[
        {
          path:'/aa',
          name:'aa',
          component:aa
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
