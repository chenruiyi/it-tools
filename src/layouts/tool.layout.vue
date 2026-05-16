<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import type { HeadObject } from '@vueuse/head';

import BaseLayout from './base.layout.vue';
import FavoriteButton from '@/components/FavoriteButton.vue';
import type { Tool } from '@/tools/tools.types';

const route = useRoute();

const head = computed<HeadObject>(() => ({
  title: `${route.meta.name} - IT Tools`,
  meta: [
    {
      name: 'description',
      content: route.meta?.description as string,
    },
    {
      name: 'keywords',
      content: ((route.meta.keywords ?? []) as string[]).join(','),
    },
  ],
}));
useHead(head);
const { t } = useI18n();

const i18nKey = computed<string>(() => route.path.trim().replace('/', ''));
const toolTitle = computed<string>(() => t(`tools.${i18nKey.value}.title`, String(route.meta.name)));
const toolDescription = computed<string>(() => t(`tools.${i18nKey.value}.description`, String(route.meta.description)));
</script>

<template>
  <BaseLayout>
    <div class="tool-layout">
      <div class="tool-header">
        <div class="tool-title-row">
          <h1 class="tool-title">
            {{ toolTitle }}
          </h1>
          <FavoriteButton :tool="{ name: route.meta.name, path: route.path } as Tool" />
        </div>

        <div class="separator" />

        <p class="description">
          {{ toolDescription }}
        </p>
      </div>
    </div>

    <div class="tool-content">
      <slot />
    </div>
  </BaseLayout>
</template>

<style lang="less" scoped>
.tool-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  ::v-deep(& > *) {
    flex: 0 1 900px;
  }
}

.tool-layout {
  max-width: 900px;
  margin: 0 auto;
  box-sizing: border-box;

  .tool-header {
    padding: 24px 0 32px;
    width: 100%;

    .tool-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .tool-title {
      font-size: 28px;
      font-weight: 700;
      margin: 0;
      line-height: 1.2;
      color: var(--text-color, #1e293b);
      letter-spacing: -0.02em;
    }

    .separator {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--primary-color, #6366f1), transparent);
      border-radius: 4px;
      margin: 12px 0;
    }

    .description {
      margin: 0;
      font-size: 15px;
      line-height: 1.6;
      color: var(--text-muted, #64748b);
    }
  }
}
</style>
