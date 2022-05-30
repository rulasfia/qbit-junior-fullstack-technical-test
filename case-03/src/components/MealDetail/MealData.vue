<script setup lang="ts">
import type { MealDetailProps } from "@/utils/types/MealTypes";
import { computed } from "vue";
import MealInstruction from "./MealInstruction.vue";
import MealRecipes from "./MealRecipes.vue";
import MealTutorial from "./MealTutorial.vue";

const { data } = defineProps<{ data: MealDetailProps }>();

const recipes = computed(() =>
  Object.keys(data)
    .filter((key) => key.includes("strIngredient"))
    // @ts-ignore: use string as object index (key)
    .map((key) => data[key])
    .filter((val) => val)
);
</script>

<template>
  <div class="my-6 px-6 md:px-10 lg:px-20">
    <div class="grid grid-cols-1 lg:grid-cols-5">
      <div class="order-1 col-span-1 mr-0 lg:-order-1 lg:col-span-3 lg:mr-8">
        <!-- instruction -->
        <MealInstruction :instruction="data.strInstructions" />
        <!-- recipe -->
        <MealRecipes :recipes="recipes" />
      </div>
      <img
        :src="data.strMealThumb"
        :alt="data.strMeal"
        loading="auto"
        class="-order-1 col-span-1 mb-4 w-full rounded-lg object-cover outline outline-1 outline-gray-300 lg:order-1 lg:col-span-2 lg:mb-0"
      />
    </div>
    <div>
      <!-- tutorial -->
      <MealTutorial :link="data.strYoutube.replace('watch?v=', 'embed/')" />
    </div>
  </div>
</template>
