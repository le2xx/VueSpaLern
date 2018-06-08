import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './examples/Home.vue'
import Example1 from './examples/Example-1.vue'
import Example2 from './examples/Example-2.vue'
import Example3 from './examples/Example-3.vue'
import Example4 from './examples/Example-4.vue'
import Example5 from './examples/Example-5.vue'
import Example6 from './examples/Example-6.vue'
import Example7 from './examples/Example-7.vue'

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

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
    },
    {
      path:'/2',
      name:'example2',
      component: Example2,
    },
    {
      path:'/3',
      name:'example3',
      component: Example3,
    },
    {
      path:'/4',
      name:'example4',
      component: Example4,
    },
    {
      path:'/5',
      name:'example5',
      component: Example5,
    },
    {
      path:'/6',
      name:'example6',
      component: Example6,
    },
    {
      path:'/7',
      name:'example7',
      component: Example7,
    },
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
