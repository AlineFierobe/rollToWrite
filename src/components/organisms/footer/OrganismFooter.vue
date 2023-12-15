<script setup lang="ts">
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
    <h3>{{ title }}</h3>
    <a :href="url" target="_blank">by {{ devName }}</a>
  </footer>
</template>

<style scoped lang="scss">
@import "./_footer.scss";
</style>
