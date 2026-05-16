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
  padding: 2px;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
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
  transition: background 0.25s cubic-bezier(0.4, 0, 0.2, 1);
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
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
  transition: left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.n-switch--active .n-switch__knob {
  left: calc(100% - 3px);
  transform: translateY(-50%) translateX(-100%);
}

.n-switch--medium .n-switch__rail {
  width: 44px;
  height: 24px;
}

.n-switch--medium .n-switch__knob {
  width: 18px;
  height: 18px;
}

.n-switch--small .n-switch__rail {
  width: 36px;
  height: 20px;
}

.n-switch--small .n-switch__knob {
  width: 14px;
  height: 14px;
}

.n-switch--large .n-switch__rail {
  width: 52px;
  height: 28px;
}

.n-switch--large .n-switch__knob {
  width: 22px;
  height: 22px;
}

.n-switch:focus-visible .n-switch__rail {
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

.n-switch:not(.n-switch--disabled):hover .n-switch__rail {
  filter: brightness(0.95);
}

.n-switch:not(.n-switch--disabled):active .n-switch__knob {
  width: 22px;
}

.n-switch--small:not(.n-switch--disabled):active .n-switch__knob {
  width: 18px;
}

.n-switch--large:not(.n-switch--disabled):active .n-switch__knob {
  width: 26px;
}

:global(html.dark) .n-switch__rail {
  background: #475569;
}

:global(html.dark) .n-switch--active .n-switch__rail {
  background: #818cf8;
}
</style>
