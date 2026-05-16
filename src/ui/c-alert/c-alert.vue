<script lang="ts" setup>
import { useTheme } from './c-alert.theme';

const props = withDefaults(defineProps<{ type?: 'warning' | 'error'; title?: string }>(), { type: 'warning', title: undefined });
const { type, title } = toRefs(props);

const theme = useTheme();
const variantTheme = computed(() => theme.value[type.value]);
</script>

<template>
  <div class="c-alert">
    <div class="c-alert--icon">
      <slot name="icon">
        <component :is="variantTheme.icon" />
      </slot>
    </div>

    <div class="c-alert--content">
      <div v-if="title" class="c-alert--title">
        {{ title }}
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.c-alert {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 10px;
  background-color: v-bind('variantTheme.backgroundColor');
  color: v-bind('variantTheme.textColor');
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid v-bind('variantTheme.borderColor + "33"');
}

.c-alert--icon {
  font-size: 22px;
  flex-shrink: 0;
  opacity: 0.8;
  margin-top: 1px;
}

.c-alert--title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}
</style>
