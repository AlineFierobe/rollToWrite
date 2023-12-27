<script lang="ts">
export default {
  name: "Link",
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
  url: string;
  variant?: string;
  version?: string;
}>();

let _atom_class = "a-link";
let _version = props.version ? "-" + props.version : "-alpha";
let _variant = props.variant ? "-" + props.variant : "-primary";
</script>

<template>
  <a
    :href="url"
    :class="[_atom_class, _version, _variant, extraClasses]"
    target="_blank"
    :title="text"
  >
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
  </a>
</template>

<style scoped lang="scss">
@import "./_link";
</style>
