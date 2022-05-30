<script setup lang="ts">
import ItemCard from "./ItemCard.vue";
import type { Category } from "@/utils/types/FoodCategoryTypes";
import type { Meal } from "@/utils/types/MealTypes";

defineProps<{ data: Category[] | Meal[] }>();
</script>

<template>
  <div
    class="my-6 grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3 md:px-10 lg:grid-cols-4 lg:px-20"
  >
    <ItemCard :data="data" />
  </div>
</template>
