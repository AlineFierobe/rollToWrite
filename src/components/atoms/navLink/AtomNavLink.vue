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

let atomClass = "a-navLink";
</script>

<template>
  <RouterLink :to="url" :class="atomClass">
    <font-awesome-icon
      :icon="['fas', icon]"
      :class="[atomClass + '__icon', extraClasses]"
    />
    <span :class="[atomClass + '__text', extraClasses]">{{ text }}</span>
  </RouterLink>
</template>

<style scoped lang="scss">
@import "./navLink.scss";
</style>
