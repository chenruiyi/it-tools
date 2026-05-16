<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  vertical?: boolean;
  size?: number | string;
  align?: string;
  justify?: string;
}>(), {
  vertical: false,
  size: 8,
  align: '',
  justify: '',
});

const style = computed(() => {
  const gap = typeof props.size === 'number' ? `${props.size}px` : props.size;
  return {
    display: 'flex',
    flexDirection: props.vertical ? 'column' : 'row' as 'column' | 'row',
    gap,
    alignItems: props.align || (props.vertical ? 'stretch' : 'center'),
    justifyContent: props.justify || 'flex-start',
    flexWrap: props.vertical ? undefined : 'wrap' as 'wrap' | undefined,
  };
});
</script>

<template>
  <div class="n-space" :style="style">
    <slot />
  </div>
</template>

<style scoped>
.n-space {
  width: 100%;
}
</style>
