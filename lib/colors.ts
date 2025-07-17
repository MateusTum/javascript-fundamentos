/**
 * Sistema de cores baseado no JavaScript (amarelo e preto)
 * Centraliza todas as cores da aplicação para fácil manutenção
 */

export const jsColors = {
  // Core JavaScript Colors
  yellow: {
    DEFAULT: '#f7df1e',
    dark: '#e6c914',
    light: '#f9e55a',
    pale: '#fef7cd',
  },
  black: {
    DEFAULT: '#1a1a1a',
    light: '#2d2d2d',
    lighter: '#404040',
    pure: '#000000',
  },
  
  // Semantic Colors
  background: {
    primary: '#1a1a1a',
    secondary: '#2d2d2d',
    tertiary: '#404040',
  },
  
  text: {
    primary: '#f7df1e',
    secondary: '#f9e55a',
    muted: '#999999',
    inverse: '#1a1a1a',
  },
  
  border: {
    DEFAULT: '#404040',
    focus: '#f7df1e',
    hover: '#e6c914',
  },
  
  // Interactive States
  interactive: {
    hover: '#e6c914',
    active: '#f9e55a',
    focus: '#f7df1e',
    disabled: '#666666',
  },
  
  // Status Colors (mantendo harmonia com o tema)
  status: {
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#ef4444',
    info: '#3b82f6',
  },
} as const;

/**
 * Classes CSS utilitárias para usar com Tailwind
 */
export const jsClasses = {
  // Backgrounds
  bg: {
    primary: 'bg-[#1a1a1a]',
    secondary: 'bg-[#2d2d2d]',
    tertiary: 'bg-[#404040]',
    yellow: 'bg-[#f7df1e]',
    yellowDark: 'bg-[#e6c914]',
    gradient: 'bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]',
  },
  
  // Text Colors
  text: {
    primary: 'text-[#f7df1e]',
    secondary: 'text-[#f9e55a]',
    muted: 'text-[#999999]',
    inverse: 'text-[#1a1a1a]',
  },
  
  // Borders
  border: {
    default: 'border-[#404040]',
    yellow: 'border-[#f7df1e]',
    hover: 'hover:border-[#e6c914]',
  },
  
  // Interactive
  hover: {
    bgYellow: 'hover:bg-[#f7df1e]',
    bgYellowDark: 'hover:bg-[#e6c914]',
    textBlack: 'hover:text-[#1a1a1a]',
    textYellow: 'hover:text-[#f7df1e]',
  },
} as const;

/**
 * Função para obter cores com type safety
 */
export const getJSColor = (path: string): string => {
  const keys = path.split('.');
  let value: any = jsColors;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      console.warn(`Color path "${path}" not found`);
      return jsColors.yellow.DEFAULT;
    }
  }
  
  return typeof value === 'string' ? value : value.DEFAULT;
};

/**
 * Hook para usar cores de forma reativa (para futuras expansões)
 */
export const useJSColors = () => {
  return {
    colors: jsColors,
    classes: jsClasses,
    getColor: getJSColor,
  };
}; 