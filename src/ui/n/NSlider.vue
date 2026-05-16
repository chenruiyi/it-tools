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
  padding: 8px 0;
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
  transition: height 0.15s;
}

.n-slider--disabled .n-slider__input {
  cursor: not-allowed;
}

.n-slider__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #6366f1;
  box-shadow: 0 2px 6px rgba(99, 102, 241, 0.2);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease;
}

.n-slider__input::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.3);
}

.n-slider__input:active::-webkit-slider-thumb {
  transform: scale(1.05);
}

.n-slider__input::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #6366f1;
  box-shadow: 0 2px 6px rgba(99, 102, 241, 0.2);
  cursor: pointer;
}

.n-slider__input:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
}

:global(html.dark) .n-slider__input {
  background: linear-gradient(
    to right,
    #818cf8 0%,
    #818cf8 var(--fill, 0%),
    #334155 var(--fill, 0%),
    #334155 100%
  );
}

:global(html.dark) .n-slider__input::-webkit-slider-thumb {
  border-color: #818cf8;
  box-shadow: 0 2px 6px rgba(129, 140, 248, 0.25);
}
</style>
