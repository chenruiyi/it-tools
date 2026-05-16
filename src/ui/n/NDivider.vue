<script setup lang="ts">
withDefaults(defineProps<{
  vertical?: boolean;
  titlePlacement?: 'left' | 'center' | 'right';
}>(), {
  vertical: false,
  titlePlacement: 'center',
});
</script>

<template>
  <div v-if="vertical" class="n-divider n-divider--vertical" />
  <div v-else class="n-divider n-divider--horizontal" :class="`n-divider--title-${titlePlacement}`">
    <div class="n-divider__line n-divider__line--left" />
    <div v-if="$slots.default" class="n-divider__title">
      <slot />
    </div>
    <div class="n-divider__line n-divider__line--right" />
  </div>
</template>

<style scoped>
.n-divider--horizontal {
  display: flex;
  align-items: center;
  margin: 16px 0;
}

.n-divider__line {
  flex: 1;
  height: 1px;
  background-color: #e2e8f0;
}

:global(html.dark) .n-divider__line {
  background-color: #334155;
}

.n-divider--title-left .n-divider__line--left {
  flex: 0 0 24px;
}

.n-divider--title-right .n-divider__line--right {
  flex: 0 0 24px;
}

.n-divider__title {
  padding: 0 12px;
  font-size: 14px;
  font-weight: 500;
  color: #334155;
  white-space: nowrap;
}

:global(html.dark) .n-divider__title {
  color: #cbd5e1;
}

.n-divider--vertical {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  vertical-align: middle;
  background-color: #e2e8f0;
}

:global(html.dark) .n-divider--vertical {
  background-color: #334155;
}
</style>
