<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  cols?: string | number;
  xGap?: string | number;
  yGap?: string | number;
  responsive?: string;
}>(), {
  cols: 1,
  xGap: 0,
  yGap: 0,
  responsive: 'self',
});

const columnCount = computed(() => {
  const cols = props.cols;
  if (typeof cols === 'number') {
    return cols;
  }
  // Parse responsive format like "1 m:2 l:3"
  const parts = String(cols).trim().split(/\s+/);
  let maxCols = 1;
  for (const part of parts) {
    const val = part.includes(':') ? Number(part.split(':')[1]) : Number(part);
    if (!isNaN(val) && val > maxCols) {
      maxCols = val;
    }
  }
  return maxCols;
});

const gridStyle = computed(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columnCount.value}, minmax(0, 1fr))`,
  columnGap: `${props.xGap}px`,
  rowGap: `${props.yGap}px`,
}));
</script>

<template>
  <div class="n-grid" :style="gridStyle">
    <slot />
  </div>
</template>

<style scoped>
.n-grid {
  width: 100%;
}
</style>
