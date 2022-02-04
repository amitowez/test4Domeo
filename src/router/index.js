import { createRouter, createWebHashHistory } from 'vue-router'
import ShowCase from '../pages/ShowCase.vue'


const routes = [
  { path: '/', redirect: '/showcase' },
  {path:'/showcase',
   name:'showcase',
   component: ShowCase,}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
