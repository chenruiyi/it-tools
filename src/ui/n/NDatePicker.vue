<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  value?: number | null
  type?: 'date' | 'datetime' | 'month' | 'year'
  disabled?: boolean
}>(), {
  value: null,
  type: 'datetime',
  disabled: false,
});

const emit = defineEmits<{
  'update:value': [value: number | null]
}>();

const inputType = computed(() => {
  switch (props.type) {
    case 'date': return 'date';
    case 'month': return 'month';
    case 'datetime': return 'datetime-local';
    default: return 'datetime-local';
  }
});

const displayValue = computed(() => {
  if (props.value === null || props.value === undefined) return '';
  const date = new Date(props.value);
  if (isNaN(date.getTime())) return '';

  if (props.type === 'date') {
    return date.toISOString().slice(0, 10);
  }
  if (props.type === 'month') {
    return date.toISOString().slice(0, 7);
  }
  // datetime-local needs format: YYYY-MM-DDTHH:MM
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60000);
  return local.toISOString().slice(0, 16);
});

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  if (!target.value) {
    emit('update:value', null);
    return;
  }
  const date = new Date(target.value);
  if (isNaN(date.getTime())) {
    emit('update:value', null);
    return;
  }
  emit('update:value', date.getTime());
}
</script>

<template>
  <div class="n-date-picker" :class="{ 'n-date-picker--disabled': disabled }">
    <input
      :type="inputType"
      class="n-date-picker__input"
      :value="displayValue"
      :disabled="disabled"
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.n-date-picker {
  display: inline-flex;
  width: 100%;
}

.n-date-picker__input {
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

.n-date-picker__input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.n-date-picker__input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

:root.dark .n-date-picker__input,
.dark .n-date-picker__input {
  background: #1e293b;
  border-color: #334155;
  color: #e2e8f0;
  color-scheme: dark;
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) .n-date-picker__input {
    background: #1e293b;
    border-color: #334155;
    color: #e2e8f0;
    color-scheme: dark;
  }
}
</style>
