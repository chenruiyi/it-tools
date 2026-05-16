<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  value?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
}>(), {
  value: 0,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
});

const emit = defineEmits<{
  'update:value': [value: number]
}>();

const fillPercent = computed(() => {
  const range = props.max - props.min;
  if (range === 0) return 0;
  return ((props.value - props.min) / range) * 100;
});

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:value', parseFloat(target.value));
}
</script>

<template>
  <div class="n-slider" :class="{ 'n-slider--disabled': disabled }">
    <input
      type="range"
      class="n-slider__input"
      :value="value"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :style="{ '--fill': fillPercent + '%' }"
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.n-slider {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0;
}

.n-slider--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.n-slider__input {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(
    to right,
    #6366f1 0%,
    #6366f1 var(--fill, 0%),
    #e2e8f0 var(--fill, 0%),
    #e2e8f0 100%
  );
  outline: none;
  cursor: pointer;
}

.n-slider--disabled .n-slider__input {
  cursor: not-allowed;
}

.n-slider__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #6366f1;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: transform 0.15s;
}

.n-slider__input::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}

.n-slider__input::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #6366f1;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.n-slider__input:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

:root.dark .n-slider__input,
.dark .n-slider__input {
  background: linear-gradient(
    to right,
    #6366f1 0%,
    #6366f1 var(--fill, 0%),
    #334155 var(--fill, 0%),
    #334155 100%
  );
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) .n-slider__input {
    background: linear-gradient(
      to right,
      #6366f1 0%,
      #6366f1 var(--fill, 0%),
      #334155 var(--fill, 0%),
      #334155 100%
    );
  }
}
</style>
