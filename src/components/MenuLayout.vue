<script setup lang="ts">
import { useStyleStore } from '@/stores/style.store';

const styleStore = useStyleStore();
const { isMenuCollapsed, isSmallScreen } = toRefs(styleStore);
</script>

<template>
  <div class="app-layout">
    <aside
      class="app-sider"
      :class="{ collapsed: isMenuCollapsed, mobile: isSmallScreen }"
    >
      <div class="sider-inner">
        <slot name="sider" />
      </div>
    </aside>
    <main class="app-content">
      <slot name="content" />
      <div
        v-show="isSmallScreen && !isMenuCollapsed"
        class="overlay"
        @click="isMenuCollapsed = true"
      />
    </main>
  </div>
</template>

<style lang="less" scoped>
.app-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.app-sider {
  position: relative;
  width: 260px;
  flex-shrink: 0;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-right: 1px solid var(--border-color, #e2e8f0);
  background: var(--sider-bg, #ffffff);

  &.collapsed {
    width: 0;
  }

  &.mobile {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1000;
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.12);

    &.collapsed {
      transform: translateX(-100%);
      width: 260px;
    }
  }

  .sider-inner {
    width: 260px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.15) transparent;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      border-radius: 4px;
    }
  }
}

.app-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 28px;
  background: var(--content-bg, #f8fafc);
  position: relative;
  scrollbar-width: thin;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  cursor: pointer;
  z-index: 999;
}

:global(html.dark) {
  .app-sider {
    --sider-bg: #1e293b;
    --border-color: #334155;
  }

  .app-content {
    --content-bg: #0f172a;
  }

  .app-sider .sider-inner {
    scrollbar-color: rgba(255, 255, 255, 0.1) transparent;

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
