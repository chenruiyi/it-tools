<script setup lang="ts">
const props = withDefaults(defineProps<{
  value?: any[]
  onCreate?: () => any
  min?: number
}>(), {
  value: () => [],
  min: 0,
});

const emit = defineEmits<{
  'update:value': [value: any[]]
}>();

function addItem() {
  const newItem = props.onCreate ? props.onCreate() : '';
  const newList = [...(props.value || []), newItem];
  emit('update:value', newList);
}

function removeItem(index: number) {
  if (props.min !== undefined && (props.value || []).length <= props.min) return;
  const newList = [...(props.value || [])];
  newList.splice(index, 1);
  emit('update:value', newList);
}
</script>

<template>
  <div class="n-dynamic-input">
    <div
      v-for="(item, index) in (value || [])"
      :key="index"
      class="n-dynamic-input__item"
    >
      <div class="n-dynamic-input__content">
        <slot :value="item" :index="index" />
      </div>
      <button
        type="button"
        class="n-dynamic-input__remove"
        :disabled="min !== undefined && (value || []).length <= min"
        @click="removeItem(index)"
        aria-label="Remove item"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M4 8h8" />
        </svg>
      </button>
    </div>
    <button
      type="button"
      class="n-dynamic-input__add"
      @click="addItem"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M8 4v8M4 8h8" />
      </svg>
      <span>Add</span>
    </button>
  </div>
</template>

<style scoped>
.n-dynamic-input {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.n-dynamic-input__item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.n-dynamic-input__content {
  flex: 1;
  min-width: 0;
}

.n-dynamic-input__remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #ffffff;
  color: #64748b;
  cursor: pointer;
  flex-shrink: 0;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.n-dynamic-input__remove:hover:not(:disabled) {
  color: #ef4444;
  border-color: #fecaca;
  background: #fef2f2;
}

.n-dynamic-input__remove:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.n-dynamic-input__add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px dashed #e2e8f0;
  border-radius: 8px;
  background: transparent;
  color: #6366f1;
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.n-dynamic-input__add:hover {
  border-color: #6366f1;
  background: rgba(99, 102, 241, 0.05);
}

:root.dark .n-dynamic-input__remove,
.dark .n-dynamic-input__remove {
  background: #1e293b;
  border-color: #334155;
  color: #94a3b8;
}

:root.dark .n-dynamic-input__remove:hover:not(:disabled),
.dark .n-dynamic-input__remove:hover:not(:disabled) {
  color: #ef4444;
  border-color: #7f1d1d;
  background: #1c1917;
}

:root.dark .n-dynamic-input__add,
.dark .n-dynamic-input__add {
  border-color: #334155;
  color: #818cf8;
}

:root.dark .n-dynamic-input__add:hover,
.dark .n-dynamic-input__add:hover {
  border-color: #6366f1;
  background: rgba(99, 102, 241, 0.1);
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) .n-dynamic-input__remove {
    background: #1e293b;
    border-color: #334155;
    color: #94a3b8;
  }
  :root:not(.light) .n-dynamic-input__remove:hover:not(:disabled) {
    color: #ef4444;
    border-color: #7f1d1d;
    background: #1c1917;
  }
  :root:not(.light) .n-dynamic-input__add {
    border-color: #334155;
    color: #818cf8;
  }
  :root:not(.light) .n-dynamic-input__add:hover {
    border-color: #6366f1;
    background: rgba(99, 102, 241, 0.1);
  }
}
</style>
