<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{ title: string; slug: string }>();
</script>

<template>
  <li>
    <div class="flex items-center">
      <slot></slot>
      <RouterLink
        :to="slug"
        class="ml-1 text-sm font-medium capitalize text-gray-700 line-clamp-1 hover:text-primary-600 md:ml-2"
      >
        {{ title }}
      </RouterLink>
    </div>
  </li>
</template>
