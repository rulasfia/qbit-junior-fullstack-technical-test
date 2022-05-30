<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useGetBestMeal } from "@/composables/useGetBestMeal";
import LoadingSpinner from "../shared/LoadingSpinner.vue";

/** best meal data */
const bm1 = useGetBestMeal(52904);
const bm2 = useGetBestMeal(52839);
const bm3 = useGetBestMeal(52960);
</script>

<template>
  <section class="container relative mx-auto px-6 py-10 md:px-0 md:py-12">
    <h2 class="mb-6 text-center text-2xl font-bold">Our Best Menu</h2>
    <!-- loading -->
    <div v-if="!bm1.data && !bm2.data && !bm3.data" class="mx-auto w-full py-8">
      <LoadingSpinner />
    </div>

    <!-- success -->
    <div
      v-if="bm1.data && bm2.data && bm3.data"
      class="grid grid-cols-1 items-center justify-between divide-x-0 divide-y-2 md:grid-cols-3 md:divide-y-0 md:divide-x-2"
    >
      <!-- bm 1 -->
      <div class="flex flex-col items-center px-0 py-5 md:px-5 md:py-0">
        <img
          :src="bm1.data.value?.meals[0].strMealThumb"
          :alt="bm1.data.value?.meals[0].strMeal"
          class="mx-auto mb-4 h-auto w-3/4 rounded-lg md:w-full lg:w-3/4"
        />
        <RouterLink
          :to="`/food/chicken/${bm1.data.value?.meals[0].idMeal}`"
          class="text-center text-lg font-medium hover:text-primary-500"
        >
          {{ bm1.data.value?.meals[0].strMeal }}
        </RouterLink>
        <p class="mt text-center">
          {{ bm1.data.value?.meals[0].strArea }} Culinary
        </p>
      </div>
      <!-- bm 2 -->
      <div class="flex flex-col items-center px-0 py-5 md:px-5 md:py-0">
        <img
          :src="bm2.data.value?.meals[0].strMealThumb"
          :alt="bm2.data.value?.meals[0].strMeal"
          class="mx-auto mb-4 h-auto w-3/4 rounded-lg md:w-full lg:w-3/4"
        />
        <RouterLink
          :to="`/food/chicken/${bm2.data.value?.meals[0].idMeal}`"
          class="text-center text-lg font-medium hover:text-primary-500"
        >
          {{ bm2.data.value?.meals[0].strMeal }}
        </RouterLink>
        <p class="mt text-center">
          {{ bm2.data.value?.meals[0].strArea }} Culinary
        </p>
      </div>
      <!-- bm 3 -->
      <div class="flex flex-col items-center px-0 py-5 md:px-5 md:py-0">
        <img
          :src="bm3.data.value?.meals[0].strMealThumb"
          :alt="bm3.data.value?.meals[0].strMeal"
          class="mx-auto mb-4 h-auto w-3/4 rounded-lg md:w-full lg:w-3/4"
        />
        <RouterLink
          :to="`/food/chicken/${bm3.data.value?.meals[0].idMeal}`"
          class="text-center text-lg font-medium hover:text-primary-500"
        >
          {{ bm3.data.value?.meals[0].strMeal }}
        </RouterLink>
        <p class="mt text-center">
          {{ bm3.data.value?.meals[0].strArea }} Culinary
        </p>
      </div>
    </div>
  </section>
</template>
