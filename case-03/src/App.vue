<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationBar from "./components/shared/NavigationBar.vue";
import LoadingSpinner from "./components/shared/LoadingSpinner.vue";
</script>

<template>
  <NavigationBar />
  <div class="scroll-smooth font-sans text-gray-900 antialiased">
    <Suspense>
      <RouterView />

      <template #fallback>
        <LoadingSpinner />
      </template>
    </Suspense>
  </div>
</template>

<style></style>
