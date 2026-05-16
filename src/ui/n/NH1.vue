<script setup lang="ts">
</script>

<template>
  <h1 class="n-h1"><slot /></h1>
</template>

<style scoped>
.n-h1 {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  color: #0f172a;
}

:global(html.dark) .n-h1 {
  color: #f1f5f9;
}
</style>
