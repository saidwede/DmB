import { createRouter, createWebHistory } from 'vue-router'
import { useAuthUserStore } from '@/stores/authUser'
import HomeView from '../views/HomeView.vue'
import HomeMasterLayout from '../components/HomeMasterLayout.vue'
import AppMasterLayout from '../components/AppMasterLayout.vue'
import LibraryView from '../views/app/LibraryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeMasterLayout,
      children:[
        {path: '/',
        component: HomeView}
      ]
    },
    {
      path: '/app/',
      name: 'app',
      component: AppMasterLayout,
      beforeEnter: (to, from) => {
        const userState = useAuthUserStore()
        if(!userState.user){
          console.log(userState.user)
          return {name: "connexion"}
        }else{
          return true
        }
      },
      children:[
        {path: '',
        component: LibraryView},
        {path: 'abonement',
        component: () => import('../views/app/SubscriptionView.vue')},
        {path: 'profile',
        component: () => import('../views/app/ProfileView.vue')},
        {path: 'parametre-compte',
        component: () => import('../views/app/AccountView.vue')}
      ]
    },
    {
      path: '/connexion',
      beforeEnter: (to, from) => {
        const userState = useAuthUserStore()
        if(userState.user.value){
          return {path: "/app/"}
        }else{
          return true
        }
      },
      name: 'connexion',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/inscription',
      name: 'inscription',
      beforeEnter: (to, from) => {
        const userState = useAuthUserStore()
        if(userState.user){
          return {path: "/app/"}
        }else{
          return true
        }
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})
// router.beforeEach(async (to, from) => {
//   const user = useAuthUserStore()
//   return true
// })

export default router
