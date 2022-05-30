<script setup lang="ts">
import type { Meals } from "@/utils/types/MealTypes";
import { RouterLink } from "vue-router";
import ArrowNarrowRightIcon from "@/components/shared/icons/ArrowNarrowRightIcon.vue";
import { useQuery } from "@/composables/useQuery";
import { useGetBestMeals } from "@/composables/useGetBestMeals";

const bestMeal1 = useQuery<MealDetail>(`/lookup.php?i=${52904}`);
const bestMeal2 = useQuery<MealDetail>(`/lookup.php?i=${52839}`);
const bestMeal3 = useQuery<MealDetail>(`/lookup.php?i=${52960}`);
</script>

<template>
  <section
    class="hero-section relative flex flex-col items-center justify-center py-44 text-center md:py-52"
  >
    <h1 class="text-5xl font-bold text-white">
      Welcome to <span class="font-logo text-primary-400">mealapp</span>
    </h1>
    <h5 class="mt-2 text-lg font-medium text-gray-200">
      Serving you the best taste and experience
    </h5>

    <RouterLink
      class="mt-4 flex w-fit flex-row items-center justify-center gap-3 rounded-lg bg-primary-400 px-6 py-3 hover:bg-primary-500"
      to="/food"
    >
      <span class="font-medium">see available menu</span>
      <ArrowNarrowRightIcon class="mt-0.5 h-5 w-5 text-gray-900" />
    </RouterLink>
  </section>

  <section>
    <h2>Our Best Menu</h2>
    <div
      class="grid grid-cols-1 items-center justify-between gap-y-4 gap-x-0 md:grid-cols-3 md:gap-y-0 md:gap-x-4"
    >
      <div></div>
    </div>
  </section>
</template>
