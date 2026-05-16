<script setup lang="ts">
</script>

<template>
  <div class="n-input-group">
    <slot />
  </div>
</template>

<style scoped>
.n-input-group {
  display: flex;
  width: 100%;
}

.n-input-group :deep(> *) {
  border-radius: 0;
}

.n-input-group :deep(> *:first-child) {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.n-input-group :deep(> *:last-child) {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.n-input-group :deep(> * + *) {
  margin-left: -1px;
}
</style>
