<script setup lang="ts">
import ExclamationIcon from "@/components/shared/icons/ExclamationIcon.vue";
defineProps<{ msg: string; title?: string; withIcon?: boolean }>();
</script>

<template>
  <div
    class="mb-4 flex flex-row items-center gap-3 rounded-lg bg-red-100 p-4 text-sm text-red-700 dark:bg-red-200 dark:text-red-800"
    role="alert"
  >
    <ExclamationIcon v-if="withIcon" class="h-5 w-5" />
    <span>
      <span class="font-semibold">{{ title }}</span> {{ msg }}
    </span>
  </div>
</template>
