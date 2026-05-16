<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  labelPlacement?: 'top' | 'left'
  labelWidth?: string | number
}>(), {
  label: '',
  labelPlacement: 'top',
  labelWidth: 'auto',
});
</script>

<template>
  <div class="n-form-item" :class="[`n-form-item--${labelPlacement}`]">
    <label
      v-if="label"
      class="n-form-item__label"
      :style="labelPlacement === 'left' && labelWidth !== 'auto' ? { flex: `0 0 ${typeof labelWidth === 'number' ? labelWidth + 'px' : labelWidth}` } : undefined"
    >
      {{ label }}
    </label>
    <div class="n-form-item__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.n-form-item {
  margin-bottom: 20px;
}

.n-form-item:last-child {
  margin-bottom: 0;
}

.n-form-item--top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.n-form-item--left {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.n-form-item__label {
  font-size: 14px;
  font-weight: 500;
  color: #475569;
  line-height: 1.4;
  white-space: nowrap;
}

.n-form-item__content {
  width: 100%;
  min-width: 0;
}

:global(html.dark) .n-form-item__label {
  color: #94a3b8;
}
</style>
