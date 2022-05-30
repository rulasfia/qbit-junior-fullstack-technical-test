<script setup lang="ts">
import { RouterLink } from "vue-router";

const categories = ["Beef", " Chicken", " Seafood", " Dessert", " Vegan"];
</script>

<template>
  <section
    class="container relative mx-auto px-6 py-10 md:px-8 md:py-12 lg:px-12"
  >
    <div
      class="relative flex flex-col-reverse items-center justify-start gap-x-0 gap-y-6 md:flex-row md:items-start md:justify-between md:gap-x-6 md:gap-y-0"
    >
      <div class="w-full md:w-3/5 lg:w-1/2">
        <h2
          class="mb-3 pl-3 text-center text-xl font-bold md:text-left md:text-2xl"
        >
          Any Food Category That You Want!
        </h2>
        <p
          class="mb-5 pl-3 text-center text-sm text-gray-700 md:mb-8 md:text-left md:text-base"
        >
          We cover all your need with a ton of food category to chose from
        </p>
        <div class="flex flex-col justify-start">
          <RouterLink
            :to="`/food/${category.toLowerCase()}`"
            v-for="category in categories"
            v-bind:key="category"
            class="w-full rounded-md py-3 px-3 font-medium hover:bg-primary-100 md:w-3/5 lg:w-1/2"
          >
            {{ category }}
          </RouterLink>
          <RouterLink
            to="/food"
            class="w-full rounded-md py-3 px-3 font-medium hover:bg-primary-100 md:w-3/5 lg:w-1/2"
            >And many more...</RouterLink
          >
        </div>
      </div>

      <div
        class="flex w-9/12 flex-row justify-end px-0 md:w-3/5 md:pl-12 md:pr-0 lg:w-1/2 lg:pl-16 lg:pr-0"
      >
        <img
          class="relative rounded-lg"
          src="/images/any-food-category.jpg"
          alt="food-category-img"
        />
      </div>
    </div>
  </section>
</template>
