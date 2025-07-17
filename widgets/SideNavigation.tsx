'use client';

import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import { jsClasses } from '../lib/colors';
import { 
  HiOutlineHome, 
  HiOutlineBolt, 
  HiOutlineRocketLaunch, 
  HiOutlineBookOpen, 
  HiOutlineWrenchScrewdriver, 
  HiOutlinePlay 
} from 'react-icons/hi2';

interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
}

interface SideNavigationProps {
  sections: NavigationItem[];
}

/**
 * Mapeamento de ícones minimalistas para cada seção
 */
const getIconComponent = (sectionId: string) => {
  const iconProps = { className: "w-4 h-4", strokeWidth: 1.5 };
  
  switch (sectionId) {
    case 'hero':
      return <HiOutlineHome {...iconProps} />;
    case 'features':
      return <HiOutlineBolt {...iconProps} />;
    case 'timeline':
      return <HiOutlineRocketLaunch {...iconProps} />;
    case 'resources':
      return <HiOutlineWrenchScrewdriver {...iconProps} />;
    case 'start':
      return <HiOutlinePlay {...iconProps} />;
    case 'technologies':
      return <HiOutlineBookOpen {...iconProps} />;
    default:
      return <div className="w-2 h-2 rounded-full bg-current" />;
  }
};

/**
 * Componente de navegação lateral retrátil com pontos clicáveis
 * Permite navegação suave entre seções da página com animações em sequência
 * @param sections - Array com as seções da página para navegação
 */
