<script lang="ts">
export default {
  name: "AtomNavLink",
};
</script>

<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps({
  icon: String,
  url: String,
  text: String,
  extraClasses: String,
});

let organismClass = "a-navLink";
</script>

<template>
  <RouterLink :to="url">
    <font-awesome-icon
      :icon="['fas', icon]"
      :class="[organismClass + '__icon', extraClasses]"
    />
    <span :class="[organismClass + '__text', extraClasses]">{{ text }}</span>
  </RouterLink>
</template>

<style scoped lang="scss">
@import "./navLink.scss";
</style>
