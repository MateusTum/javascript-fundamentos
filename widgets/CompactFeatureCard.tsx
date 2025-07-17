'use client';

import React from 'react';
import { IconType } from 'react-icons';
import { jsClasses } from '../lib/colors';

interface CompactFeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * Compact card component for scrollable feature lists
 * Smaller version of FeatureCard optimized for sidebar display
 * @param icon - React icon component for the card
 * @param title - Title of the feature
 * @param description - Brief description
 * @param isActive - Whether this card is currently selected
 * @param onClick - Click handler for selection
 * @param className - Additional CSS classes
 */
const CompactFeatureCard: React.FC<CompactFeatureCardProps> = ({
  icon: IconComponent,
  title,
  description,
  isActive = false,
  onClick,
  className = ''
}) => {
  const getCardStyles = () => {
    if (isActive) {
      return `${jsClasses.bg.yellow} ${jsClasses.text.inverse} border-2 border-[#e6c914] shadow-lg shadow-[#f7df1e]/30`;
    }
    return `${jsClasses.bg.secondary} border-2 ${jsClasses.border.yellow} ${jsClasses.text.primary} hover:shadow-lg hover:shadow-[#f7df1e]/20 hover:border-[#e6c914]`;
  };

  const getTitleStyles = () => {
    if (isActive) {
      return 'text-black font-bold';
    }
    return `${jsClasses.text.primary} group-hover:text-[#f7df1e] font-semibold`;
  };

  const getDescriptionStyles = () => {
    if (isActive) {
      return 'text-black/80';
    }
    return `${jsClasses.text.secondary} group-hover:text-gray-300`;
  };

  return (
    <div 
      className={`
        group relative p-4 rounded-xl transition-all duration-300 cursor-pointer
        hover:scale-105 hover:-translate-y-1
        active:scale-95 active:translate-y-0
        touch-manipulation
        ${getCardStyles()}
        ${className}
      `}
      onClick={onClick}
    >
      {/* Icon */}
      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
        <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 ${isActive ? 'text-black' : 'text-[#f7df1e]'}`} />
      </div>
      
      {/* Title */}
      <h4 className={`text-base sm:text-lg mb-1 sm:mb-2 transition-colors duration-300 ${getTitleStyles()}`}>
        {title}
      </h4>
      
      {/* Description */}
      <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${getDescriptionStyles()}`}>
        {description}
      </p>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute -right-1 -top-1 sm:-right-2 sm:-top-2 w-3 h-3 sm:w-4 sm:h-4 bg-[#1a1a1a] rounded-full border-2 border-[#f7df1e]"></div>
      )}
      
      {/* Hover line */}
      <div className={`
        absolute bottom-0 left-3 right-3 sm:left-4 sm:right-4 h-0.5 rounded-full transition-all duration-300
        ${isActive ? 'bg-black/30' : `${jsClasses.bg.yellow} scale-x-0 group-hover:scale-x-100`}
      `}></div>
    </div>
  );
};

export default CompactFeatureCard; 