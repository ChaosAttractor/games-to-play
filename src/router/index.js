import { createRouter, createWebHistory } from 'vue-router'
import staticRoutes from './staticRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes
})

/**
 * setup page title
 */
router.afterEach((to, _, next) => {
  if (to.meta.title) {
    const appTitle = 'GTP'
    document.title = `${to.meta.title} - ${appTitle}`
  }
  next()
})

export default router
