<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  labelPlacement?: 'top' | 'left'
}>(), {
  label: '',
  labelPlacement: 'top',
});
</script>

<template>
  <div class="n-form-item" :class="[`n-form-item--${labelPlacement}`]">
    <label v-if="label" class="n-form-item__label">{{ label }}</label>
    <div class="n-form-item__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.n-form-item {
  margin-bottom: 16px;
}

.n-form-item--top {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.n-form-item--left {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

.n-form-item__label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  line-height: 1.4;
}

.n-form-item__content {
  width: 100%;
}

:root.dark .n-form-item__label,
.dark .n-form-item__label {
  color: #cbd5e1;
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) .n-form-item__label {
    color: #cbd5e1;
  }
}
</style>
