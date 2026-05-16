<script setup lang="ts">
withDefaults(defineProps<{
  show?: boolean;
}>(), {
  show: true,
});
</script>

<template>
  <Transition name="n-collapse">
    <div v-show="show" class="n-collapse-transition">
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.n-collapse-transition {
  overflow: hidden;
}

.n-collapse-enter-active,
.n-collapse-leave-active {
  transition: all 0.25s ease;
  max-height: 1000px;
  opacity: 1;
}

.n-collapse-enter-from,
.n-collapse-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>
