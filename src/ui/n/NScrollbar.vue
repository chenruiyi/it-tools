<script setup lang="ts">
</script>

<template>
  <div class="n-scrollbar">
    <slot />
  </div>
</template>

<style scoped>
.n-scrollbar {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

:global(html.dark) .n-scrollbar {
  scrollbar-color: #475569 transparent;
}

.n-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.n-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.n-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 3px;
}

:global(html.dark) .n-scrollbar::-webkit-scrollbar-thumb {
  background-color: #475569;
}
</style>
