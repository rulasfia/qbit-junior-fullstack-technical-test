<script setup lang="ts">
defineProps<{ recipes: string[] }>();
</script>

<template>
  <h5 class="mt-4 text-3xl">Recipes</h5>
  <ul
    class="my-3 grid list-inside list-disc grid-cols-1 text-gray-700 md:grid-cols-2"
  >
    <li v-for="recipe in recipes" v-bind:key="recipe">
      {{ recipe }}
    </li>
  </ul>
</template>
