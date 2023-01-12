import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/travelNow',
      name: 'travelNow',
      // route level code-splitting
      // this generates a separate chunk (TravelNow.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TravelNow.vue')
    },
    {
      path: '/travelLater',
      name: 'travelLater',
      // route level code-splitting
      // this generates a separate chunk (TravelLater.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TravelLater.vue')
    }
  ],
});

export default router;
