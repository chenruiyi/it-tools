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
  padding: 0 12px;
  font-size: 14px;
  color: #475569;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  white-space: nowrap;
  line-height: 1;
}

:global(html.dark) .n-input-group-label {
  color: #cbd5e1;
  background-color: #1e293b;
  border-color: #334155;
}
</style>
