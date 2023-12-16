<script lang="ts">
export default {
  name: "NavLink",
};
</script>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import FontAwesome from "../fontAwesome/AtomFontAwesome.vue";

const props = defineProps<{
  extraClasses?: string | Array<string>;
  icon?: string;
  size?: string;
  text: string;
  url: string;
}>();

let _atom_class = "a-navLink";
</script>

<template>
  <RouterLink :to="url" :class="[_atom_class, extraClasses]">
    <FontAwesome
      v-if="icon"
      :extraClasses="[
        _atom_class + '__icon',
        extraClasses ? extraClasses + '__icon' : '',
      ]"
      :icon="icon"
      :size="size"
    />
    <span
      :class="[
        _atom_class + '__text',
        extraClasses ? extraClasses + '__text' : '',
      ]"
    >
      {{ text }}
    </span>
  </RouterLink>
</template>
