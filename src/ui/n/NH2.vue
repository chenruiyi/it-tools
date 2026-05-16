<script setup lang="ts">
</script>

<template>
  <h2 class="n-h2"><slot /></h2>
</template>

<style scoped>
.n-h2 {
  font-size: 22px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: #0f172a;
}

:global(html.dark) .n-h2 {
  color: #f1f5f9;
}
</style>
