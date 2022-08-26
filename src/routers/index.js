import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import HelperPage from '../views/HelperPage.vue'
import AuthSignUp from '../views/AuthSignUp.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
        path:'/auth',
        component: HelperPage
    },
    {
      path: '/auth/signup',
      component: AuthSignUp

    }
  ],
});

export default router;
