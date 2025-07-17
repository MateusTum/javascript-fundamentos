'use client';

import React from 'react';
import Section from "../../widgets/Section";
import { jsClasses } from '../../lib/colors';

/**
 * AboutSection component - Project information section
 * Contains project description, benefits, and statistics
 * Features two-column layout with information and stats
 */
export default function AboutSection() {
  return (
    <Section 
      id="about" 
      title="Sobre o Projeto" 
      subtitle="Uma coleção abrangente de conhecimentos JavaScript"
      backgroundColor="secondary"
    >
      <div className="max-w-6xl text-left-custom">
        <div className={`${jsClasses.bg.secondary} rounded-2xl p-8 shadow-xl border-2 ${jsClasses.border.yellow}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${jsClasses.text.primary}`}>
                Por que este projeto existe?
              </h3>
              <p className={`mb-6 leading-relaxed ${jsClasses.text.secondary}`}>
                JavaScript é uma linguagem cheia de surpresas e peculiaridades. Este projeto 
                documenta e explica esses comportamentos únicos que todo desenvolvedor 
                deveria conhecer para escrever código mais confiável.
              </p>
              <ul className={`space-y-3 ${jsClasses.text.secondary}`}>
                <li className="flex items-center">
                  <span className={`${jsClasses.text.primary} mr-3 text-xl`}>✓</span>
                  Previne bugs difíceis de encontrar
                </li>
                <li className="flex items-center">
                  <span className={`${jsClasses.text.primary} mr-3 text-xl`}>✓</span>
                  Melhora a qualidade do código
                </li>
                <li className="flex items-center">
                  <span className={`${jsClasses.text.primary} mr-3 text-xl`}>✓</span>
                  Prepara para entrevistas técnicas
                </li>
                <li className="flex items-center">
                  <span className={`${jsClasses.text.primary} mr-3 text-xl`}>✓</span>
                  Aumenta confiança na linguagem
                </li>
              </ul>
            </div>
            
            <div className={`${jsClasses.bg.tertiary} p-8 rounded-xl border ${jsClasses.border.yellow}`}>
              <h4 className={`text-xl font-semibold mb-4 ${jsClasses.text.primary}`}>📊 Estatísticas</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`${jsClasses.text.secondary}`}>Curiosidades</span>
                  <span className={`font-bold text-2xl ${jsClasses.text.primary}`}>9+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`${jsClasses.text.secondary}`}>Exemplos de Código</span>
                  <span className={`font-bold text-2xl ${jsClasses.text.primary}`}>50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`${jsClasses.text.secondary}`}>Versões Cobertas</span>
                  <span className={`font-bold text-2xl ${jsClasses.text.primary}`}>ES1-ES2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 