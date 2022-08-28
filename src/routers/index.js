import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import HelperPage from '../views/HelperPage.vue'
import AuthSignUp from '../views/AuthSignUp.vue'
import AuthLoginPage from '../views/AuthLoginPage.vue'
import featuresPage from '../views/featuresPage.vue'
import AppPage from "../views/AppPage.vue"
import Inbox from '../views/InboxPage.vue'
import Today from '../views/Today.vue'
import Upcoming from '../views/Upcoming.vue'
import Filters from '../views/Filters.vue'
import OnBoardPage from '../views/OnBoardPage.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/features",
      component : featuresPage
    },
    {
        path:'/auth',
        component: HelperPage
    },
    {
      path: '/auth/signup',
      component: AuthSignUp
    },
    {
      path: '/auth/login',
      component: AuthLoginPage
    },
    {
      path : '/app',
      component : AppPage,
      children: [
        {
          path :'/project',
          component : Inbox  
        },
        {
          path : '/today',
          component : Today
        },
        {
          path : '/upcoming',
          component : Upcoming
        },
        {
          path : '/filters',
          component : Filters
        }
      ]
    },
    {
      path:'/app/onboard/use-case',
      component: OnBoardPage
    }
  ],
});

export default router;
