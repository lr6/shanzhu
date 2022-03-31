import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import('../views/Home')
const About = () => import('../views/About')

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  export default router