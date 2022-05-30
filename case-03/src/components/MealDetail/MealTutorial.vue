<script setup lang="ts">
defineProps<{ link: string }>();
</script>

<template>
  <h5 class="mt-6 text-center text-3xl">Tutorial</h5>
  <div class="my-3 md:px-8 lg:px-12">
    <iframe
      :src="link"
      frameborder="0"
      id="ytplayer"
      type="text/html"
      class="aspect-video w-full rounded-xl outline outline-1 outline-gray-300"
    ></iframe>
  </div>
</template>
