import { defineThemes } from './theme.models';

export const { themes: appThemes, useTheme: useAppTheme } = defineThemes({
  light: {
    background: '#f8fafc',
    surface: '#ffffff',
    text: {
      baseColor: '#1e293b',
      mutedColor: '#64748b',
    },
    default: {
      color: 'rgba(15, 23, 42, 0.04)',
      colorHover: 'rgba(15, 23, 42, 0.08)',
      colorPressed: 'rgba(15, 23, 42, 0.14)',
    },
    primary: {
      color: '#6366f1',
      colorHover: '#818cf8',
      colorPressed: '#4f46e5',
      colorFaded: '#6366f11a',
    },
    warning: {
      color: '#f59e0b',
      colorHover: '#fbbf24',
      colorPressed: '#d97706',
      colorFaded: '#f59e0b1a',
    },
    success: {
      color: '#10b981',
      colorHover: '#34d399',
      colorPressed: '#059669',
      colorFaded: '#10b9811a',
    },
    error: {
      color: '#f43f5e',
      colorHover: '#fb7185',
      colorPressed: '#e11d48',
      colorFaded: '#f43f5e1a',
    },
  },
  dark: {
    background: '#0f172a',
    surface: '#1e293b',
    text: {
      baseColor: '#f1f5f9',
      mutedColor: '#94a3b8',
    },
    default: {
      color: 'rgba(248, 250, 252, 0.06)',
      colorHover: 'rgba(248, 250, 252, 0.10)',
      colorPressed: 'rgba(248, 250, 252, 0.18)',
    },
    primary: {
      color: '#818cf8',
      colorHover: '#a5b4fc',
      colorPressed: '#6366f1',
      colorFaded: '#818cf81a',
    },
    warning: {
      color: '#fbbf24',
      colorHover: '#fcd34d',
      colorPressed: '#f59e0b',
      colorFaded: '#fbbf241a',
    },
    success: {
      color: '#34d399',
      colorHover: '#6ee7b7',
      colorPressed: '#10b981',
      colorFaded: '#34d3991a',
    },
    error: {
      color: '#fb7185',
      colorHover: '#fda4af',
      colorPressed: '#f43f5e',
      colorFaded: '#fb71851a',
    },
  },
});
