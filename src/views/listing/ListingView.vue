<script lang="ts">
export default {
  name: "Listings",
};
</script>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    Listing
    <div>
      <a href="/listings/words">Words</a>
    </div>
    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>
