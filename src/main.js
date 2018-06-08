import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './examples/Home.vue'
import Example1 from './examples/Example-1.vue'
import Example2 from './examples/Example-2.vue'
import Example3 from './examples/Example-3.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path:'/',
      name:'home',
      component: Home,
    },
    {
      path:'/1',
      name:'example1',
      component: Example1,
      props: true
    },
    {
      path:'/2',
      name:'example2',
      component: Example2,
      props: true
    },
    {
      path:'/3',
      name:'example3',
      component: Example3,
      props: true
    },
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
