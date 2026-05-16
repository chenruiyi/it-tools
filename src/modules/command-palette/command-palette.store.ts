import { defineStore } from 'pinia';
import _ from 'lodash';
import type { PaletteOption } from './command-palette.types';
import { useToolStore } from '@/tools/tools.store';
import { useFuzzySearch } from '@/composable/fuzzySearch';
import { useStyleStore } from '@/stores/style.store';

import SunIcon from '~icons/mdi/white-balance-sunny';
import GithubIcon from '~icons/mdi/github';
import BugIcon from '~icons/mdi/bug-outline';
import DiceIcon from '~icons/mdi/dice-5';
import InfoIcon from '~icons/mdi/information-outline';

export const useCommandPaletteStore = defineStore('command-palette', () => {
  const toolStore = useToolStore();
  const styleStore = useStyleStore();
  const router = useRouter();
  const searchPrompt = ref('');

  const searchOptions = computed<PaletteOption[]>(() => {
    const toolsOptions = toolStore.tools.map(tool => ({
      ...tool,
      to: tool.path,
      toolCategory: tool.category,
      category: 'Tools',
    }));

    return [
      ...toolsOptions,
      {
        name: 'Random tool',
        description: 'Get a random tool from the list.',
        action: () => {
          const { path } = _.sample(toolStore.tools)!;
          router.push(path);
        },
        icon: DiceIcon,
        category: 'Tools',
        keywords: ['random', 'tool', 'pick', 'choose', 'select', '随机'],
        closeOnSelect: true,
      },
      {
        name: 'Toggle dark mode',
        description: 'Toggle dark mode on or off.',
        action: () => styleStore.toggleDark(),
        icon: SunIcon,
        category: 'Actions',
        keywords: ['dark', 'theme', 'toggle', 'mode', 'light', '深色', '浅色', '主题'],
      },
      {
        name: 'Github repository',
        href: 'https://github.com/chenruiyi/it-tools',
        category: 'External',
        description: 'View the source code of it-tools on Github.',
        keywords: ['github', 'repo', 'repository', 'source', 'code', '仓库', '源码'],
        icon: GithubIcon,
      },
      {
        name: 'Report a bug or an issue',
        description: 'Report a bug or an issue to help improve it-tools.',
        href: 'https://github.com/chenruiyi/it-tools/issues/new/choose',
        category: 'Actions',
        keywords: ['report', 'issue', 'bug', 'problem', 'error', '报告', '问题', '反馈'],
        icon: BugIcon,
      },
      {
        name: 'About',
        description: 'Learn more about IT-Tools.',
        to: '/about',
        category: 'Pages',
        keywords: ['about', 'learn', 'more', 'info', 'information', '关于'],
        icon: InfoIcon,
      },
    ];
  });

  const { searchResult } = useFuzzySearch({
    search: searchPrompt,
    data: searchOptions,
    options: {
      keys: [{ name: 'name', weight: 2 }, 'description', 'keywords', 'category'],
      threshold: 0.3,
    },
  });

  const filteredSearchResult = computed(() =>
    _.chain(searchResult.value).groupBy('category').mapValues(categoryOptions => _.take(categoryOptions, 5)).value());

  return {
    filteredSearchResult,
    searchPrompt,
  };
});
