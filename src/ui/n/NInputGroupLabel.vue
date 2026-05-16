<script setup lang="ts">
</script>

<template>
  <div class="n-input-group-label">
    <slot />
  </div>
</template>

<style scoped>
.n-input-group-label {
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 13px;
  font-weight: 600;
  color: #6366f1;
  background-color: #eef2ff;
  border: 1px solid #e2e8f0;
  white-space: nowrap;
  line-height: 1;
  letter-spacing: 0.01em;
}

:global(html.dark) .n-input-group-label {
  color: #a5b4fc;
  background-color: rgba(99, 102, 241, 0.1);
  border-color: #334155;
}
</style>
