<script setup lang="ts">
import { useRoute } from "vue-router";
import LoadingSpinner from "@/components/shared/LoadingSpinner.vue";
import DangerAlert from "@/components/shared/alert/DangerAlert.vue";
import BreadCrumb from "@/components/shared/breadcrumb/BreadCrumb.vue";
import MealData from "@/components/MealDetail/MealData.vue";
import { useQuery } from "@/composables/useQuery";
import type { MealDetail } from "@/utils/types/MealTypes";

const { params } = useRoute();
const { data, error } = useQuery<MealDetail>(`/lookup.php?i=${params.mealId}`);
</script>

<template>
  <main class="container mx-auto md:px-8">
    <!-- loading state -->
    <div v-if="!data && !error" class="mx-auto w-full py-8">
      <LoadingSpinner />
    </div>
    <!-- error state -->
    <div v-if="!data && error" class="mx-auto w-full py-8">
      <DangerAlert
        :with-icon="true"
        :title="'Sorry!'"
        msg="there is something wrong."
      />
    </div>
    <!-- success state -->
    <div v-if="data">
      <div class="rounded-b-xl bg-gray-100 px-6 pt-20 pb-8 md:px-10 lg:px-20">
        <BreadCrumb />
        <h1 class="text-4xl font-bold">
          {{ data.meals[0].strMeal }}
        </h1>
        <p class="font-normal text-gray-700">
          {{ data.meals[0].strArea }} Culinary
        </p>
      </div>

      <MealData :data="data.meals[0]" />
    </div>
  </main>
</template>
