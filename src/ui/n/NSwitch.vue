<script setup lang="ts">
withDefaults(defineProps<{
  value?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}>(), {
  value: false,
  disabled: false,
  size: 'medium',
});

const emit = defineEmits<{
  'update:value': [value: boolean]
}>();

function toggle(current: boolean) {
  emit('update:value', !current);
}
</script>

<template>
  <button
    type="button"
    class="n-switch"
    :class="[
      `n-switch--${size}`,
      { 'n-switch--active': value, 'n-switch--disabled': disabled }
    ]"
    role="switch"
    :aria-checked="value"
    :disabled="disabled"
    @click="toggle(value)"
  >
    <span class="n-switch__rail">
      <span class="n-switch__knob" />
    </span>
  </button>
</template>

<style scoped>
.n-switch {
  display: inline-flex;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  outline: none;
}

.n-switch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.n-switch__rail {
  position: relative;
  display: inline-block;
  border-radius: 999px;
  background: #cbd5e1;
  transition: background 0.2s;
}

.n-switch--active .n-switch__rail {
  background: #6366f1;
}

.n-switch__knob {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 3px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: left 0.2s;
}

.n-switch--active .n-switch__knob {
  left: calc(100% - 3px);
  transform: translateY(-50%) translateX(-100%);
}

/* Size: medium (default) */
.n-switch--medium .n-switch__rail {
  width: 40px;
  height: 22px;
}

.n-switch--medium .n-switch__knob {
  width: 16px;
  height: 16px;
}

/* Size: small */
.n-switch--small .n-switch__rail {
  width: 32px;
  height: 18px;
}

.n-switch--small .n-switch__knob {
  width: 12px;
  height: 12px;
}

/* Size: large */
.n-switch--large .n-switch__rail {
  width: 50px;
  height: 26px;
}

.n-switch--large .n-switch__knob {
  width: 20px;
  height: 20px;
}

.n-switch:focus-visible .n-switch__rail {
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

:root.dark .n-switch__rail,
.dark .n-switch__rail {
  background: #475569;
}

:root.dark .n-switch--active .n-switch__rail,
.dark .n-switch--active .n-switch__rail {
  background: #6366f1;
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) .n-switch__rail {
    background: #475569;
  }
  :root:not(.light) .n-switch--active .n-switch__rail {
    background: #6366f1;
  }
}
</style>
