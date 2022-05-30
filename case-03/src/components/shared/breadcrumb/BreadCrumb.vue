<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import HomeIcon from "@/components/shared/icons/HomeIcon.vue";
import ChevronRightIcon from "@/components/shared/icons/ChevronRightIcon.vue";
import { useQuery } from "@/composables/useQuery";
import BreadcrumbItem from "./BreadcrumbItem.vue";
import { getBreadcrumbUrl, getBreadcrumbTitle } from "@/utils/formatString";
import type { MealDetail } from "@/utils/types/MealTypes";

const { path, params } = useRoute();

const navItems = computed(() => path.split("/"));
const { data } = useQuery<MealDetail>(`/lookup.php?i=${params.mealId}`);
</script>

<template>
  <nav class="my-4 flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <BreadcrumbItem
        v-for="item in navItems"
        v-bind:key="item"
        :title="getBreadcrumbTitle(item, navItems, params.mealId as string, data)"
        :slug="getBreadcrumbUrl(item, navItems)"
      >
        <HomeIcon v-if="item === ''" class="h-4 w-4 text-gray-800" />
        <ChevronRightIcon v-else class="h-6 w-6 text-gray-400" />
      </BreadcrumbItem>
    </ol>
  </nav>
</template>
