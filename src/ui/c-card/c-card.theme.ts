import { defineThemes } from '../theme/theme.models';

export const { useTheme } = defineThemes({
  dark: {
    backgroundColor: '#1e293b',
    borderColor: '#334155',
  },
  light: {
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
  },
});
