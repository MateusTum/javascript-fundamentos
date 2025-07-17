'use client';

import React from 'react';
import { Element } from 'react-scroll';
import { jsClasses } from '../lib/colors';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  backgroundColor?: 'white' | 'gray' | 'blue' | 'purple' | 'green' | 'primary' | 'secondary' | 'tertiary';
}

/**
 * Componente de seção reutilizável para a homepage
 * Integra com react-scroll para navegação suave
 * Suporta tema escuro com cores JavaScript (amarelo e preto)
 * @param id - ID único da seção
 * @param title - Título principal da seção
 * @param subtitle - Subtítulo opcional
 * @param children - Conteúdo da seção
 * @param className - Classes CSS adicionais
 * @param backgroundColor - Cor de fundo da seção
 */
const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  backgroundColor = 'primary'
}) => {
  const getBgColor = (bg: string) => {
    switch (bg) {
      case 'primary':
        return jsClasses.bg.primary;
      case 'secondary':
        return jsClasses.bg.secondary;
      case 'tertiary':
        return jsClasses.bg.tertiary;
      case 'white':
        return 'bg-white';
      case 'gray':
        return 'bg-gray-50';
      case 'blue':
        return 'bg-blue-50';
      case 'purple':
        return 'bg-purple-50';
      case 'green':
        return 'bg-green-50';
      default:
        return jsClasses.bg.primary;
    }
  };

  return (
    <Element name={id} className="element">
      <section 
        id={id}
        className={`min-h-screen py-20 px-4 ${getBgColor(backgroundColor)} ${className}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header da seção */}
          <div className="text-left mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${jsClasses.text.primary}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-xl max-w-4xl leading-relaxed ${jsClasses.text.secondary}`}>
                {subtitle}
              </p>
            )}
            <div className={`w-24 h-1 ${jsClasses.bg.yellow} mt-8 rounded-full`}></div>
          </div>

          {/* Conteúdo da seção */}
          <div className="relative">
            {children}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Section; 