'use client';

import React from 'react';
import { HiCalendar, HiCode, HiSparkles, HiCog, HiLightningBolt, HiGlobe } from 'react-icons/hi';
import Section from "../../widgets/Section";

// Timeline data based on JavaScript history with icons
const timelineData = [
  {
    date: "1997",
    title: "ES1 (ECMAScript 1) - O Nascimento",
    subtitle: "Primeira versão oficial do JavaScript",
    description: "A primeira especificação oficial do JavaScript, estabelecendo as bases da linguagem que conhecemos hoje. Definiu a sintaxe fundamental e os conceitos básicos.",
    icon: HiSparkles,
  },
  {
    date: "1998",
    title: "ES2 - Refinamento",
    subtitle: "Pequenas correções e melhorias",
    description: "Versão de correção com melhorias menores e alinhamento com o padrão ISO/IEC 16262. Focou em estabilidade e padronização.",
    icon: HiCog,
  },
  {
    date: "1999",
    title: "ES3 - Expansão de Recursos",
    subtitle: "Regular expressions, try/catch, strings",
    description: "Introduziu recursos importantes como expressões regulares, blocos try/catch para tratamento de erros e melhor manipulação de strings. Esta versão dominou por uma década.",
    icon: HiCode,
  },
  {
    date: "2009",
    title: "ES5 - Modernização",
    subtitle: "strict mode, JSON, Array methods",
    description: "Trouxe o modo estrito ('use strict'), suporte nativo ao JSON, métodos de array como forEach, map e filter, e Object.defineProperty() para melhor controle de propriedades.",
    icon: HiLightningBolt,
  },
  {
    date: "2015",
    title: "ES6/ES2015 - Revolução",
    subtitle: "Arrow functions, Classes, Modules",
    description: "A maior atualização da linguagem! Introduziu arrow functions, classes, let/const, template literals, módulos (import/export), Promises e destructuring. Mudou completamente como escrevemos JavaScript.",
    icon: HiGlobe,
  },
  {
    date: "2016",
    title: "ES2017/ES7 - Pequenas Adições",
    subtitle: "Array.includes(), operador **",
    description: "Adicionou Array.includes() para verificação de elementos e o operador de exponenciação (**). Versão focada em melhorias pontuais.",
    icon: HiCalendar,
  },
  {
    date: "2017",
    title: "ES2018/ES8 - Async/Await",
    subtitle: "Programação assíncrona simplificada",
    description: "Introduziu async/await, revolucionando a programação assíncrona. Também trouxe Object.entries(), Object.values() e melhorias em strings com padding.",
    icon: HiSparkles,
  },
  {
    date: "2018",
    title: "ES2019/ES9 - Rest/Spread Evolution",
    subtitle: "Propriedades Rest/Spread, Promise.finally()",
    description: "Expandiu Rest/Spread para objetos, adicionou iteração assíncrona, Promise.finally() e melhorias em expressões regulares.",
    icon: HiCode,
  },
  {
    date: "2019",
    title: "ES2020/ES10 - Array Flattening",
    subtitle: "Array.flat(), Object.fromEntries()",
    description: "Trouxe Array.flat() e flatMap() para achatar arrays, Object.fromEntries(), String.trimStart()/trimEnd() e optional catch binding.",
    icon: HiCog,
  },
  {
    date: "2020",
    title: "ES2021/ES11 - BigInt e Operadores",
    subtitle: "BigInt, ??, ?., dynamic import",
    description: "Introduziu BigInt para números grandes, nullish coalescing (??), optional chaining (?.), dynamic import() e globalThis.",
    icon: HiLightningBolt,
  },
  {
    date: "2021",
    title: "ES2022/ES12 - String e Promise",
    subtitle: "replaceAll(), Promise.any()",
    description: "Adicionou String.replaceAll(), Promise.any(), operadores de atribuição lógica e separadores numéricos para melhor legibilidade.",
    icon: HiGlobe,
  },
  {
    date: "2022",
    title: "ES2023/ES13 - Top-level Await",
    subtitle: "Class fields, Private methods",
    description: "Revolucionou com top-level await, campos de classe públicos e privados, métodos privados (#), campos estáticos e Error.cause.",
    icon: HiSparkles,
  },
  {
    date: "2023",
    title: "ES2024/ES14 - Array Enhancements",
    subtitle: "findLast(), Symbols in WeakMap",
    description: "Trouxe Array.findLast() e findLastIndex(), suporte a hashbang grammar e Symbols como chaves em WeakMap.",
    icon: HiCalendar,
  },
  {
    date: "2024",
    title: "ES2025/ES15 - O Futuro",
    subtitle: "Promise.withResolvers(), Temporal API",
    description: "Introduz Promise.withResolvers() e trabalha em propostas revolucionárias como Temporal API, Records & Tuples e Pattern matching.",
    icon: HiCode,
  }
];

/**
 * TimelineSection component - Interactive JavaScript history timeline
 * Displays the evolution of JavaScript/ECMAScript versions over time
 * Custom timeline built with Tailwind CSS for maximum compatibility
 * Responsive design with proper dark mode support
 */
export default function TimelineSection() {
  return (
    <Section 
      id="timeline" 
      title="Evolução do JavaScript" 
      subtitle="Uma jornada através da história e evolução do ECMAScript"
      backgroundColor="tertiary"
      className="min-h-screen"
    >
      {/* Container com altura responsiva */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative">
          {/* Linha central da timeline */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#f7df1e] transform md:-translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-[#2d2d2d]/90 border border-[#f7df1e]/20 rounded-lg p-6 ml-16 md:ml-0 hover:border-[#f7df1e]/40 hover:shadow-lg hover:shadow-[#f7df1e]/20 transition-all duration-300 backdrop-blur-sm">
                      {/* Date */}
                      <div className="text-[#f7df1e] text-sm font-medium mb-2">
                        {item.date}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-[#f7f7f7] text-lg font-semibold mb-2 leading-tight">
                        {item.title}
                      </h3>
                      
                      {/* Subtitle */}
                      <div className="text-[#f7df1e] text-sm font-medium mb-3">
                        {item.subtitle}
                      </div>
                      
                      {/* Description */}
                      <p className="text-[#cccccc] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Icon circle */}
                  <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-[#f7df1e] rounded-full flex items-center justify-center transform md:-translate-x-1/2 border-4 border-[#1a1a1a] hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-[#f7df1e]/50">
                    <IconComponent className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  
                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
} 