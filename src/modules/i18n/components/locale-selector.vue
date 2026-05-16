<script setup lang="ts">
const { locale } = useI18n();

function toggle() {
  locale.value = locale.value === 'en' ? 'zh' : 'en';
}

const label = computed(() => locale.value === 'zh' ? 'EN' : '中文');
</script>

<template>
  <c-button variant="text" size="small" round @click="toggle">
    {{ label }}
  </c-button>
</template>
