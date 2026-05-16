<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  type?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  disabled?: boolean;
  circle?: boolean;
  size?: 'tiny' | 'small' | 'medium' | 'large';
  ghost?: boolean;
  text?: boolean;
  quaternary?: boolean;
  loading?: boolean;
  tag?: string;
}>(), {
  type: 'default',
  disabled: false,
  circle: false,
  size: 'medium',
  ghost: false,
  text: false,
  quaternary: false,
  loading: false,
  tag: 'button',
});

const emit = defineEmits<{
  click: [e: MouseEvent];
}>();

const solidColors: Record<string, { bg: string; hover: string; text: string }> = {
  default: { bg: '#f1f5f9', hover: '#e2e8f0', text: '#475569' },
  primary: { bg: '#6366f1', hover: '#4f46e5', text: '#ffffff' },
  success: { bg: '#10b981', hover: '#059669', text: '#ffffff' },
  warning: { bg: '#f59e0b', hover: '#d97706', text: '#ffffff' },
  error: { bg: '#f43f5e', hover: '#e11d48', text: '#ffffff' },
  info: { bg: '#3b82f6', hover: '#2563eb', text: '#ffffff' },
};

const sizeMap: Record<string, { height: string; padding: string; font: string }> = {
  tiny: { height: '26px', padding: '0 8px', font: '12px' },
  small: { height: '30px', padding: '0 10px', font: '13px' },
  medium: { height: '36px', padding: '0 14px', font: '14px' },
  large: { height: '42px', padding: '0 18px', font: '15px' },
};

const style = computed(() => {
  const s = sizeMap[props.size] || sizeMap.medium;
  const c = solidColors[props.type] || solidColors.default;

  const base: Record<string, string> = {
    '--btn-height': s.height,
    '--btn-padding': props.circle ? '0' : s.padding,
    '--btn-font': s.font,
    '--btn-bg': c.bg,
    '--btn-hover': c.hover,
    '--btn-text': c.text,
  };

  if (props.circle) {
    base['--btn-width'] = s.height;
  }

  if (props.ghost || props.text || props.quaternary) {
    base['--btn-bg'] = 'transparent';
    base['--btn-text'] = c.bg === '#f1f5f9' ? '#475569' : c.bg;
    base['--btn-hover'] = props.text ? 'transparent' : (c.bg === '#f1f5f9' ? '#f1f5f9' : `${c.bg}18`);
  }

  return base;
});

function handleClick(e: MouseEvent) {
  if (!props.disabled && !props.loading) {
    emit('click', e);
  }
}
</script>

<template>
  <component
    :is="tag"
    class="n-button"
    :class="{
      'n-button--circle': circle,
      'n-button--disabled': disabled,
      'n-button--loading': loading,
      'n-button--text': text,
      'n-button--ghost': ghost,
      'n-button--quaternary': quaternary,
    }"
    :style="style"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="n-button__spinner" />
    <slot />
  </component>
</template>

<style scoped>
.n-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: var(--btn-height);
  padding: var(--btn-padding);
  font-size: var(--btn-font);
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background-color: var(--btn-bg);
  color: var(--btn-text);
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: background-color 0.2s, opacity 0.2s;
  outline: none;
  text-decoration: none;
  line-height: 1;
}

.n-button:hover:not(.n-button--disabled) {
  background-color: var(--btn-hover);
}

.n-button:active:not(.n-button--disabled) {
  opacity: 0.85;
}

.n-button--circle {
  width: var(--btn-width);
  border-radius: 50%;
  padding: 0;
}

.n-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.n-button--loading {
  cursor: wait;
}

.n-button--text {
  border: none;
  background: transparent;
}

.n-button--text:hover:not(.n-button--disabled) {
  opacity: 0.7;
}

.n-button--ghost {
  border: 1px solid currentColor;
}

:global(html.dark) .n-button {
  opacity: 0.95;
}

.n-button__spinner {
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: n-btn-spin 0.6s linear infinite;
}

@keyframes n-btn-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
