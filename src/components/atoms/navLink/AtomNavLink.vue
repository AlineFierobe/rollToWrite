<script lang="ts">
export default {
  name: "NavLink",
};
</script>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import FontAwesome from "../fontAwesome/AtomFontAwesome.vue";

defineProps<{
  icon?: string;
  url: string;
  text: string;
  size?: string;
  extraClasses?: string | Array<string>;
}>();

let _atom_class = "a-navLink";
</script>

<template>
  <RouterLink :to="url" :class="[_atom_class, extraClasses]">
    <FontAwesome
      v-if="icon"
      :extraClasses="extraClasses + '__icon'"
      :icon="icon"
      :size="size"
    />
    <span :class="[_atom_class + '__text', extraClasses + '__text']">
      {{ text }}
    </span>
  </RouterLink>
</template>

<style scoped lang="scss">
@import "./_navLink";
</style>
