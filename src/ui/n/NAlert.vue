<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  showIcon?: boolean;
}>(), {
  type: 'info',
  title: '',
  showIcon: true,
});

const icons: Record<string, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕',
};

const typeColors: Record<string, { bg: string; border: string; icon: string }> = {
  info: { bg: '#eff6ff', border: '#bfdbfe', icon: '#3b82f6' },
  success: { bg: '#ecfdf5', border: '#a7f3d0', icon: '#10b981' },
  warning: { bg: '#fffbeb', border: '#fde68a', icon: '#f59e0b' },
  error: { bg: '#fff1f2', border: '#fecdd3', icon: '#f43f5e' },
};

const typeColorsDark: Record<string, { bg: string; border: string; icon: string }> = {
  info: { bg: '#172554', border: '#1e40af', icon: '#60a5fa' },
  success: { bg: '#022c22', border: '#065f46', icon: '#6ee7b7' },
  warning: { bg: '#451a03', border: '#92400e', icon: '#fbbf24' },
  error: { bg: '#4c0519', border: '#9f1239', icon: '#fda4af' },
};

const style = computed(() => {
  const c = typeColors[props.type] || typeColors.info;
  const d = typeColorsDark[props.type] || typeColorsDark.info;
  return {
    '--alert-bg': c.bg,
    '--alert-border': c.border,
    '--alert-icon': c.icon,
    '--alert-bg-dark': d.bg,
    '--alert-border-dark': d.border,
    '--alert-icon-dark': d.icon,
  };
});
</script>

<template>
  <div class="n-alert" :style="style">
    <div v-if="showIcon" class="n-alert__icon">{{ icons[type] }}</div>
    <div class="n-alert__content">
      <div v-if="title" class="n-alert__title">{{ title }}</div>
      <div v-if="$slots.default" class="n-alert__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.n-alert {
  display: flex;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--alert-border);
  background-color: var(--alert-bg);
  gap: 12px;
}

:global(html.dark) .n-alert {
  background-color: var(--alert-bg-dark);
  border-color: var(--alert-border-dark);
}

.n-alert__icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--alert-icon);
  margin-top: 1px;
}

:global(html.dark) .n-alert__icon {
  color: var(--alert-icon-dark);
}

.n-alert__content {
  flex: 1;
  min-width: 0;
}

.n-alert__title {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 4px;
}

:global(html.dark) .n-alert__title {
  color: #f1f5f9;
}

.n-alert__body {
  font-size: 14px;
  color: #475569;
  line-height: 1.5;
}

:global(html.dark) .n-alert__body {
  color: #cbd5e1;
}
</style>
