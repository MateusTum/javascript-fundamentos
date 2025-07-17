'use client';

import React from 'react';
import { jsClasses } from '../lib/colors';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
}

/**
 * Card de feature/funcionalidade para uso nas seções
 * Design moderno com hover effects e tema JavaScript (preto e amarelo)
 * @param icon - Emoji ou ícone para o card
 * @param title - Título do card
 * @param description - Descrição do card
 * @param highlight - Se deve destacar o card
 * @param className - Classes CSS adicionais
 * @param theme - Tema claro ou escuro
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  highlight = false,
  className = '',
  theme = 'light'
}) => {
  const getCardStyles = () => {
    if (theme === 'dark') {
      if (highlight) {
        return `
          ${jsClasses.bg.yellow} ${jsClasses.text.inverse} 
          shadow-xl shadow-[#f7df1e]/25 border-2 border-transparent
        `;
      }
      return `
        ${jsClasses.bg.secondary} ${jsClasses.border.yellow} border-2
        ${jsClasses.text.primary} hover:shadow-xl hover:shadow-[#f7df1e]/20
        ${jsClasses.hover.bgYellow} ${jsClasses.hover.textBlack}
      `;
    }
    
    // Light theme (original)
    if (highlight) {
      return 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/25';
    }
    return 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10';
  };

  const getIconStyles = () => {
    if (theme === 'dark') {
      return `transition-transform duration-300 group-hover:scale-110 ${highlight ? 'filter drop-shadow-lg' : ''}`;
    }
    return `transition-transform duration-300 group-hover:scale-110 ${highlight ? 'filter drop-shadow-lg' : ''}`;
  };

  const getTitleStyles = () => {
    if (theme === 'dark') {
      if (highlight) {
        return jsClasses.text.inverse;
      }
      return `${jsClasses.text.primary} transition-colors duration-300 group-hover:text-[#1a1a1a]`;
    }
    
    // Light theme
    return `transition-colors duration-300 ${highlight ? 'text-white' : 'text-gray-900 group-hover:text-blue-600'}`;
  };

  const getDescriptionStyles = () => {
    if (theme === 'dark') {
      if (highlight) {
        return 'text-black/80';
      }
      return `${jsClasses.text.secondary} transition-colors duration-300 group-hover:text-[#1a1a1a]`;
    }
    
    // Light theme
    return `leading-relaxed transition-colors duration-300 ${highlight ? 'text-blue-100' : 'text-gray-600 group-hover:text-gray-800'}`;
  };

  const getLineStyles = () => {
    if (theme === 'dark') {
      if (highlight) {
        return 'bg-black/30';
      }
      return `${jsClasses.bg.yellow} scale-x-0 group-hover:scale-x-100`;
    }
    
    // Light theme
    return `${highlight ? 'bg-white/30' : 'bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100'}`;
  };

  return (
    <div 
      className={`
        group relative p-6 rounded-2xl transition-all duration-300 
        hover:scale-105 hover:-translate-y-2 cursor-pointer
        ${getCardStyles()}
        ${className}
      `}
    >
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f7df1e]/0 via-[#f7df1e]/5 to-[#e6c914]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Ícone */}
      <div className={`text-4xl mb-4 ${getIconStyles()}`}>
        {icon}
      </div>
      
      {/* Título */}
      <h3 className={`text-xl font-bold mb-3 ${getTitleStyles()}`}>
        {title}
      </h3>
      
      {/* Descrição */}
      <p className={`text-base ${getDescriptionStyles()}`}>
        {description}
      </p>
      
      {/* Indicador de destaque */}
      {highlight && (
        <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-semibold shadow-lg ${
          theme === 'dark' 
            ? `${jsClasses.bg.yellow} ${jsClasses.text.inverse}` 
            : 'bg-yellow-400 text-yellow-900'
        }`}>
          ⭐ Popular
        </div>
      )}
      
      {/* Linha decorativa */}
      <div className={`
        absolute bottom-0 left-6 right-6 h-1 rounded-full transition-all duration-300
        ${getLineStyles()}
      `}></div>
    </div>
  );
};

export default FeatureCard; 