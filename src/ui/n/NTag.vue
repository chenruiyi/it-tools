<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  type?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'primary';
  round?: boolean;
  bordered?: boolean;
  size?: 'small' | 'medium' | 'large';
}>(), {
  type: 'default',
  round: false,
  bordered: true,
  size: 'medium',
});

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  default: { bg: '#f1f5f9', text: '#475569', border: '#e2e8f0' },
  primary: { bg: '#eef2ff', text: '#6366f1', border: '#c7d2fe' },
  success: { bg: '#ecfdf5', text: '#10b981', border: '#a7f3d0' },
  warning: { bg: '#fffbeb', text: '#d97706', border: '#fde68a' },
  error: { bg: '#fff1f2', text: '#f43f5e', border: '#fecdd3' },
  info: { bg: '#eff6ff', text: '#3b82f6', border: '#bfdbfe' },
};

const typeColorsDark: Record<string, { bg: string; text: string; border: string }> = {
  default: { bg: '#1e293b', text: '#94a3b8', border: '#334155' },
  primary: { bg: '#1e1b4b', text: '#a5b4fc', border: '#4338ca' },
  success: { bg: '#022c22', text: '#6ee7b7', border: '#065f46' },
  warning: { bg: '#451a03', text: '#fbbf24', border: '#92400e' },
  error: { bg: '#4c0519', text: '#fda4af', border: '#9f1239' },
  info: { bg: '#172554', text: '#93c5fd', border: '#1e40af' },
};

const sizeMap: Record<string, string> = {
  small: '22px',
  medium: '28px',
  large: '34px',
};

const style = computed(() => {
  const c = typeColors[props.type] || typeColors.default;
  return {
    '--tag-bg': c.bg,
    '--tag-text': c.text,
    '--tag-border': c.border,
    '--tag-bg-dark': (typeColorsDark[props.type] || typeColorsDark.default).bg,
    '--tag-text-dark': (typeColorsDark[props.type] || typeColorsDark.default).text,
    '--tag-border-dark': (typeColorsDark[props.type] || typeColorsDark.default).border,
    '--tag-height': sizeMap[props.size] || sizeMap.medium,
  };
});
</script>

<template>
  <span
    class="n-tag"
    :class="{ 'n-tag--round': round, 'n-tag--borderless': !bordered }"
    :style="style"
  >
    <slot />
  </span>
</template>

<style scoped>
.n-tag {
  display: inline-flex;
  align-items: center;
  height: var(--tag-height);
  padding: 0 10px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  background-color: var(--tag-bg);
  color: var(--tag-text);
  border: 1px solid var(--tag-border);
  white-space: nowrap;
  line-height: 1;
}

:global(html.dark) .n-tag {
  background-color: var(--tag-bg-dark);
  color: var(--tag-text-dark);
  border-color: var(--tag-border-dark);
}

.n-tag--round {
  border-radius: 999px;
}

.n-tag--borderless {
  border-color: transparent;
}
</style>
