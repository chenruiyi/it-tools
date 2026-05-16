<script setup lang="ts">
withDefaults(defineProps<{
  show?: boolean;
}>(), {
  show: false,
});
</script>

<template>
  <div class="n-spin-container">
    <div v-if="show" class="n-spin-overlay">
      <div class="n-spin-indicator" />
    </div>
    <div class="n-spin-content" :class="{ 'n-spin-content--blur': show }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.n-spin-container {
  position: relative;
}

.n-spin-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
}

:global(html.dark) .n-spin-overlay {
  background-color: rgba(15, 23, 42, 0.6);
}

.n-spin-indicator {
  width: 28px;
  height: 28px;
  border: 3px solid #e2e8f0;
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: n-spin-rotate 0.8s linear infinite;
}

:global(html.dark) .n-spin-indicator {
  border-color: #334155;
  border-top-color: #818cf8;
}

.n-spin-content--blur {
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
}

@keyframes n-spin-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
