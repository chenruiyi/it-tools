<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  value?: string
  modes?: string[]
}>(), {
  value: '#000000',
});

const emit = defineEmits<{
  'update:value': [value: string]
}>();

const normalizedValue = computed(() => {
  const v = props.value || '#000000';
  // Ensure it's a valid hex for the color input (must be 7-char hex)
  if (/^#[0-9a-fA-F]{6}$/.test(v)) return v;
  if (/^#[0-9a-fA-F]{3}$/.test(v)) {
    const r = v[1], g = v[2], b = v[3];
    return `#${r}${r}${g}${g}${b}${b}`;
  }
  return v;
});

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:value', target.value);
}
</script>

<template>
  <div class="n-color-picker">
    <input
      type="color"
      class="n-color-picker__input"
      :value="normalizedValue"
      @input="onInput"
    />
    <span class="n-color-picker__value">{{ value }}</span>
  </div>
</template>

<style scoped>
.n-color-picker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #ffffff;
  width: 100%;
}

.n-color-picker__input {
  -webkit-appearance: none;
  appearance: none;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  background: none;
}

.n-color-picker__input::-webkit-color-swatch-wrapper {
  padding: 0;
}

.n-color-picker__input::-webkit-color-swatch {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.n-color-picker__input::-moz-color-swatch {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.n-color-picker__value {
  font-size: 14px;
  font-family: monospace;
  color: #374151;
}

:root.dark .n-color-picker,
.dark .n-color-picker {
  background: #1e293b;
  border-color: #334155;
}

:root.dark .n-color-picker__value,
.dark .n-color-picker__value {
  color: #cbd5e1;
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) .n-color-picker {
    background: #1e293b;
    border-color: #334155;
  }
  :root:not(.light) .n-color-picker__value {
    color: #cbd5e1;
  }
}
</style>
