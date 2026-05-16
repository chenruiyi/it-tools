<script setup lang="ts">
import { useAppTheme } from '@/ui/theme/themes';
import FavoriteButton from './FavoriteButton.vue';
import type { Tool } from '@/tools/tools.types';

const props = defineProps<{ tool: Tool & { category: string } }>();
const { tool } = toRefs(props);
const appTheme = useAppTheme();
</script>

<template>
  <router-link :to="tool.path" class="tool-card-link">
    <div class="tool-card">
      <div class="tool-card-header">
        <n-icon class="tool-card-icon" size="36" :component="tool.icon" />

        <div class="tool-card-badges">
          <span
            v-if="tool.isNew"
            class="new-badge"
            :style="{ 'background-color': appTheme.primary.color }"
          >
            {{ $t('toolCard.new') }}
          </span>

          <FavoriteButton :tool="tool" />
        </div>
      </div>

      <div class="tool-card-name">
        {{ tool.name }}
      </div>

      <div class="tool-card-desc">
        {{ tool.description }}
      </div>
    </div>
  </router-link>
</template>

<style lang="less" scoped>
.tool-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.tool-card {
  height: 100%;
  padding: 22px 24px;
  border-radius: 14px;
  border: 1px solid var(--border-color, #e2e8f0);
  background: var(--surface-color, #ffffff);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: var(--primary-color, #6366f1);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
    transform: translateY(-2px);
  }
}

.tool-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tool-card-icon {
  color: var(--text-muted, #94a3b8);
}

.tool-card-badges {
  display: flex;
  align-items: center;
  gap: 8px;
}

.new-badge {
  border-radius: 100px;
  padding: 3px 10px;
  font-size: 11px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.02em;
}

.tool-card-name {
  margin: 12px 0 6px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color, #1e293b);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tool-card-desc {
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-muted, #64748b);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

:global(html.dark) .tool-card {
  --surface-color: #1e293b;
  --border-color: #334155;

  &:hover {
    box-shadow: 0 4px 12px rgba(129, 140, 248, 0.15);
  }
}
</style>
