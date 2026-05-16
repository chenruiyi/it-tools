<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  src?: string;
  width?: string | number;
  height?: string | number;
  objectFit?: string;
}>(), {
  src: '',
  width: undefined,
  height: undefined,
  objectFit: 'cover',
});

const style = computed(() => ({
  width: props.width ? (typeof props.width === 'number' ? `${props.width}px` : props.width) : undefined,
  height: props.height ? (typeof props.height === 'number' ? `${props.height}px` : props.height) : undefined,
  objectFit: props.objectFit as any,
}));
</script>

<template>
  <img class="n-image" :src="src" :style="style">
</template>

<style scoped>
.n-image {
  border-radius: 8px;
  display: block;
  max-width: 100%;
}
</style>
