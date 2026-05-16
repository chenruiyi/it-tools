<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  span?: number;
}>(), {
  span: 1,
});

const style = computed(() => ({
  gridColumn: `span ${props.span} / span ${props.span}`,
}));
</script>

<template>
  <div class="n-gi" :style="style">
    <slot />
  </div>
</template>

<style scoped>
.n-gi {
  min-width: 0;
}
</style>
