<script setup lang="ts">
import { RouterLink } from "vue-router";
import clsx from "clsx";
import type { Category } from "@/utils/types/FoodCategoryTypes";
import type { Meal } from "@/utils/types/MealTypes";
import { useFoodCardData } from "@/composables/useFoodCardData";

const { data } = defineProps<{ data: Category[] | Meal[] }>();

const { properties } = useFoodCardData(data);
</script>

<template>
  <RouterLink
    v-for="item in properties"
    :to="item.link"
    v-bind:key="item.id"
    class="relative flex cursor-pointer flex-row items-center justify-between gap-4 overflow-hidden rounded-lg"
  >
    <img
      :src="item.imgSrc"
      :alt="item.title"
      :loading="'idMeal' in item ? 'lazy' : 'auto'"
      :class="
        clsx(
          'w-full rounded-lg object-cover',
          item.type === 'meal' ? 'h-28 md:h-36' : 'h-36 md:h-28'
        )
      "
    />
    <div
      class="absolute flex h-full w-full flex-row items-center justify-center bg-black bg-opacity-50 p-4 text-center transition duration-75 ease-in hover:bg-opacity-60"
    >
      <h4 class="text-center text-xl font-semibold tracking-tight text-white">
        {{ item.title }}
      </h4>
    </div>
  </RouterLink>
</template>
