<script setup lang="ts">
import { useTheme } from './c-modal.theme';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{ open?: boolean; centered?: boolean }>(), {
  open: false,
  centered: true,
});

const emit = defineEmits(['update:open']);

const isOpen = useVModel(props, 'open', emit, { passive: true });

const { centered } = toRefs(props);

function close() {
  isOpen.value = false;
}

function open() {
  isOpen.value = true;
}

function toggle() {
  isOpen.value = !isOpen.value;
}

defineExpose({
  close,
  open,
  toggle,
  isOpen,
});

const theme = useTheme();
const modal = ref();

onClickOutside(modal, () => {
  if (isOpen.value) {
    close();
  }
});
</script>

<template>
  <transition>
    <div v-if="isOpen" class="c-modal--overlay" :class="{ 'items-center': centered }">
      <div ref="modal" class="c-modal--container" v-bind="$attrs">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style scoped lang="less">
.c-modal--overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.c-modal--container {
  background-color: v-bind('theme.background');
  border-radius: 16px;
  padding: 28px;
  max-width: 560px;
  width: 100%;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
  max-height: 90vh;
  overflow-y: auto;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-active .c-modal--container,
.v-leave-active .c-modal--container {
  transition: transform 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-from .c-modal--container {
  transform: scale(0.95) translateY(10px);
}

.v-leave-to .c-modal--container {
  transform: scale(0.95) translateY(10px);
}
</style>
