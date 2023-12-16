<script lang="ts">
export default {
  name: "Button",
};
</script>

<script setup lang="ts">
import FontAwesome from "../fontAwesome/AtomFontAwesome.vue";

const props = defineProps<{
  extraClasses?: string | Array<string>;
  icon?: string;
  iconBeforeText?: boolean;
  iconSize?: string;
  text: string;
  variant?: string;
  version?: string;
}>();

let _atom_class = "a-button";
let _version = props.version ? "-" + props.version : "-alpha";
let _variant = props.variant ? "-" + props.variant : "-primary";
</script>

<template>
  <button :class="[_atom_class, _version, _variant, extraClasses]">
    <FontAwesome
      v-if="icon && iconBeforeText"
      :icon="icon"
      :size="iconSize"
      :extraClasses="_atom_class + '__icon'"
    />

    <span>{{ text }}</span>

    <FontAwesome
      v-if="icon && !iconBeforeText"
      :icon="icon"
      :size="iconSize"
      :extraClasses="_atom_class + '__icon'"
    />
  </button>
</template>

<style scoped lang="scss">
@import "./_button";
</style>
