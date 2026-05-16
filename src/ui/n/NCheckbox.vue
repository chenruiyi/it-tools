<script setup lang="ts">
withDefaults(defineProps<{
  checked?: boolean
  disabled?: boolean
}>(), {
  checked: false,
  disabled: false,
});

const emit = defineEmits<{
  'update:checked': [value: boolean]
}>();

function toggle(current: boolean) {
  emit('update:checked', !current);
}
</script>

<template>
  <label
    class="n-checkbox"
    :class="{ 'n-checkbox--disabled': disabled, 'n-checkbox--checked': checked }"
  >
    <input
      type="checkbox"
      class="n-checkbox__input"
      :checked="checked"
      :disabled="disabled"
      @change="toggle(checked)"
    />
    <span class="n-checkbox__box">
      <svg
        v-if="checked"
        class="n-checkbox__check"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
      </svg>
    </span>
    <span class="n-checkbox__label" v-if="$slots.default">
      <slot />
    </span>
  </label>
</template>

<style scoped>
.n-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  color: #374151;
}

.n-checkbox--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.n-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.n-checkbox__box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  background: #ffffff;
  transition: background 0.2s, border-color 0.2s;
  flex-shrink: 0;
}

.n-checkbox--checked .n-checkbox__box {
  background: #6366f1;
  border-color: #6366f1;
}

.n-checkbox__check {
  width: 12px;
  height: 12px;
  color: #ffffff;
}

.n-checkbox__label {
  line-height: 1.4;
}

.n-checkbox__input:focus-visible + .n-checkbox__box {
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

:root.dark .n-checkbox,
.dark .n-checkbox {
  color: #cbd5e1;
}

:root.dark .n-checkbox__box,
.dark .n-checkbox__box {
  background: #1e293b;
  border-color: #334155;
}

:root.dark .n-checkbox--checked .n-checkbox__box,
.dark .n-checkbox--checked .n-checkbox__box {
  background: #6366f1;
  border-color: #6366f1;
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) .n-checkbox {
    color: #cbd5e1;
  }
  :root:not(.light) .n-checkbox__box {
    background: #1e293b;
    border-color: #334155;
  }
  :root:not(.light) .n-checkbox--checked .n-checkbox__box {
    background: #6366f1;
    border-color: #6366f1;
  }
}
</style>
