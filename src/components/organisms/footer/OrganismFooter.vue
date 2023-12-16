<script setup lang="ts">
import store from "@/store/index";

defineProps({
  title: String,
  url: String,
  devName: String,
});
</script>

<script lang="ts">
export default {
  name: "OrganismFooter",
};

let organismClass = "o-footer";
</script>

<template>
  <footer :class="organismClass">
    <h3 :class="organismClass + '__title'">{{ store.config.title }}</h3>
    <a
      :href="store.config.devWebsite"
      target="_blank"
      :class="organismClass + '__link'"
      >by {{ store.config.devName }}</a
    >
  </footer>
</template>

<style scoped lang="scss">
@import "./_footer";
</style>
