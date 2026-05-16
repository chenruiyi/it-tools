<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  lineClamp?: number;
}>(), {
  lineClamp: 1,
});

const style = computed(() => {
  if (props.lineClamp === 1) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap' as const,
    };
  }
  return {
    display: '-webkit-box',
    WebkitLineClamp: props.lineClamp,
    WebkitBoxOrient: 'vertical' as const,
    overflow: 'hidden',
  };
});
</script>

<template>
  <span class="n-ellipsis" :style="style">
    <slot />
  </span>
</template>

<style scoped>
.n-ellipsis {
  display: block;
  min-width: 0;
}
</style>
