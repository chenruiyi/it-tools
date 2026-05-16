<script setup lang="ts">
withDefaults(defineProps<{
  label?: string;
  value?: string | number;
  tabularNums?: boolean;
}>(), {
  label: '',
  value: '',
  tabularNums: false,
});
</script>

<template>
  <div class="n-statistic">
    <div class="n-statistic__label">{{ label }}</div>
    <div class="n-statistic__value">
      <slot>{{ value }}</slot>
    </div>
  </div>
</template>

<style scoped>
.n-statistic {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.n-statistic__label {
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
}

:global(html.dark) .n-statistic__label {
  color: #94a3b8;
}

.n-statistic__value {
  font-size: 22px;
  font-weight: 600;
  color: #1e293b;
  font-variant-numeric: tabular-nums;
}

:global(html.dark) .n-statistic__value {
  color: #f1f5f9;
}
</style>
