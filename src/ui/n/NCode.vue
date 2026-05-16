<script setup lang="ts">
withDefaults(defineProps<{
  code?: string;
  language?: string;
}>(), {
  code: '',
  language: '',
});
</script>

<template>
  <pre class="n-code"><code :class="language ? `language-${language}` : ''">{{ code }}</code></pre>
</template>

<style scoped>
.n-code {
  margin: 0;
  padding: 14px 16px;
  border-radius: 8px;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  overflow-x: auto;
  font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono', Consolas, monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #1e293b;
}

:global(html.dark) .n-code {
  background-color: #1e293b;
  border-color: #334155;
  color: #e2e8f0;
}

.n-code code {
  font-family: inherit;
  font-size: inherit;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
