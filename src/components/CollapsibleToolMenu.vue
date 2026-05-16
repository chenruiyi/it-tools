<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { RouterLink, useRoute } from 'vue-router';
import type { Tool, ToolCategory } from '@/tools/tools.types';

const props = withDefaults(defineProps<{ toolsByCategory?: ToolCategory[] }>(), { toolsByCategory: () => [] });
const { toolsByCategory } = toRefs(props);
const route = useRoute();

const collapsedCategories = useStorage<Record<string, boolean>>(
  'menu-tool-option:collapsed-categories',
  {},
  undefined,
  {
    deep: true,
    serializer: {
      read: v => (v ? JSON.parse(v) : null),
      write: v => JSON.stringify(v),
    },
  },
);

function toggleCategoryCollapse({ name }: { name: string }) {
  collapsedCategories.value[name] = !collapsedCategories.value[name];
}
</script>

<template>
  <div v-for="{ name, components } of toolsByCategory" :key="name" class="menu-category">
    <div class="category-header" @click="toggleCategoryCollapse({ name })">
      <span class="chevron" :class="{ collapsed: collapsedCategories[name] }">
        <icon-mdi-chevron-right />
      </span>
      <span class="category-name">{{ name }}</span>
    </div>

    <div v-show="!collapsedCategories[name]" class="category-items">
      <div class="toggle-bar" @click="toggleCategoryCollapse({ name })" />
      <div class="items-list">
        <RouterLink
          v-for="tool in components"
          :key="tool.path"
          :to="tool.path"
          class="menu-item"
          :class="{ active: route.path === tool.path }"
        >
          <div class="menu-icon">
            <n-icon :component="tool.icon" size="18" />
            <div v-if="tool.isNew" class="new-dot" />
          </div>
          <span class="menu-label">{{ tool.name }}</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.menu-category {
  margin-bottom: 4px;
}

.category-header {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s;
  user-select: none;

  &:hover {
    opacity: 0.9;
  }
}

.chevron {
  font-size: 14px;
  line-height: 1;
  transition: transform 0.2s ease;
  transform: rotate(90deg);
  display: flex;

  &.collapsed {
    transform: rotate(0deg);
  }
}

.category-name {
  margin-left: 6px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted, #64748b);
}

.category-items {
  display: flex;
  flex-direction: row;
}

.toggle-bar {
  width: 24px;
  opacity: 0.1;
  transition: opacity ease 0.2s;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;

  &::before {
    width: 2px;
    height: 100%;
    content: ' ';
    background-color: var(--text-muted, #94a3b8);
    border-radius: 2px;
    position: absolute;
    top: 0;
    left: 14px;
  }

  &:hover {
    opacity: 0.5;
  }
}

.items-list {
  flex: 1;
  min-width: 0;
  padding: 2px 8px 2px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-color, #1e293b);
  font-size: 13px;
  transition: all 0.15s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: var(--primary-color, #6366f1);
    background-color: rgba(99, 102, 241, 0.08);
  }

  &.active {
    background-color: rgba(99, 102, 241, 0.12);
    color: var(--primary-color, #6366f1);
    font-weight: 500;
  }
}

.menu-icon {
  position: relative;
  display: flex;
  align-items: center;
  color: var(--text-muted, #94a3b8);
  flex-shrink: 0;

  .active & {
    color: var(--primary-color, #6366f1);
  }
}

.new-dot {
  position: absolute;
  top: -2px;
  left: -4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--primary-color, #6366f1);
}

.menu-label {
  overflow: hidden;
  text-overflow: ellipsis;
}

:global(html.dark) {
  .menu-item {
    color: #e2e8f0;

    &:hover {
      background-color: rgba(129, 140, 248, 0.1);
    }

    &.active {
      background-color: rgba(129, 140, 248, 0.15);
      color: #a5b4fc;
    }
  }

  .menu-icon {
    color: #64748b;

    .active & {
      color: #a5b4fc;
    }
  }

  .new-dot {
    background-color: #818cf8;
  }
}
</style>
