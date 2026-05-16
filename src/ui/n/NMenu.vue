<script setup lang="ts">
withDefaults(defineProps<{
  options?: any[];
  value?: string;
}>(), {
  options: () => [],
  value: '',
});

defineEmits<{
  'update:value': [key: string];
}>();
</script>

<template>
  <nav class="n-menu">
    <slot />
  </nav>
</template>

<style scoped>
.n-menu {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
</style>
