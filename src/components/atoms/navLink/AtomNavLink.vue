<script lang="ts">
export default {
  name: "AtomNavLink",
};
</script>

<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{
  icon: string;
  url: string;
  text: string;
  extraClasses?: string;
}>();

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
