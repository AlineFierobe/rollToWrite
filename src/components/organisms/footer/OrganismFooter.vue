<script lang="ts">
export default {
  name: "OrganismFooter",
};
</script>

<script setup lang="ts">
import store from "@/store/index";
import Typography from "../../atoms/typography/AtomTypography.vue";

defineProps({
  title: String,
  url: String,
  devName: String,
});

let organismClass = "o-footer";
</script>

<template>
  <footer :class="organismClass">
    <Typography
      :extraClasses="organismClass + '__title'"
      htmlTag="h3"
      :html="store.config.title"
    />
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
