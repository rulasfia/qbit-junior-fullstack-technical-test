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
      path: "/food",
      name: "food",
      component: () => import("../views/FoodView.vue"),
    },
    {
      path: "/food/:category",
      name: "food-category-detail",
      component: () => import("../views/Food/FoodCategoryDetailView.vue"),
    },
    {
      path: "/food/:category/:mealId",
      name: "meal-detail",
      component: () => import("../views/Food/Meal/MealDetailView.vue"),
    },
    {
      path: "/ingredients",
      name: "ingredients",
      component: () => import("../views/IngredientsView.vue"),
    },
    {
      path: "/local-culinary",
      name: "local-culinary",
      component: () => import("../views/LocalCulinaryView.vue"),
    },
  ],
});

export default router;
