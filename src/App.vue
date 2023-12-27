<script setup lang="ts">
import { RouterView } from "vue-router";
import OrganismHeader from "./components/organisms/header/OrganismHeader.vue";
import OrganismFooter from "./components/organisms/footer/OrganismFooter.vue";
</script>

<template>
  <OrganismHeader />

  <main>
    <RouterView />
  </main>

  <OrganismFooter />
</template>

<style lang="scss">
@import "./assets/colorsPalette/_colors";

#app {
  @apply bg-[--neutral3] text-[--neutral6];
  @apply min-h-screen;
  @apply flex flex-col-reverse justify-between;
  @apply lg:grid lg:grid-rows-[auto_1fr_auto] lg:justify-stretch;

  main {
    @apply grow;
  }

  * {
    @apply outline-[--semantic3];
    @apply focus:outline-double focus:outline-2 focus:outline-offset-2;
  }
}
</style>
