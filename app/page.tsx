'use client';

import React from 'react';
import SideNavigation from "../widgets/SideNavigation";
import {
  HeroSection,
  FeaturesSection,
  TimelineSection,
  ResourcesSection,
  CTASection,
  TechnologiesSection
} from "./home";

// Configuração das seções para navegação lateral
const navigationSections = [
  { id: 'hero', label: 'Início', icon: '🏠' },
  { id: 'timeline', label: 'História', icon: '📅' },
  { id: 'features', label: 'Funcionalidades', icon: '⚡' },
  { id: 'start', label: 'Quiz', icon: '🎯' },
  { id: 'resources', label: 'Recursos', icon: '🛠️' },
  { id: 'technologies', label: 'Tecnologias', icon: '💻' }
];

/**
 * Homepage principal do projeto JavaScript Fundamentos
 * Contém seções informativas sobre conceitos e curiosidades do JavaScript
 * Utiliza tema preto e amarelo inspirado no logo do JavaScript
 * Agora organizado em componentes modulares para melhor manutenibilidade
 */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#1a1a1a]">
      {/* Navegação lateral retrátil */}
      <SideNavigation sections={navigationSections} />
      
      {/* Container principal com padding para navegação */}
      <div className="lg:pl-20">
        <HeroSection />
        <TimelineSection />
        <FeaturesSection />
        <CTASection />
        <ResourcesSection />
        <TechnologiesSection />
      </div>
    </div>
  );
} 