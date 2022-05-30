<script setup lang="ts">
import { ref } from "vue";
import clsx from "clsx";
import { RouterLink } from "vue-router";
import MenuIcon from "@/components/shared/icons/MenuIcon.vue";

const NavMenu = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Food",
    slug: "/food",
  },
  {
    title: "Ingredients",
    slug: "/ingredients",
  },
  {
    title: "Local Culinary",
    slug: "/local-culinary",
  },
];

const showMenu = ref(false);
const toggleMenu = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <div
    class="sticky top-0 z-20 flex h-20 flex-row items-center border-b border-b-gray-300 bg-white"
  >
    <nav
      class="container mx-auto flex flex-row items-center justify-between px-4 md:px-12"
    >
      <RouterLink
        to="/"
        class="rounded text-3xl font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600"
      >
        <h1 class="font-logo">mealapp</h1>
      </RouterLink>

      <MenuIcon
        @click="toggleMenu"
        class="h-8 w-8 rounded p-0.5 text-gray-600 outline outline-1 outline-gray-300 md:hidden"
      />

      <div
        :class="
          clsx(
            'absolute top-20 left-0 flex-col justify-end gap-1 border-b border-b-gray-300 bg-white p-4 md:relative md:top-0 md:left-0 md:mt-0 md:flex-row md:gap-6 md:border-b-0 md:bg-transparent md:p-0',
            showMenu ? 'flex w-full md:flex ' : 'hidden md:flex'
          )
        "
      >
        <RouterLink
          v-for="menu in NavMenu"
          v-bind:key="menu.slug"
          :to="menu.slug"
          class="rounded-md border-transparent p-3 text-base font-medium text-gray-700 hover:border-b-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-600 md:rounded-none md:border-b-2 md:py-1.5 md:px-2.5"
        >
          {{ menu.title }}
        </RouterLink>
      </div>
    </nav>
  </div>
</template>
