<script setup lang="ts">
</script>

<template>
  <div class="n-table-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.n-table-wrapper {
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

:global(html.dark) .n-table-wrapper {
  border-color: #334155;
}

.n-table-wrapper :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.n-table-wrapper :deep(th),
.n-table-wrapper :deep(td) {
  padding: 10px 14px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

:global(html.dark) .n-table-wrapper :deep(th),
:global(html.dark) .n-table-wrapper :deep(td) {
  border-bottom-color: #334155;
}

.n-table-wrapper :deep(th) {
  font-weight: 600;
  background-color: #f8fafc;
  color: #334155;
}

:global(html.dark) .n-table-wrapper :deep(th) {
  background-color: #1e293b;
  color: #cbd5e1;
}

.n-table-wrapper :deep(tr:last-child td) {
  border-bottom: none;
}

.n-table-wrapper :deep(tr:hover td) {
  background-color: #f1f5f9;
}

:global(html.dark) .n-table-wrapper :deep(tr:hover td) {
  background-color: #1e293b;
}
</style>
