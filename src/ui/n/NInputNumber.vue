<script setup lang="ts">
const props = withDefaults(defineProps<{
  value?: number | null
  min?: number
  max?: number
  step?: number
  placeholder?: string
  disabled?: boolean
}>(), {
  value: null,
  step: 1,
  placeholder: '',
  disabled: false,
});

const emit = defineEmits<{
  'update:value': [value: number | null]
}>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  const raw = target.value;
  if (raw === '') {
    emit('update:value', null);
    return;
  }
  let num = parseFloat(raw);
  if (isNaN(num)) {
    emit('update:value', null);
    return;
  }
  if (props.min !== undefined && num < props.min) num = props.min;
  if (props.max !== undefined && num > props.max) num = props.max;
  emit('update:value', num);
}
</script>

<template>
  <div class="n-input-number" :class="{ 'n-input-number--disabled': disabled }">
    <input
      type="number"
      class="n-input-number__input"
      :value="value ?? ''"
      :min="min"
      :max="max"
      :step="step"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.n-input-number {
  display: inline-flex;
  width: 100%;
}

.n-input-number__input {
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #ffffff;
  color: #1e293b;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.n-input-number__input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.n-input-number__input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.n-input-number__input::placeholder {
  color: #94a3b8;
}

:root.dark .n-input-number__input,
.dark .n-input-number__input {
  background: #1e293b;
  border-color: #334155;
  color: #e2e8f0;
}

:root.dark .n-input-number__input::placeholder,
.dark .n-input-number__input::placeholder {
  color: #64748b;
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) .n-input-number__input {
    background: #1e293b;
    border-color: #334155;
    color: #e2e8f0;
  }
  :root:not(.light) .n-input-number__input::placeholder {
    color: #64748b;
  }
}
</style>
