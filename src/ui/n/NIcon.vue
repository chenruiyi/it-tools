<script setup lang="ts">
import { computed, type Component } from 'vue';

const props = withDefaults(defineProps<{
  size?: number | string
  component?: Component
}>(), {
  size: 24,
});

const iconSize = computed(() => {
  const s = typeof props.size === 'string' ? parseInt(props.size, 10) : props.size;
  return `${s}px`;
});
</script>

<template>
  <span class="n-icon" :style="{ fontSize: iconSize, width: iconSize, height: iconSize }">
    <component :is="component" v-if="component" />
    <slot v-else />
  </span>
</template>

<style scoped>
.n-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  vertical-align: middle;
}

.n-icon :deep(svg) {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
