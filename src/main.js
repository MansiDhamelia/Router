import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'



Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  {path: '/home', component: Home},
  {path: '/contact', component: Contact},
  {path: '/about', component: About}
]

const router = new VueRouter ({
  routes,
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')

