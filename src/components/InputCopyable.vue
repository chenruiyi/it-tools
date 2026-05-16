<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { useCopy } from '@/composable/copy';

const props = defineProps<{ value: string }>();
const emit = defineEmits(['update:value']);

const value = useVModel(props, 'value', emit);
const { copy, isJustCopied } = useCopy({ source: value, createToast: false });
const tooltipText = computed(() => isJustCopied.value ? 'Copied!' : 'Copy to clipboard');
</script>

<template>
  <c-input-text v-model:value="value">
    <template #suffix>
      <c-tooltip :tooltip="tooltipText">
        <c-button circle variant="text" size="small" class="copy-btn" :class="{ copied: isJustCopied }" @click="copy()">
          <Transition name="copy-icon" mode="out-in">
            <icon-mdi-check v-if="isJustCopied" style="color: #10b981" />
            <icon-mdi-content-copy v-else />
          </Transition>
        </c-button>
      </c-tooltip>
    </template>
  </c-input-text>
</template>

<style scoped>
.copy-btn.copied {
  background-color: rgba(16, 185, 129, 0.1);
}

.copy-icon-enter-active,
.copy-icon-leave-active {
  transition: all 0.15s ease;
}

.copy-icon-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.copy-icon-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
