import { useStyleStore } from '@/stores/style.store';

export function useThemeVars() {
  const styleStore = useStyleStore();

  return computed(() => {
    if (styleStore.isDarkTheme) {
      return {
        primaryColor: '#818cf8',
        primaryColorHover: '#a5b4fc',
        successColor: '#34d399',
        warningColor: '#fbbf24',
        errorColor: '#fb7185',
        textColor1: '#f1f5f9',
        textColor2: '#cbd5e1',
        textColor3: '#94a3b8',
        cardColor: '#1e293b',
        bodyColor: '#0f172a',
        borderColor: '#334155',
        dividerColor: '#334155',
        tableHeaderColor: '#334155',
      };
    }
    return {
      primaryColor: '#6366f1',
      primaryColorHover: '#818cf8',
      successColor: '#10b981',
      warningColor: '#f59e0b',
      errorColor: '#f43f5e',
      textColor1: '#1e293b',
      textColor2: '#475569',
      textColor3: '#94a3b8',
      cardColor: '#ffffff',
      bodyColor: '#f8fafc',
      borderColor: '#e2e8f0',
      dividerColor: '#e2e8f0',
      tableHeaderColor: '#f1f5f9',
    };
  });
}
