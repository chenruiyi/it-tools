<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  type?: 'line' | 'circle';
  percentage?: number;
  status?: string;
}>(), {
  type: 'line',
  percentage: 0,
  status: '',
});

const statusColors: Record<string, string> = {
  success: '#10b981',
  warning: '#f59e0b',
  error: '#f43f5e',
};

const barColor = computed(() => statusColors[props.status] || '#6366f1');
const clampedPercentage = computed(() => Math.min(100, Math.max(0, props.percentage)));

const circleRadius = 40;
const circleStroke = 6;
const circumference = 2 * Math.PI * circleRadius;
const dashOffset = computed(() => circumference * (1 - clampedPercentage.value / 100));
</script>

<template>
  <div v-if="type === 'line'" class="n-progress n-progress--line">
    <div class="n-progress__rail">
      <div
        class="n-progress__fill"
        :style="{ width: `${clampedPercentage}%`, backgroundColor: barColor }"
      />
    </div>
  </div>
  <div v-else class="n-progress n-progress--circle">
    <svg viewBox="0 0 100 100" class="n-progress__svg">
      <circle
        class="n-progress__track"
        cx="50"
        cy="50"
        :r="circleRadius"
        fill="none"
        :stroke-width="circleStroke"
      />
      <circle
        class="n-progress__indicator"
        cx="50"
        cy="50"
        :r="circleRadius"
        fill="none"
        :stroke-width="circleStroke"
        :stroke="barColor"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        stroke-linecap="round"
      />
    </svg>
    <span class="n-progress__text">{{ clampedPercentage }}%</span>
  </div>
</template>

<style scoped>
.n-progress--line {
  width: 100%;
}

.n-progress__rail {
  height: 8px;
  border-radius: 4px;
  background-color: #e2e8f0;
  overflow: hidden;
}

:global(html.dark) .n-progress__rail {
  background-color: #334155;
}

.n-progress__fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.n-progress--circle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.n-progress__svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.n-progress__track {
  stroke: #e2e8f0;
}

:global(html.dark) .n-progress__track {
  stroke: #334155;
}

.n-progress__indicator {
  transition: stroke-dashoffset 0.3s ease;
}

.n-progress__text {
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  color: #475569;
}

:global(html.dark) .n-progress__text {
  color: #cbd5e1;
}
</style>
