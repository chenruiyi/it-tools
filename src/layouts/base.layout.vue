<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { IconHome, IconMenu2 } from '@tabler/icons-vue';

import { storeToRefs } from 'pinia';
import HeroGradient from '../assets/hero-gradient.svg?component';
import MenuLayout from '../components/MenuLayout.vue';
import NavbarButtons from '../components/NavbarButtons.vue';
import { useStyleStore } from '@/stores/style.store';
import { config } from '@/config';
import type { ToolCategory } from '@/tools/tools.types';
import { useToolStore } from '@/tools/tools.store';
import CollapsibleToolMenu from '@/components/CollapsibleToolMenu.vue';

const styleStore = useStyleStore();
const version = config.app.version;

const { t } = useI18n();

const toolStore = useToolStore();
const { favoriteTools, toolsByCategory } = storeToRefs(toolStore);

const tools = computed<ToolCategory[]>(() => [
  ...(favoriteTools.value.length > 0 ? [{ name: t('tools.categories.favorite-tools'), components: favoriteTools.value }] : []),
  ...toolsByCategory.value,
]);
</script>

<template>
  <MenuLayout class="menu-layout" :class="{ isSmallScreen: styleStore.isSmallScreen }">
    <template #sider>
      <RouterLink to="/" class="hero-wrapper">
        <HeroGradient class="gradient" />
        <div class="text-wrapper">
          <div class="title">
            IT - TOOLS
          </div>
          <div class="divider" />
          <div class="subtitle">
            {{ $t('home.subtitle') }}
          </div>
        </div>
      </RouterLink>

      <div class="sider-content">
        <div v-if="styleStore.isSmallScreen" flex flex-col items-center>
          <locale-selector w="90%" />

          <div flex justify-center>
            <NavbarButtons />
          </div>
        </div>

        <CollapsibleToolMenu :tools-by-category="tools" />

        <div class="footer">
          <div>
            IT-Tools
            <c-link target="_blank" rel="noopener" :href="`https://github.com/chenruiyi/it-tools/tree/v${version}`">
              v{{ version }}
            </c-link>
          </div>
        </div>
      </div>
    </template>

    <template #content>
      <div class="navbar">
        <div class="navbar-left">
          <c-button
            circle
            variant="text"
            :aria-label="$t('home.toggleMenu')"
            @click="styleStore.isMenuCollapsed = !styleStore.isMenuCollapsed"
          >
            <IconMenu2 :size="22" />
          </c-button>

          <c-button to="/" circle variant="text" :aria-label="$t('home.home')">
            <IconHome :size="22" />
          </c-button>

          <c-button v-if="config.app.env === 'development'" to="/c-lib" circle variant="text" :aria-label="$t('home.uiLib')">
            <icon-mdi:brush-variant text-20px />
          </c-button>

          <command-palette />
        </div>

        <div class="navbar-right">
          <locale-selector v-if="!styleStore.isSmallScreen" />
          <NavbarButtons v-if="!styleStore.isSmallScreen" />
        </div>
      </div>
      <slot />
    </template>
  </MenuLayout>
</template>

<style lang="less" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
}

.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.footer {
  text-align: center;
  color: #94a3b8;
  margin-top: 20px;
  padding: 20px 0;
  font-size: 13px;
}

.sider-content {
  padding-top: 160px;
  padding-bottom: 200px;
}

.hero-wrapper {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  z-index: 10;
  overflow: hidden;

  .gradient {
    margin-top: -65px;
  }

  .text-wrapper {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    top: 16px;
    color: #fff;

    .title {
      font-size: 25px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .divider {
      width: 40px;
      height: 2px;
      border-radius: 4px;
      background: linear-gradient(90deg, #6366f1, #a78bfa);
      margin: 6px auto;
    }

    .subtitle {
      font-size: 14px;
      opacity: 0.9;
    }
  }
}
</style>