const SideNavigation: React.FC<SideNavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [showItems, setShowItems] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Encontrar qual seção está atualmente visível
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Ajustar a sensibilidade para detecção da seção ativa
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.3) {
            setActiveSection(section.id);
          }
        }
      });
    };

    // Detectar seção ativa no carregamento inicial
    setTimeout(handleScroll, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Controla a animação sequencial dos itens
  useEffect(() => {
    if (isExpanded) {
      // Aguarda a expansão do container principal (500ms) + pequeno delay
      const timer = setTimeout(() => {
        setShowItems(true);
      }, 550);
      return () => clearTimeout(timer);
    } else {
      // Esconde os itens imediatamente quando colapsa
      setShowItems(false);
    }
  }, [isExpanded]);

  /**
   * Scroll suave para uma seção específica com velocidade constante
   * @param sectionId - ID da seção de destino
   */
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    // Atualizar seção ativa imediatamente para feedback visual instantâneo
    setActiveSection(sectionId);

    // Calcular distância para determinar duração com velocidade constante
    const targetOffset = targetElement.offsetTop - 80;
    const currentScroll = window.scrollY;
    
    const duration = 0;

    scroller.scrollTo(sectionId, {
      duration: duration,
      delay: 0,
      smooth: 'linear', // Velocidade constante
      offset: 0,
    });
    
    // Colapsar navegação em mobile após clique
    if (window.innerWidth < 1024) {
      setIsExpanded(false);
    }
  };

  /**
   * Toggle da navegação lateral
   */
  const toggleNavigation = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleNavigation}
        className={`
          fixed left-4 top-6 z-50 p-2 rounded-full transition-all duration-300 cursor-pointer
          ${jsClasses.bg.secondary} ${jsClasses.border.yellow} border-2
          ${jsClasses.hover.bgYellow} ${jsClasses.hover.textBlack}
          ${jsClasses.text.primary} shadow-lg hover:shadow-xl
          ${isExpanded ? 'rotate-180' : 'rotate-0'}
        `}
        aria-label={isExpanded ? 'Fechar navegação' : 'Abrir navegação'}
      >
        <svg 
          className="w-6 h-6 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </button>

      {/* Navigation Panel */}
      <nav 
        className={`
          fixed left-0 top-0 h-full z-40 transition-all duration-500 ease-in-out
          ${isExpanded ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Backdrop for mobile */}
        {isExpanded && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleNavigation}
          />
        )}

        {/* Navigation Content */}
        <div 
          className={`
            relative h-full w-80 lg:w-20 ${jsClasses.bg.gradient} 
            ${jsClasses.border.yellow} border-r-2 shadow-2xl
            px-4
            flex flex-col items-start justify-center
            ${isExpanded ? 'lg:w-80' : ''}
            transition-all duration-500 ease-out
          `}
        >
          {/* Navigation Points */}
          <div className="flex flex-col space-y-4">
            {sections.map((section, index) => (
              <div 
                key={section.id} 
                className="relative group"
              >
                <div className="relative flex items-center">
                  {/* Fixed Icon Container - always stays in same place */}
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      w-11 h-11 p-2 rounded-lg flex items-center justify-center cursor-pointer group
                      transition-all duration-300 ease-out
                      ${
                        activeSection === section.id
                          ? `${jsClasses.bg.yellow} ${jsClasses.text.inverse} shadow-lg scale-105 shadow-[#f7df1e]/40`
                          : `${jsClasses.bg.secondary} ${jsClasses.text.primary} 
                             hover:bg-[#f7df1e]/20 hover:text-white`
                      }
                      hover:scale-110 focus:scale-110 hover:shadow-lg hover:shadow-[#f7df1e]/30
                      border-2 ${activeSection === section.id ? 'border-transparent' : jsClasses.border.yellow}
                      transform-gpu
                    `}
                    aria-label={`Ir para seção ${section.label}`}
                  >
                    {/* Icon - always same size and position */}
                    <div className={`
                      w-7 h-7 rounded-md flex items-center justify-center
                      transition-all duration-300 group-hover:scale-110
                      ${activeSection === section.id ? 'bg-black/10' : 'bg-current/5'}
                    `}>
                      {getIconComponent(section.id)}
                    </div>
                  </button>
                  
                  {/* Label - fades in/out independently */}
                  <span 
                    className={`
                      absolute left-14 whitespace-nowrap font-medium
                      transition-all duration-500 ease-out pointer-events-none
                      flex items-center
                      ${isExpanded && showItems ? 'opacity-100' : 'opacity-0'}
                      ${jsClasses.text.primary}
                    `}
                    style={{
                      transitionDelay: isExpanded && showItems ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    {section.label}
                  </span>
                </div>

                {/* Desktop Tooltip Customizada - só aparece quando não expandido */}
                <div 
                  className={`
                    hidden lg:block absolute left-14 top-1/2 transform -translate-y-1/2 
                    opacity-0 group-hover:opacity-100 transition-all duration-300 
                    pointer-events-none z-20
                    ${isExpanded ? 'lg:hidden' : ''}
                    delay-300
                  `}
                >
                  <div 
                    className={`
                      ${jsClasses.bg.secondary} ${jsClasses.text.primary} 
                      text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-xl
                      ${jsClasses.border.yellow} border backdrop-blur-sm
                      transform translate-x-2 group-hover:translate-x-0
                    `}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4">
                        {getIconComponent(section.id)}
                      </div>
                      <span>{section.label}</span>
                    </div>
                  </div>
                  {/* Seta do tooltip */}
                  <div 
                    className={`
                      absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 
                      w-2 h-2 ${jsClasses.bg.secondary} rotate-45
                      ${jsClasses.border.yellow} border-l border-b
                    `}
                  />
                </div>

                {/* Linha conectora entre pontos */}
                {index < sections.length - 1 && (
                  <div 
                    className={`
                      absolute left-1/2 top-full transform -translate-x-1/2 
                      w-px h-4 transition-opacity duration-300 ease-out
                      ${activeSection === section.id || activeSection === sections[index + 1]?.id 
                        ? jsClasses.bg.yellow 
                        : jsClasses.bg.tertiary
                      }
                      ${(!isExpanded || showItems) ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{
                      transitionDelay: showItems ? `${index * 100}ms` : '0ms'
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div 
            className={`
              absolute top-1/2 transform -translate-y-1/2 w-px h-72
              ${jsClasses.bg.tertiary} -z-10
              ${isExpanded ? 'lg:left-5' : 'left-1/2 -translate-x-1/2'}
              transition-all duration-500 ease-out
              opacity-100
            `}
          >
            <div 
              className={`
                bg-gradient-to-b from-[#f7df1e] via-[#e6c914] to-[#f9e55a] 
                w-full transition-all duration-700 ease-out rounded-full
                shadow-sm shadow-[#f7df1e]/30
              `}
              style={{
                height: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%`
              }}
            />
          </div>

          {/* Logo/Brand quando expandido */}
          {isExpanded && (
            <div 
              className={`
                absolute bottom-8 left-1/2 transform -translate-x-1/2
                ${jsClasses.text.primary} text-center transition-all duration-500 ease-out
                ${showItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{
                transitionDelay: showItems ? `${(sections.length * 100) + 200}ms` : '0ms'
              }}
            >
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default SideNavigation; 