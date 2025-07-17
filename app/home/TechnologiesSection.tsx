'use client';

import React from 'react';
import { 
  HiCube, 
  HiColorSwatch, 
  HiCode, 
  HiSparkles,
  HiCog,
  HiPlay
} from 'react-icons/hi';
import { IconType } from 'react-icons';
import Section from "../../widgets/Section";
import { jsClasses } from '../../lib/colors';

interface TechnologyCardProps {
  name: string;
  version: string;
  description: string;
  icon: IconType;
  category: 'Framework' | 'Biblioteca' | 'Linguagem' | 'Ferramentas' | 'Estilo';
  url?: string;
}

/**
 * TechnologiesSection component - Technologies used in the project
 * Displays all the technologies, frameworks and tools used to build this site
 * Based on the package.json dependencies and development stack
 */
export default function TechnologiesSection() {
  const technologies: TechnologyCardProps[] = [
    {
      name: "Next.js",
      version: "15.4.1",
      description: "Framework React para aplicações web modernas com SSR e otimizações automáticas",
      icon: HiCode,
      category: "Framework",
      url: "https://nextjs.org/"
    },
    {
      name: "React",
      version: "19.1.0",
      description: "Biblioteca JavaScript para construção de interfaces de usuário interativas",
      icon: HiSparkles,
      category: "Biblioteca",
      url: "https://react.dev/"
    },
    {
      name: "TypeScript",
      version: "5.x",
      description: "Superset do JavaScript que adiciona tipagem estática e ferramentas avançadas",
      icon: HiCode,
      category: "Linguagem",
      url: "https://typescriptlang.org/"
    },
    {
      name: "Tailwind CSS",
      version: "4.x",
      description: "Framework CSS utility-first para design responsivo e componentes customizados",
      icon: HiColorSwatch,
      category: "Estilo",
      url: "https://tailwindcss.com/"
    },
    {
      name: "React Icons",
      version: "5.5.0",
      description: "Biblioteca de ícones populares como componentes React reutilizáveis",
      icon: HiCube,
      category: "Biblioteca",
      url: "https://react-icons.github.io/react-icons/"
    },
    {
      name: "React Scroll",
      version: "1.9.3",
      description: "Navegação suave entre seções com animações e controle de scroll",
      icon: HiPlay,
      category: "Biblioteca",
      url: "https://github.com/fisshy/react-scroll"
    },
    {
      name: "React Syntax Highlighter",
      version: "15.6.1",
      description: "Componente para highlight de código com suporte a múltiplas linguagens",
      icon: HiCode,
      category: "Biblioteca",
      url: "https://github.com/react-syntax-highlighter/react-syntax-highlighter"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Framework':
        return 'bg-blue-500/20 text-blue-400';
      case 'Biblioteca':
        return 'bg-green-500/20 text-green-400';
      case 'Linguagem':
        return 'bg-purple-500/20 text-purple-400';
      case 'Ferramentas':
        return 'bg-orange-500/20 text-orange-400';
      case 'Estilo':
        return 'bg-pink-500/20 text-pink-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const TechnologyCard = ({ name, version, description, icon: Icon, category, url }: TechnologyCardProps) => (
    <div className={`${jsClasses.bg.secondary} rounded-xl p-4 md:p-6 shadow-lg border ${jsClasses.border.yellow} hover:shadow-xl hover:shadow-[#f7df1e]/10 transition-all duration-300 group h-full flex flex-col`}>
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className={`text-xl md:text-2xl ${jsClasses.text.primary}`}>
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className={`text-xs px-2 py-1 rounded-full shrink-0 ${getCategoryColor(category)}`}>
            {category}
          </span>
          <span className={`text-xs ${jsClasses.text.muted} font-mono`}>
            v{version}
          </span>
        </div>
      </div>
      <h4 className={`font-bold text-base md:text-lg mb-2 ${jsClasses.text.primary} group-hover:text-[#f7df1e] transition-colors leading-tight`}>
        {name}
      </h4>
      <p className={`text-xs md:text-sm mb-3 md:mb-4 ${jsClasses.text.secondary} leading-relaxed flex-1`}>
        {description}
      </p>
      {url && (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-flex items-center text-xs md:text-sm font-medium ${jsClasses.text.primary} hover:text-[#f7df1e] transition-colors mt-auto`}
        >
          Documentação
          <HiCog className="ml-1 w-3 h-3 md:w-4 md:h-4" />
        </a>
      )}
    </div>
  );

  return (
    <Section 
      id="technologies" 
      title="Stack Tecnológico" 
      subtitle="Tecnologias, frameworks e ferramentas utilizadas neste projeto"
      backgroundColor="primary"
      className="!min-h-dvh"
    >
      <div className="text-left-custom h-full max-h-[calc(100dvh-200px)] overflow-y-auto">
        <div className="space-y-8 md:space-y-12 pb-8">
          {/* Tecnologias Principais */}
          <div>
            <div className="flex items-center mb-4 md:mb-6">
              <HiCube className={`w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 ${jsClasses.text.primary}`} />
              <h3 className={`text-xl md:text-2xl font-bold ${jsClasses.text.primary}`}>
                Tecnologias Utilizadas
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {technologies.map((tech, index) => (
                <TechnologyCard key={index} {...tech} />
              ))}
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className={`${jsClasses.bg.secondary} rounded-xl p-6 md:p-8 border ${jsClasses.border.yellow}`}>
            <h3 className={`text-xl md:text-2xl font-bold mb-4 ${jsClasses.text.primary}`}>
              Sobre o Desenvolvimento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className={`font-semibold mb-2 ${jsClasses.text.primary}`}>
                  Arquitetura
                </h4>
                <p className={`text-sm ${jsClasses.text.secondary} leading-relaxed`}>
                  Aplicação construída com arquitetura modular, componentes reutilizáveis e design system consistente. 
                  Foco em performance, acessibilidade e experiência do usuário.
                </p>
              </div>
              <div>
                <h4 className={`font-semibold mb-2 ${jsClasses.text.primary}`}>
                  Responsividade
                </h4>
                <p className={`text-sm ${jsClasses.text.secondary} leading-relaxed`}>
                  Design mobile-first com breakpoints otimizados, navegação adaptativa e componentes 
                  que se ajustam perfeitamente a qualquer tamanho de tela.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 