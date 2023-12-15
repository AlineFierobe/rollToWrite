<script setup lang="ts">
import { RouterView } from "vue-router";
import OrganismHeader from "./components/organisms/header/OrganismHeader.vue";
import OrganismFooter from "./components/organisms/footer/OrganismFooter.vue";
</script>

<template>
  <OrganismHeader title="Roll To Write" />

  <main>
    <RouterView />
  </main>

  <OrganismFooter
    title="Roll To Write"
    devName="Aline Fierobe"
    url="www.alinefierobe.com"
  />
</template>

<style lang="scss">
#app {
  @apply min-h-screen;
  @apply grid grid-rows-[auto_1fr_auto];
}
</style>
