import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import MainContent from "../components/HomePage/HomeContent/MainContent.vue";
import AuthPage from '../views/AuthPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
        path:'/auth',
        component: AuthPage
    }
  ],
});

export default router;
