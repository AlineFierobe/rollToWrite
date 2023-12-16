<script lang="ts">
export default {
  name: "AtomFontAwesome",
};
</script>

<script setup lang="ts">
const props = defineProps<{
  icon: string;
  size?: string;
  variant?: string;
  extraClasses?: Array<string>;
}>();

let _atom_class = "a-fontAwesome";
let _size = props.size ? props.size : "1x";
let _variant = props.variant ? props.variant : "fas";
</script>

<template>
  <font-awesome-icon
    :icon="[_variant, icon]"
    :class="[_atom_class, extraClasses]"
    :size="_size"
  />
</template>

<style scoped lang="scss"></style>
