<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import ToastContainer from './components/ToastContainer.vue';
import { layouts } from './layouts';
import { useStyleStore } from './stores/style.store';

const route = useRoute();
const layout = computed(() => route?.meta?.layout ?? layouts.base);
const styleStore = useStyleStore();

const { locale } = useI18n();

syncRef(
  locale,
  useStorage('locale', locale),
);
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
  <ToastContainer />
</template>

<style>
:root {
  --primary-color: #6366f1;
  --primary-hover: #818cf8;
  --primary-pressed: #4f46e5;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --error-color: #f43f5e;
  --text-color: #1e293b;
  --text-muted: #64748b;
  --bg-color: #f8fafc;
  --surface-color: #ffffff;
  --border-color: #e2e8f0;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
}

html.dark {
  --primary-color: #818cf8;
  --primary-hover: #a5b4fc;
  --primary-pressed: #6366f1;
  --success-color: #34d399;
  --warning-color: #fbbf24;
  --error-color: #fb7185;
  --text-color: #f1f5f9;
  --text-muted: #94a3b8;
  --bg-color: #0f172a;
  --surface-color: #1e293b;
  --border-color: #334155;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
}

body {
  min-height: 100%;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  height: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

::selection {
  background-color: var(--primary-color);
  color: white;
}
</style>
