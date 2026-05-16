<script setup lang="ts">
</script>

<template>
  <h3 class="n-h3"><slot /></h3>
</template>

<style scoped>
.n-h3 {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  color: #0f172a;
}

:global(html.dark) .n-h3 {
  color: #f1f5f9;
}
</style>
