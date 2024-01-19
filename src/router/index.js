import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../views/Projects.vue'
import Contact from '../views/contact.vue'
import About from '../views/About.vue'
import Page404 from '../views/Page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'About', component: About , meta: { title: 'Portfolio E. Rousseau'}},
    {path: '/Projects', name: 'Projects', component: Projects , meta: { title: 'Mes projets'}},
    {path: '/Contact', name: 'Contact', component: Contact , meta: { title: 'Me contacter'}},
    {path: '/:pathMatch(.*)*', name:'Page404', component: Page404 , meta: { title: 'Page 404'}}
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

router.afterEach((to)=>{
  document.title = to.meta.title;
})

export default router
