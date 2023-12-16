<script lang="ts">
export default {
  name: "Listings",
};
</script>

<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
import store from "../../store/index";
</script>

<template>
  <div>
    Listing
    <div>
      <RouterLink v-for="link in store.config.listingFilters" :to="link.url">
        {{ link.text }}
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>
