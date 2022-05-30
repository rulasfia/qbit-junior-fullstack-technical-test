<script setup lang="ts">
defineProps<{ instruction: string }>();
</script>

<template>
  <h5 class="text-3xl">Instruction</h5>
  <article
    v-for="para in instruction.split('\r\n')"
    v-bind:key="para"
    class="my-3 whitespace-pre-wrap break-words leading-relaxed text-gray-700"
  >
    {{ para }}
  </article>
</template>
