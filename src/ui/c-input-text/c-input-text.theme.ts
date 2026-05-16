import { defineThemes } from '../theme/theme.models';

export const { useTheme } = defineThemes({
  dark: {
    backgroundColor: '#0f172a',
    borderColor: '#334155',
    focus: {
      backgroundColor: '#1e293b',
    },
  },
  light: {
    backgroundColor: '#f8fafc',
    borderColor: '#e2e8f0',
    focus: {
      backgroundColor: '#ffffff',
    },
  },
});
