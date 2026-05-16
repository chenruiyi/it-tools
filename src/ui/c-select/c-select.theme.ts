import { defineThemes } from '../theme/theme.models';
import { appThemes } from '../theme/themes';

const sizes = {
  small: {
    height: '30px',
    fontSize: '12px',
  },
  medium: {
    height: '36px',
    fontSize: '14px',
  },
  large: {
    height: '42px',
    fontSize: '15px',
  },
};

export const { useTheme } = defineThemes({
  dark: {
    sizes,

    backgroundColor: '#0f172a',
    borderColor: '#334155',
    dropdownShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',

    option: {
      hover: {
        backgroundColor: '#334155',
      },
      active: {
        textColor: appThemes.dark.primary.color,
      },
    },

    focus: {
      backgroundColor: '#1e293b',
    },
  },
  light: {
    sizes,

    backgroundColor: '#f8fafc',
    borderColor: '#e2e8f0',
    dropdownShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',

    option: {
      hover: {
        backgroundColor: '#f1f5f9',
      },
      active: {
        textColor: appThemes.light.primary.color,
      },
    },

    focus: {
      backgroundColor: '#ffffff',
    },
  },
});
