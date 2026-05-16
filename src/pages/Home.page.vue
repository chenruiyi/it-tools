<script setup lang="ts">
import { IconDragDrop } from '@tabler/icons-vue';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import Draggable from 'vuedraggable';
import ToolCard from '../components/ToolCard.vue';
import { useToolStore } from '@/tools/tools.store';

const toolStore = useToolStore();

useHead({ title: 'IT Tools - Handy online tools for developers' });
const { t } = useI18n();

const favoriteTools = computed(() => toolStore.favoriteTools);

function onUpdateFavoriteTools() {
  toolStore.updateFavoriteTools(favoriteTools.value);
}
</script>

<template>
  <div class="home-page">
    <transition name="height">
      <div v-if="toolStore.favoriteTools.length > 0">
        <h3 class="section-title">
          {{ $t('home.categories.favoriteTools') }}
          <span class="dnd-hint">
            <n-icon :component="IconDragDrop" size="16" />
            {{ $t('home.categories.favoritesDndToolTip') }}
          </span>
        </h3>
        <Draggable
          :list="favoriteTools"
          class="tools-grid"
          ghost-class="ghost-favorites-draggable"
          item-key="name"
          @end="onUpdateFavoriteTools"
        >
          <template #item="{ element: tool }">
            <ToolCard :tool="tool" />
          </template>
        </Draggable>
      </div>
    </transition>

    <div v-if="toolStore.newTools.length > 0">
      <h3 class="section-title">
        {{ t('home.categories.newestTools') }}
      </h3>
      <div class="tools-grid">
        <ToolCard v-for="tool in toolStore.newTools" :key="tool.name" :tool="tool" />
      </div>
    </div>

    <h3 class="section-title">
      {{ $t('home.categories.allTools') }}
    </h3>
    <div class="tools-grid">
      <ToolCard v-for="tool in toolStore.tools" :key="tool.name" :tool="tool" />
    </div>
  </div>
</template>

<style scoped lang="less">
.home-page {
  padding-top: 16px;
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  margin: 28px 0 12px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted, #64748b);
  display: flex;
  align-items: center;
  gap: 8px;
}

.dnd-hint {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: normal;
  opacity: 0.7;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 14px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.height-enter-active,
.height-leave-active {
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  max-height: 500px;
}

.height-enter-from,
.height-leave-to {
  max-height: 42px;
  overflow: hidden;
  opacity: 0;
  margin-bottom: 0;
}

.ghost-favorites-draggable {
  opacity: 0.4;
  background-color: var(--surface-color, #ffffff);
  border: 2px dashed var(--primary-color, #6366f1);
  border-radius: 14px;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
  transform: scale(1.02);
}
</style>
